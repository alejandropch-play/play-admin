<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\HistoryRequest;
use App\Http\Traits\AdminTrait;
use App\History;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Storage;

class HistoryController extends Controller
{
    use AdminTrait;

    public function index()
    {
        return view("pages.history");
    }

    public function create(HistoryRequest $request){
        $history = request(["title","description"]);

        $image_name = $this->setFileName('ssi-',$request->file('image'));
        $store_image = Storage::disk('gcs')->putFileAs('img/history/',$request->file('image'),$image_name);
        if(!$store_image){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);    
        }
        $history = array_merge($history,["image"=>$image_name]);

        $history_index = $this->getMaxIndex(History::selectRaw('MAX(id),MAX(`index`) as "index"')->get());
        if(count($history_index) > 0){
            $history = array_merge($history,["index"=>$history_index[0]["index"] + 1]); 
        }
        else{
            $history = array_merge($history,["index"=>1]);    
        }
        try{
            $history = History::UpdateOrCreate($history); 
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.create.success', ['name' => trans('custom.attribute.history')])],200);
        }
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.create.error', ['name' => trans('custom.attribute.history')]) ],500);    
        }
    }

    public function getAllHistory(){
        $histories = History::orderBy('index','asc')->get();
        return response()->json($histories);
    }

    public function getHistory(History $history){
        return response()->json($history);
    }

    public function delete(History $history){
        $image = $history->image;
        try {
            $history_delete = $history->delete();
            if($history_delete){
                Storage::disk('private')->delete('files/img/history/'.$image);    
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.history')])],200);
        } 
        catch (\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.history')])],500);
        }
    }

    public function order(Request $request){
        $histories = $request->all();
        try{
            for ($i=0; $i < count($histories); $i++) { 
                $history = History::UpdateOrCreate(["id"=>$histories[$i]["id"]],["index"=>$i + 1]);
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.history')])],200);
        } 
        catch (\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.history')])],500);
        }
    }

    public function update(HistoryRequest $request, History $history){
        $request_history = request(["title","description"]);
        if($request->hasFile('image')){
            $image_name = $this->setFileName('ssl-',$request->file('image'));
            $store_image = Storage::disk('gcs')->putFileAs('img/history/',$request->file('image'),$image_name);
            if(!$store_image){
                return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);    
            }
            $request_history = array_merge($request_history,["image" => $image_name]);   
        }  
        else{
            $request_history = array_merge($request_history,["image" => $history->image]);   
        }
        
        if($request->hasFile('image') && $history->image){
            Storage::disk('gcs')->delete('img/history/'.$history->image);
        } 
        try{
            $history = History::UpdateOrCreate(["id"=>$history->id],$request_history); 
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.history')])],200);
        }
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.history')]) ],500);
        }
    }
}
