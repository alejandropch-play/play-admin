<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'full_name', 'email', 'password','username','role_id','status','avatar'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function relRole()
    {
        return $this->hasOne('App\Role','id','role_id');
    }

    protected $appends = ['status_format'];

    public function getStatusFormatAttribute(){
        if($this->status){
            return "<i class='fas fa-circle text-success'></i>";
        }
        else{
            return "<i class='fas fa-circle text-danger'></i>";
        }
    }
}
