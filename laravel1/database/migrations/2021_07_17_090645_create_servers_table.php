<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('servers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('idEc2');
            $table->integer('idS3');
            $table->integer('idSqs');
            // $table->foreign('idEc2')->references('id')->on('ec3s');
            // $table->foreign('idS3')->references('id')->on('s3s');
            // $table->foreign('idSqs')->references('id')->on('sqs');
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
        Schema::dropIfExists('servers');
    }
}
