<?php

namespace App\Http\Controllers\Api;

use App\BusinessLineLogo;
use App\Category;
use App\Http\Controllers\Controller;
use App\Troubleshooting;
use Illuminate\Http\Request;

use App\Http\Traits\ApiTrait;
use App\SocialNetwork;
use App\Department;
use App\History;
use App\Information;
use App\MasterPage;
use App\Post;
use App\Partner;
use App\SuccessStory;
use App\LeadMedium;
use App\WhyUs;
use Illuminate\Support\Facades\Log;

class ApiController extends Controller
{
    use ApiTrait;

    public function layout(){
        $social_networks = SocialNetwork::select('id','url','master_social_network_id')->with('master_social_networks:id,icon,name')->orderBy('index','asc')->get();
        $main = Department::select('title','logo_white')->where('main',1)->first();
        $information = Information::first();
        //$pages = MasterPage::select('name','slug')->where('slug','!=','politicas-privacidad')->where('department_id',NULL)->orWhere('slug',NULL)->get();
        $pages = MasterPage::select('name','slug')->where('slug','!=','politicas-privacidad')->where('department_id',NULL)->orWhere('slug',NULL)->orderBy('index')->get();
        $departments = $this->getDepartments();
        $partners = Partner::select('image','name')->orderBy('index','asc')->get();
        $medium = LeadMedium::get();
        $data = array(
            "menu" => array(
                "social_networks" => $social_networks,
                "main" => $main,
                "departments" => $departments,
                "pages" => $pages,
            ),
            "footer" => array(
                "social_networks" => $social_networks,
                "main" => $main,
                "departments" => $departments,
                "information" => $information,
                "pages" => $pages,
                "partners" => $partners
            ),
            "form" => array(
                "medium" => $medium
            )
        );
        return $this->sendResponse($data);
    }

    public function paginateBlog(Request $request){
        $posts = Post::select('title','slug','thumbnail','excerpt','category_id','image','created_at')->where('published',1)->with('category:id,name,slug');
        if($request->category){
            $category = Category::where('slug',$request->category)->first();
            $posts = $posts->where('category_id',$category->id);
        }
        $posts = $posts->orderBy('created_at','desc')->paginate(6);
        $data = array(
            "blog" => $posts
        );
        return $this->sendResponse($data);
    }

    public function qualityProcessData(Request $request){
        $content = MasterPage::where('slug','conocenos')->first();
        if (!$content) {
            return $this->sendError("El page 'conocenos' no existe");
        }
        $content->load(['sections' => function ($query) {
            return $query->where('id', 42)->select('id','name','master_page_id');
        }]);
        $sections = $content->sections->first()->content;

        if(!$sections){
            return $this->sendError("El page 'conocenos' no existe");
        }
        $data = array(
            "quality_process" => $sections
        );
        return $this->sendResponse($data);
    }
    public function paginateSuccessStories(Request $request){
        $master_page = MasterPage::where('slug',$request->department)->first();
        if(!$master_page){
            return $this->sendError("Not found");
        }
        $success_stories = $this->getPaginateSuccessStories($request);
        $data = array(
            "success_stories" => $success_stories
        );
        return $this->sendResponse($data);
    }

    public function getTroubleshooting(Request $request){
        $master_page = MasterPage::where('slug',$request->department)->first();
        if(!$master_page){
            return $this->sendError("Not found");
        }
        $troubleshooting = Troubleshooting::where('department_id',$master_page->department_id)->orderBy('index')->get();
        if($troubleshooting->isEmpty()){
            return $this->sendResponse(array(
                "troubleshooting" => array()
            ));
        }
        $data = array(
            "troubleshooting" => $troubleshooting
        );
        return $this->sendResponse($data);
    }

    public function getBusinessLineLogos(Request $request){
        $master_page = MasterPage::where('slug',$request->department)->first();
        if(!$master_page){
            return $this->sendError("Not found");
        }
        $business_line_logos = BusinessLineLogo::where('department_id',$master_page->department_id)->orderBy('index')->get();
        if($business_line_logos->isEmpty()){
            return $this->sendResponse(array());
        }

        return $this->sendResponse($business_line_logos);
    }

    public function getWhyUs(){
        $why_us = WhyUs::orderBy('index')->get();

        if($why_us->isEmpty()){
            return $this->sendResponse(array());
        }

        return $this->sendResponse($why_us);
    }
    public function getHistory(){
        $history = History::orderBy('index')->get();

        if($history->isEmpty()){
            return $this->sendResponse(array());
        }
        return $this->sendResponse($history);
    }
}
