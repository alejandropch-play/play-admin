<?php

namespace App\Http\Controllers\Admin\Information;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

use App\Http\Traits\AdminTrait;
use App\Http\Requests\Admin\Information\SeoRequest;
use App\MasterPage;

class SeoController extends Controller
{
    use AdminTrait;

    public function index(){
        return view("pages.info.seo");
    }

    public function getPages(){
        $pages = MasterPage::all();
        return response()->json($pages);    
    }

    public function update(SeoRequest $request,MasterPage $page){
        $request_page = request(["title","seo_keywords","seo_description"]);
        if($request->hasFile('seo_image')){
            $image_name = $this->setFileName('p-',$request->file('seo_image'));
            $store_image = Storage::disk('gcs')->putFileAs('img/pages/',$request->file('seo_image'),$image_name);
            if(!$store_image){
                return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);    
            }
            //$request_page = array_merge($request_page,["seo_image" => Storage::disk('gcs')->url('img/pages/'.$image_name)]); 
            $request_page = array_merge($request_page,["seo_image" => $image_name ]);   
        }  
        else{
            $request_page = array_merge($request_page,["seo_image" => $page->seo_image]);   
        }
        if($request->hasFile('seo_image') && $page->seo_image){
            Storage::disk('gcs')->delete('img/pages/'.$page->seo_image);
        } 
        try{
            $page = MasterPage::UpdateOrCreate(["id"=>$page->id],array_merge($request_page));  
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.seo')])],200);
        }
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.seo')]) ],500);
        }
    }

}
