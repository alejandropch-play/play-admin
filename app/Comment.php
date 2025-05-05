<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Comment extends Model
{
    protected $guarded = [];
    protected $appends = ['date_format'];

    public function post()
    {
        return $this->hasOne('App\Post','id','post_id');
    }

    public function getDateFormatAttribute(){
        $date = Carbon::parse($this->created_at);
        return $date->isoFormat('DD MMM YYYY');
    }

}
