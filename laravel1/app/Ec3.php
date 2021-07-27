<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ec3 extends Model
{
    public $timestamps = false;
    protected $fillable = ['idServer','ServerName','Type','Storage','Firwall','Machine'];

    public function Server()
    {
        return $this->hasOne(Server::class);
    }
}
