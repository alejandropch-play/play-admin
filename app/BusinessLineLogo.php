<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BusinessLineLogo extends Model
{
    protected $table = 'business_line_logos';
    protected $guarded = [];

    public function relDepartment()
    {
        return $this->hasOne('App\Department','id','department_id');
    }
}
