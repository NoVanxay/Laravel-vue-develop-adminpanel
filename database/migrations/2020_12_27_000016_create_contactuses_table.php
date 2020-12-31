<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContactusesTable extends Migration
{
    public function up()
    {
        Schema::create('contactuses', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->longText('address');
            $table->integer('phone_number');
            $table->string('email');
            $table->string('location');
            $table->timestamps();
            $table->softDeletes();
        });
    }
}
