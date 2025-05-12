<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Traits\ApiTrait;

use App\Award;
use App\Post;
use App\Department;
use App\Customer;
use App\MasterPage;
use App\Category;
use App\Comment;
use App\CoolturaADN;
use App\Cooltura;
use App\Player;
use App\Testimonial;
use Illuminate\Support\Facades\Log;

class PageController extends Controller
{
    use ApiTrait;
    public function getClientLogos(){
        try{
            $customers = Customer::select('name','image')->where('status',1)->orderBy('index')->get();
            return $this->sendResponse($customers);
        }catch(\Exception $e){
            Log::error("Error:", ["err"=>$e]);
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.create.error', ['name' => trans('custom.attribute.customer')]) ],500);
        }
    }
    public function getAwards(){
        $awards = Award::select('name','image','position','category')->orderBy('index')->get();
        $data = array("awards"=> $awards);
        return $this->sendResponse($data);
    }
    public function home(){

        $page = $this->getSeoPage(NULL);
        $awards = Award::select('name','image','position','category')->orderBy('index')->get();
        $posts = Post::select('title','slug','thumbnail','category_id')->where('published',1)->with('category:id,name,slug')->orderBy('created_at','desc')->take(6)->get();
        $customers = Customer::select('name','image')->where('status',1)->orderBy('index')->get();
        //$departments = Department::select('logo','banner','logo_white','title','excerpt')->where('main','!=',1)->get();
        $departments = $this->getDepartments();
        $main = Department::select('excerpt','title','logo_white','logo')->where('main',1)->first();
        $content = $this->getContentPage(NULL);
        $data = array(
            "page" => $page,
            "awards" => $awards,
            "posts" => $posts,
            "departments" => $departments,
            "customers" => $customers,
            "main" => $main,
            "content" => $content
        );
        return $this->sendResponse($data);
    }

    public function getTestimonials(){
        $testimonials = Testimonial::orderBy('index')->get();
        return $this->sendResponse($testimonials);
    }

    public function department(Request $request){
        $master_page = MasterPage::where('slug',$request->department)->first();
        if(!$master_page){
            return $this->sendError("Not found");
        }
        $page = $this->getSeoPage($request->department);
        $department = Department::find($master_page->department_id);
        $content = $this->getContentPage($request->department);
        $success_stories = $this->getPaginateSuccessStories($request);
        $data = array(
            "page" => $page,
            "department" => $department,
            "content" => $content,
            "success_stories" => $success_stories
        );
        return $this->sendResponse($data);
    }

    public function successStory(){
        $master_sections_ids = [];

        $page = $this->getSeoPage('success-stories');
        $content = $this->getContentPage('success-stories');
        $main = Department::select('excerpt','title','logo_white','logo')->where('main',1)->first();
        $data = array(
            "page" => $page,
            "content" => $content,
            "main" => $main
        );
        return $this->sendResponse($data);
    }

    public function getPosts(Request $request){
        $search = $request->search;
        $select = 'posts.id as post_id, posts.title as title,
        categories.slug as category_slug,posts.excerpt,posts.slug,posts.published';
        $posts = Post::selectRaw($select)
        ->join('categories','categories.id','posts.category_id')
        ->where('posts.title','like','%'.$search.'%')
        ->where('posts.published', 1)
        ->orderBy('posts.created_at','desc')
        ->paginate(4);

        return $this->sendResponse($posts->items());
    }

    public function getCategories(){
        $categories = Category::select('id','name','slug')->has('post')->get();
        $count = 0;
        foreach ($categories as $key => $category) {
            $categories[$count++]["count"] = Post::where('category_id',$category->id)->count();
        }
        $data = array(
            "categories" => $categories,
        );
        return $this->sendResponse($data);
    }

    public function blog(){
        $page = $this->getSeoPage('blog');
        $posts = Post::select('id','title','slug','thumbnail','image','excerpt','published','category_id','author','created_at')->where('published',1)->with('category:id,name,slug')->with('tags:id,name,post_id')->orderBy('created_at','desc')->paginate(6);
        $categories = Category::select('id','name','slug')->has('post')->get();
        $content = $this->getContentPage( "blog");
        $count = 0;
        foreach ($categories as $key => $category) {
            $categories[$count++]["count"] = Post::where('category_id',$category->id)->count();
        }
        $data = array(
            "page" => $page,
            "posts" => $posts,
            "categories" => $categories,
            "content" => $content
        );
        return $this->sendResponse($data);
    }

    public function blogCategory(Request $request){
        $category = Category::select('id','name','slug')->where('slug',$request->category)->first();
        if(!$category){
            return $this->sendError("Not found");
        }
        $page = $this->getSeoPage('blog');
        $posts = Post::select('id','title','slug','thumbnail','image','excerpt','published','category_id','author','created_at')->where('published',1)->where('category_id',$category->id)->with('category:id,name,slug')->with('tags:id,name,post_id')->orderBy('created_at','desc')->paginate(6);
        $categories = Category::select('id','name','slug')->has('post')->get();
        $count = 0;
        $content = $this->getContentPage( "blog");
        foreach ($categories as $key => $item) {
            $categories[$count++]["count"] = Post::where('category_id',$item->id)->count();
        }
        $data = array(
            "page" => $page,
            "category" => $category,
            "posts" => $posts,
            "categories" => $categories,
            "content" => $content
        );
        return $this->sendResponse($data);
    }

