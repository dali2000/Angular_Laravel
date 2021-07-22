<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ec3 extends Model
{
    public $timestamps = false;
    protected $fillable = ['ServerName','Type','Storage','Firwall','Machine'];
}
