<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCdnsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cdns', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('idServer');
            $table->string('PrivateBucket');
            $table->string('PublicBucket');
            $table->enum('Region',['r1','r2','r3']);
            $table->foreign('idServer')->references('id')->on('servers')->onDelete("cascade");;
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
        Schema::dropIfExists('cdns');
    }
}
