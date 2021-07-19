<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateS3STable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('s3s', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('PrivateBucket');
            $table->string('PublicBucket');
            $table->enum('Region',['r1','r2','r3']);
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
        Schema::dropIfExists('s3_s');
    }
}
