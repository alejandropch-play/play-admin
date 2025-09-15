<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tooling extends Model
{
    protected $table = 'tooling';
    protected $guarded = [];

    public function relDepartment()
    {
        return $this->hasOne('App\Department','id','department_id');
    }
}
