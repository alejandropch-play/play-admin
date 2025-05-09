<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Troubleshooting extends Model
{
    protected $table = 'troubleshooting';
    protected $guarded = [];

    public function relDepartment()
    {
        return $this->hasOne('App\Department','id','department_id');
    }
}
