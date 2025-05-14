<?php

namespace App\Http\Controllers\Admin;

use App\BusinessLineLogo;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\BusinessLineLogoRequest;
use App\Http\Traits\AdminTrait;
use Illuminate\Support\Facades\Storage;

class BusinessLineLogoController extends Controller
{
    use AdminTrait;

    public function index()
    {
        return view ("pages.business-line-logos");
    }

    public function create(BusinessLineLogoRequest $request){
      $solution = request(["title","department_id"]);

      $image_name = $this->setFileName('ssi-',$request->file('image'));
      $store_image = Storage::disk('gcs')->putFileAs('img/solutions/',$request->file('image'),$image_name);
      if(!$store_image){
          return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);    
      }
      $solution = array_merge($solution,["image"=>$image_name]);


      $solution_index = $this->getMaxIndex(BusinessLineLogo::selectRaw('MAX(id),MAX(`index`) as "index"')->get());
      if(count($solution_index) > 0){
          $solution = array_merge($solution,["index"=>$solution_index[0]["index"] + 1]); 
      }
      else{
          $solution = array_merge($solution,["index"=>1]);    
      }
      try{
          $solution = BusinessLineLogo::UpdateOrCreate($solution); 
          return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.create.success', ['name' => trans('custom.attribute.business_line_logo')])],200);
      }
      catch(\Exception $e){
          return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.create.error', ['name' => trans('custom.attribute.business_line_logo')]) ],500);    
      }
    }

    public function getBusinessLineLogos(Request $request){
      
      $solution = BusinessLineLogo::where('department_id',$request->department)->orderBy('index')->get();
      return response()->json($solution);
    }

    public function getBusinessLineLogo(BusinessLineLogo $solution){
      return response()->json($solution);
    }

    public function delete(BusinessLineLogo $solution){
    
      $image = $solution->image;
      try {
          $solution_delete = $solution->delete();
          if($solution_delete){
              Storage::disk('private')->delete('files/img/story/'.$image);    
          }
          return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.business_line_logo')])],200);
      } 
      catch (\Exception $e){
          return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.business_line_logo')])],500);
      }
    }

    public function order(Request $request){
      $stories = $request->all();
      try{
          for ($i=0; $i < count($stories); $i++) { 
              $solution = BusinessLineLogo::UpdateOrCreate(["id"=>$stories[$i]["id"]],["index"=>$i + 1]);
          }
          return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.business_line_logo')])],200);
      } 
      catch (\Exception $e){
          return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.business_line_logo')])],500);
      }
    }

    public function update(BusinessLineLogoRequest $request,BusinessLineLogo $solution){
      $request_solution = request(["title","department_id"]);
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
          $solution = BusinessLineLogo::UpdateOrCreate(["id"=>$solution->id],$request_solution); 
          return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.business_line_logo')])],200);
      }
      catch(\Exception $e){
          return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.business_line_logo')]) ],500);
      }
  }
}
