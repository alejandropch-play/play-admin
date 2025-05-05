<?php

namespace App\Http\Controllers\Admin\PressReleases;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Str;


use App\Post;
use App\Repositories\PostRepository;
use Auth;
use App\Tag;


use App\Http\Traits\AdminTrait;


class PostController extends Controller
{
    use AdminTrait;

    public function index(){
        return view ("pages.press_releases.post");
    }

}