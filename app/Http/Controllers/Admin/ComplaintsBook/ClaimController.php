<?php

namespace App\Http\Controllers\Admin\ComplaintsBook;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Str;


use App\Http\Traits\AdminTrait;


class ClaimController extends Controller
{
    use AdminTrait;

    public function index(){
        return view ("pages.complaints_book.claim");
    }

}