<?php
namespace App\Repositories;

use App\Podcast;
use Carbon\Carbon;

class PodcastsRepository
{
    public function datatable($items_per_page,$q = false){
        $select = 'podcasts.id as podcast_id,CASE WHEN LENGTH(podcasts.url)>=30 THEN CONCAT(RTRIM(LEFT(podcasts.url,30)),"...") ELSE podcasts.url END as youtube_url,
        podcasts.url,podcasts.published';
        if($q){
            $podcasts = Podcast::selectRaw($select)
            ->where('url','like',$q.'%')
            ->orderBy('podcasts.created_at','desc')
            ->paginate($items_per_page);
        }
        else{
            $podcasts = Podcast::selectRaw($select)
            ->orderBy('podcasts.created_at','desc')
            ->paginate($items_per_page);
        }
        foreach($podcasts as $podcast){
            $data[] = array(
                "id" => $podcast["podcast_id"],
                "url" => $podcast["url"],
                "status" => $podcast["published_format"],
                "created_at" => $podcast["created_at"]
            );
        }
        $podcasts = $podcasts->toArray();
        if(isset($data)){
            $podcasts["data"] = '';
            $podcasts["data"] = $data;
        }
        return $podcasts;
    }
}
