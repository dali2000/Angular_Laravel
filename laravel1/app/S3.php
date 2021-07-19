<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class S3 extends Model
{
    public $timestamps = false;
    protected $fillable = ['PrivateBucket','PublicBucket','Region',];
}
