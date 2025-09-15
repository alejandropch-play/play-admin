<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Traits\AdminTrait;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\Admin\SuccessStoryRequest;
use App\Http\Requests\Admin\ToolingRequest;
use App\Tooling;

class ToolingController extends Controller
{
    use AdminTrait;

    public function index()
    {
        return view ("pages.tooling");
    }

    public function create(ToolingRequest $request){
      $tooling = request(["title", "department_id"]);
      $logo_name = $this->setFileName('ssl-',$request->file('logo'));
      $store_logo = Storage::disk('gcs')->putFileAs('img/tooling/',$request->file('logo'),$logo_name);
      if(!$store_logo){
          return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);    
      }
      $tooling = array_merge($tooling,["logo"=>$logo_name]);

      $image_name = $this->setFileName('ssi-',$request->file('image'));
      $store_image = Storage::disk('gcs')->putFileAs('img/tooling/',$request->file('image'),$image_name);
      if(!$store_image){
          return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);    
      }
      $tooling = array_merge($tooling,["image"=>$image_name]);


      $story_index = $this->getMaxIndex(Tooling::selectRaw('MAX(id),MAX(`index`) as "index"')->get());
      if(count($story_index) > 0){
          $tooling = array_merge($tooling,["index"=>$story_index[0]["index"] + 1]); 
      }
      else{
          $tooling = array_merge($tooling,["index"=>1]);    
      }
      try{
          $tooling = Tooling::UpdateOrCreate($tooling); 
          return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.create.success', ['name' => trans('custom.attribute.story')])],200);
      }
      catch(\Exception $e){
          return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.create.error', ['name' => trans('custom.attribute.story')]) ],500);    
      }
    }

    public function getToolings(Request $request){
      $toolings = Tooling::where('department_id',$request->department)->orderBy('index')->get();
      return response()->json($toolings);
    }

    public function getTool(Tooling $tooling){
      return response()->json($tooling);
    }

    public function delete(Tooling $tooling){
      $logo = $tooling->logo;
      try {
          $story_delete = $tooling->delete();
          if($story_delete){
              Storage::disk('private')->delete('files/img/tooling/'.$logo);    
          }
          return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.story')])],200);
      } 
      catch (\Exception $e){
          return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.story')])],500);
      }
    }
    public function order(Request $request){
      $toolings = $request->all();
      try{
          for ($i=0; $i < count($toolings); $i++) { 
              Tooling::UpdateOrCreate(["id"=>$toolings[$i]["id"]],["index"=>$i + 1]);
          }
          return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.story')])],200);
      } 
      catch (\Exception $e){
          return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.story')])],500);
      }
    }

    public function update(SuccessStoryRequest $request,Tooling $tooling){
      $request_story = request(["title","department_id"]);
      
      if($request->hasFile('logo')){
          $logo_name = $this->setFileName('ssi-',$request->file('logo'));
          $store_logo = Storage::disk('gcs')->putFileAs('img/tooling/',$request->file('logo'),$logo_name);
          if(!$store_logo){
              return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);    
          }
          $request_story = array_merge($request_story,["logo" => $logo_name]);   
      }  
      else{
          $request_story = array_merge($request_story,["logo" => $tooling->logo]);   
      }
      if($request->hasFile('logo') && $tooling->logo){
          Storage::disk('gcs')->delete('img/tooling/'.$tooling->logo);
      } 
      try{
          $tooling = Tooling::UpdateOrCreate(["id"=>$tooling->id],$request_story); 
          return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.story')])],200);
      }
      catch(\Exception $e){
          return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.story')]) ],500);
      }
  }
}