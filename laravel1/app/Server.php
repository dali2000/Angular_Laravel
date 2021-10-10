<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Server extends Model
{
    
    protected $fillable = ['idUser','name'];

    public function ec2()
    {
        return $this->hasOne(Ec3::class);
    }

    public function sqs()
    {
        return $this->hasOne(sqs::class);
    }

    public function cdn()
    {
        return $this->hasOne(cdn::class);
    }
    public function user()
    {
        return $this->hasOne(user::class);
    }
}
