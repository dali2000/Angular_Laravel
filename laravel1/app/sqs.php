<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class sqs extends Model
{
    public $timestamps = false;
    protected $fillable = ['idServer','Quere_Name','Region'];
    
    
    public function Server()
    {
        return $this->hasOne(Server::class);
    }

}
