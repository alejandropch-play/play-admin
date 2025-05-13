<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\WhyUsRequest;
use App\Http\Traits\AdminTrait;
use App\WhyUs;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Storage;

class WhyUsController extends Controller
{
    use AdminTrait;

    public function index()
    {
        return view ("pages.why-us");
    }

    public function create(WhyUsRequest $request){
      $solution = request(["title","description"]);

      $image_name = $this->setFileName('ssi-',$request->file('image'));
      $store_image = Storage::disk('gcs')->putFileAs('img/solutions/',$request->file('image'),$image_name);
      if(!$store_image){
          return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);    
      }
      $solution = array_merge($solution,["image"=>$image_name]);


      $solution_index = $this->getMaxIndex(WhyUs::selectRaw('MAX(id),MAX(`index`) as "index"')->get());
      if(count($solution_index) > 0){
          $solution = array_merge($solution,["index"=>$solution_index[0]["index"] + 1]); 
      }
      else{
          $solution = array_merge($solution,["index"=>1]);    
      }
      try{
          $solution = WhyUs::UpdateOrCreate($solution); 
          return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.create.success', ['name' => trans('custom.attribute.why-us')])],200);
      }
      catch(\Exception $e){
          return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.create.error', ['name' => trans('custom.attribute.why-us')]) ],500);    
      }
    }

    public function getAllWhyUs(Request $request){
        $solutions = WhyUs::orderBy('index','asc')->get();
        return response()->json($solutions);
    }

    public function getWhyUs(WhyUs $solution){
      return response()->json($solution);
    }

    public function delete(WhyUs $solution){
    
      $image = $solution->image;
      try {
          $solution_delete = $solution->delete();
          if($solution_delete){
              Storage::disk('private')->delete('files/img/solutions/'.$image);    
          }
          return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.why-us')])],200);
      } 
      catch (\Exception $e){
          return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.why-us')])],500);
      }
    }

    public function order(Request $request){
      $stories = $request->all();
      try{
          for ($i=0; $i < count($stories); $i++) { 
              $solution = WhyUs::UpdateOrCreate(["id"=>$stories[$i]["id"]],["index"=>$i + 1]);
          }
          return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.why-us')])],200);
      } 
      catch (\Exception $e){
          return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.why-us')])],500);
      }
    }

    public function update(WhyUsRequest $request,WhyUs $solution){
      $request_solution = request(["title","description"]);
      if($request->hasFile('image')){
          $image_name = $this->setFileName('ssl-',$request->file('image'));
          $store_image = Storage::disk('gcs')->putFileAs('img/solutions/',$request->file('image'),$image_name);
          if(!$store_image){
              return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);    
          }
          $request_solution = array_merge($request_solution,["image" => $image_name]);   
      }  
      else{
          $request_solution = array_merge($request_solution,["image" => $solution->image]);   
      }
      
      if($request->hasFile('image') && $solution->image){
          Storage::disk('gcs')->delete('img/solutions/'.$solution->image);
      } 
      try{
          $solution = WhyUs::UpdateOrCreate(["id"=>$solution->id],$request_solution); 
          return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.why-us')])],200);
      }
      catch(\Exception $e){
          return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.why-us')]) ],500);
      }
  }
}
