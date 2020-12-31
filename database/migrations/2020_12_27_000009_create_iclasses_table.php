<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIclassesTable extends Migration
{
    public function up()
    {
        Schema::create('iclasses', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('iclass')->unique();
            $table->timestamps();
            $table->softDeletes();
        });
    }
}
