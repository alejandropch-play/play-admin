<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\PodcastRequest;
use App\Podcast;
use App\PodcastTag;
use App\Repositories\PodcastsRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class HiPlayController extends Controller
{
    //
    public function index(){
        return view ("pages.hiplay");
    }
    public function createPodcast(PodcastRequest $request){
        $podcast = request(["published", "url"]);
        $podcast["main"]= false;
        try {
            $podcast = Podcast::UpdateOrCreate($podcast);
        } catch(\Exception $e) {
            Log::error('Create Podcast Error:', ["error"=> $e]);
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.create.error', ['name' => trans('custom.attribute.podcast')]) ],500);
        }

        $tags = json_decode($request->tags);
        try{
            foreach ($tags as $key => $value) {
                $exist = $tag = NULL;
                $exist = PodcastTag::where('podcast_id',$podcast->id)->where('name',$value->text)->get();
                if(count($exist) < 1){
                    $tag = PodcastTag::UpdateOrCreate(["podcast_id" => $podcast->id, "name" => $value->text]);
                }
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.create.success', ['name' => trans('custom.attribute.podcast')])],200);
        }
        catch(\Exception $e){
            Log::error('Create Podcast Error:', ["error"=> $e]);
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.create.error', ['name' => trans('custom.attribute.podcast')]) ],500);
        }
    }
    public function update(PodcastRequest $request, Podcast $podcast){
        $request_podcast= request(["url","published"]);

        try{
            $podcast->update($request_podcast);
        }
        catch(\Exception $e){
            Log::error('Update Podcast Error:', ["error"=> $e]);
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.post')]) ],500);
        }
        $tags = json_decode($request->tags);
        try{
            PodcastTag::where('podcast_id',$request->id)->delete();
            foreach ($tags as $key => $value) {
                $exist = NULL;
                $exist = PodcastTag::where('podcast_id',$request->id)->where('name',$value->text)->get();
                if(count($exist) < 1){
                    $tag = PodcastTag::UpdateOrCreate(["podcast_id" => $request->id, "name" => $value->text]);
                }
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.create.success', ['name' => trans('custom.attribute.podcast')])],200);
        }
        catch(\Exception $e){
            Log::error('Podcast Tag Error:', ["error"=> $e]);
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.create.error', ['name' => trans('custom.attribute.podcast')]) ],500);
        }
    }
    public function getPodcasts(Request $request, PodcastsRepository $podcasts_repository){
        try{
        $search = $request->search;
        if($search){
            $posts = $podcasts_repository->datatable($request->desde,$search);
        }
        else{
            $posts = $podcasts_repository->datatable($request->desde);
        }

        $posts["headers"] = ["Id","Youtube URL","Activo?","Registrado el"];
        return response()->json($posts);
        }catch(\Exception $e){
            Log::error('Error al traer los Podcasts:', ["error"=> $e]);
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.create.error', ['name' => trans('custom.attribute.podcast')]) ],500);
        }
    }
    public function getPodcast(Podcast $podcast){
        $podcast= $podcast->load('tags:podcast_id,name as text');
        $tags = $podcast->tags;
        $podcast = $podcast->unsetRelation('tags');
        return response()->json(["podcast" => $podcast, "tags" => $tags]);
    }
    public function delete(Podcast $podcast){
        try {
            $podcast->delete();
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.podcast')])],200);
        }
        catch (\Exception $e){

        Log::error("Error", ["error"=>$e]);
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.podcast')])],500);
        }
    }
}
