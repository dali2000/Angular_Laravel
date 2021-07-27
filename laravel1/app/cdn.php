<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class cdn extends Model
{
    public $timestamps = false;
    protected $fillable = ['idServer','PrivateBucket','PublicBucket','Region'];
    
    public function Server()
    {
        return $this->hasOne(Server::class);
    }
}
