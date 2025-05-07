<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Testimonial;

use App\Http\Requests\Admin\TestimonialRequest;
use App\Http\Traits\AdminTrait;
use Illuminate\Support\Facades\Storage;

class TestimonialsController extends Controller
{
    use AdminTrait;

    public function index()
    {
        return view ("pages.testimonials");
    }

    public function create(TestimonialRequest $request){
        $testimonial = request(["message","full_name","job"]);

        $image_name = $this->setFileName('t-',$request->file('image'));
        $company_logo_name = $this->setFileName('t-',$request->file('company_logo'));
        $store_image = Storage::disk('gcs')->putFileAs('img/testimonials',$request->file('image'),$image_name);
        $store_company_logo = Storage::disk('gcs')->putFileAs('img/testimonials/company-logo',$request->file('company_logo'),$company_logo_name);
        if(!$store_image || !$store_company_logo){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);
        }
        $testimonial = array_merge($testimonial,["image"=>$image_name]);
        $testimonial = array_merge($testimonial,["company_logo"=>$company_logo_name]);
        $cliente = $this->getMaxIndex(Testimonial::selectRaw('MAX(id),MAX(`index`) as "index"')->get());
        if(count($cliente) > 0){
            $testimonial = array_merge($testimonial,["index"=>$cliente[0]["index"] + 1]);
        }
        else{
            $testimonial = array_merge($testimonial,["index"=>1]);
        }
        try{
            $testimonial = Testimonial::UpdateOrCreate($testimonial);
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.create.success', ['name' => trans('custom.attribute.testimonial')])],200);
        }
        catch(\Exception $e){

            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.create.error', ['name' => trans('custom.attribute.testimonial')]) ],500);
        }
    }

    public function getTestimonial(Testimonial $testimonial){
        return response()->json($testimonial);
    }

    public function getTestimonials(){
        $testimonials = Testimonial::orderBy('index')->get();
        return response()->json($testimonials);
    }

    public function delete(Testimonial $testimonial){
        try {
            $delete_testimonial = $testimonial->delete();
            if($delete_testimonial){
                Storage::disk('gcs')->delete('img/testimonials/'.$testimonial->image);
                Storage::disk('gcs')->delete('img/testimonials/'.$testimonial->company_logo);
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.testimonial')])],200);
        }
        catch (\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.testimonial')])],500);
        }
    }

    public function order(Request $request){
        $testimonials = $request->all();
        try{
            for ($i=0; $i < count($testimonials); $i++) {
                $cliente = Testimonial::UpdateOrCreate(["id"=>$testimonials[$i]["id"]],["index"=>$i + 1]);
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.testimonial')])],200);
        }
        catch (\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.testimonial')])],500);
        }
    }

    public function update(TestimonialRequest $request,Testimonial $testimonial){
        $request_testimonial = request(["message","full_name","job"]);
        if($request->hasFile('image')){
            $image_name = $this->setFileName('t-',$request->file('image'));
            $store_image = Storage::disk('gcs')->putFileAs('img/testimonials',$request->file('image'),$image_name);
            if(!$store_image){
                return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);
            }
            $request_testimonial = array_merge($request_testimonial,["image" => $image_name]);
        }
        else{
            $request_testimonial = array_merge($request_testimonial,["image" => $testimonial->image]);
        }

        if($request->hasFile('company_logo')){
            $company_logo_name = $this->setFileName('t-',$request->file('company_logo'));
            $store_company_logo = Storage::disk('gcs')->putFileAs('img/testimonials/company-logo',$request->file('company_logo'),$company_logo_name);
            if(!$store_company_logo){
                return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);
            }
            $request_testimonial = array_merge($request_testimonial,["company_logo" => $company_logo_name]);
        }
        else{
            $request_testimonial = array_merge($request_testimonial,["company_logo" => $testimonial->company_logo]);
        }

        if($request->hasFile('image') && $testimonial->image){
            Storage::disk('gcs')->delete('img/testimonials/'.$testimonial->image);
        }
        if($request->hasFile('company_logo') && $testimonial->company_logo){
            Storage::disk('gcs')->delete('img/testimonials/company-logo'.$testimonial->company_logo);
        }
        try{
            $testimonial = Testimonial::UpdateOrCreate(["id"=>$testimonial->id],$request_testimonial);
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.testimonial')]) ],200);
        }
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.testimonial')]) ],500);
        }
    }
}
