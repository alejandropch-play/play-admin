<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'categories';
    protected $guarded = [];

    public function post()
    {
        //return $this->belongsTo('App\Post');
        return $this->hasMany('App\Post', 'category_id', 'id');
    }
}
