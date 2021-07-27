<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Server extends Model
{
    public $timestamps = false;
    protected $fillable = ['name'];

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
}
