<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEc3sTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ec3s', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('ServerName');
            $table->enum('Type',['type1','type2','type3']);
            $table->Integer('Storage');
            $table->enum('Firwall',['f1','f2','f3']);
            $table->enum('Machine',['m1','m2','m3']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ec3s');
    }
}