    public function blogCategoryPost(Request $request){
        $category = Category::select('id','name','slug')->where('slug',$request->category)->first();
        if(!$category){
            return $this->sendError("Not found");
        }
        $post = Post::where('slug',$request->post)->where('category_id',$category->id)->where('published',1)->first();
        $post = Post::select('id','title','slug','image','excerpt','category_id','author', 'content','created_at')
                ->where('published',1)
                ->where('category_id',$category->id)
                ->where('slug', $request->post)
                ->with('category:id,name,slug')
                ->with('tags:id,name,post_id')
                ->first();

        if(!$post){
            return $this->sendError("Not found");
        }
        $page = $this->getSeoPage('blog');
        $categories = Category::select('id','name','slug')->has('post')->get();
        $count = 0;
        foreach ($categories as $key => $item) {
            $categories[$count++]["count"] = Post::where('category_id',$item->id)->count();
        }
        $content = $this->getContentPage( "blog");
        //$posts =
        $posts = Post::where('published',1)->where('id','!=',$post->id)->with('category:id,name,slug')->inRandomOrder()->take(4)->get();
        $data = array(
            "page" => $page,
            "category" => $category,
            "posts" => $posts,
            'post' => $post,
            "categories" => $categories,
            "content" => $content
        );
        return $this->sendResponse($data);
    }

    public function getBlogComments(Request $request){
        try{
            $comments = Comment::where('post_id',$request->post_id)->get();
            $data = array(
                "comments" => $comments
            );
            return $this->sendResponse($data);
        }
        catch(\Exception $e){
            Log::error("Error:", ["err"=>$e]);
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.create.error', ['name' => trans('custom.attribute.customer')]) ],500);
        }
    }

    public function blogCommentPost(Request $request){

        $comment = $request->all();
        Log::info("R:", ["comment"=>$comment]);

        try{
            Comment::Create($comment);
            return response()->json(['message'=> "created"],200);
        }
        catch(\Exception $e){
            Log::error("EEG:", ["err"=>$e]);
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.create.error', ['name' => trans('custom.attribute.customer')]) ],500);

        }
        /* $category = Category::select('id','name','slug')->where('slug',$request->category)->first();
        if(!$category){
            return $this->sendError("Not found");
        }
        $post = Post::where('slug',$request->post)->where('category_id',$category->id)->where('published',1)->first();
        $post = Post::select('id','title','slug','image','excerpt','category_id','author', 'content','created_at')
                ->where('published',1)
                ->where('category_id',$category->id)
                ->with('category:id,name,slug')
                ->with('tags:id,name,post_id')
                ->first();

        if(!$post){
            return $this->sendError("Not found");
        }
        $page = $this->getSeoPage('blog');
        $categories = Category::select('id','name','slug')->has('post')->get();
        $count = 0;
        foreach ($categories as $key => $item) {
            $categories[$count++]["count"] = Post::where('category_id',$item->id)->count();
        }
        $content = $this->getContentPage( "blog");
        //$posts =
        $posts = Post::where('published',1)->where('id','!=',$post->id)->with('category:id,name,slug')->inRandomOrder()->take(4)->get();
        $data = array(
            "page" => $page,
            "category" => $category,
            "posts" => $posts,
            'post' => $post,
            "categories" => $categories,
            "content" => $content
        );
        return $this->sendResponse($data);*/
    }
    public function privacityPolicy(){
        $page = $this->getSeoPage('politicas-privacidad');
        $content = $this->getContentPage('politicas-privacidad');
        $main = Department::select('excerpt','title','logo_white','logo')->where('main',1)->first();
        $data = array(
            "page" => $page,
            "content" => $content,
            "main" => $main
        );
        return $this->sendResponse($data);
    }

    public function contactUs(){
        $page = $this->getSeoPage('conversemos');
        $content = $this->getContentPage('conversemos');
        $main = Department::select('excerpt','title','logo_white','logo')->where('main',1)->first();
        $data = array(
            "page" => $page,
            "content" => $content,
            "main" => $main
        );
        return $this->sendResponse($data);
    }

    public function workWithUs(){
        $page = $this->getSeoPage('trabaja-con-nosotros');
        $content = $this->getContentPage('trabaja-con-nosotros');
        $main = Department::select('excerpt','title','logo_white','logo')->where('main',1)->first();
        $data = array(
            "page" => $page,
            "content" => $content,
            "main" => $main
        );
        return $this->sendResponse($data);
    }

    public function complaintsBook(){
        $page = $this->getSeoPage('libro-de-reclamaciones');
        $data = array(
            "page" => $page
        );
        return $this->sendResponse($data);
    }

    public function knowUs(){
        $page = $this->getSeoPage('conocenos');
        $content = $this->getContentPage('conocenos');
        $awards = Award::select('name','image','position','category')->orderBy('index')->get();
        $players = Player::with('relDepartment:id,title')->orderBy('index','asc')->get();
        $adn = CoolturaADN::orderBy('index','asc')->get();
        $cooltura = Cooltura::orderBy('index','asc')->get();
        $main = Department::select('title','logo_white')->where('main',1)->first();
        $data = array(
            "page" => $page,
            "content" => $content,
            "awards" => $awards,
            "players" => $players,
            "adn" => $adn,
            "cooltura" => $cooltura,
            "main" => $main
        );
        return $this->sendResponse($data);
    }
}
