<?php

namespace App\Http\Controllers\Admin\WorkWithUs;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Str;


use App\Http\Traits\AdminTrait;


class JobController extends Controller
{
    use AdminTrait;

    public function index(){
        return view ("pages.work_with_us.job");
    }

}
