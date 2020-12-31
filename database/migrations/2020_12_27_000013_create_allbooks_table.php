<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAllbooksTable extends Migration
{
    public function up()
    {
        Schema::create('allbooks', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('category')->unique();
            $table->string('publisher')->nullable();
            $table->integer('page')->nullable();
            $table->integer('isbn')->nullable();
            $table->decimal('price', 15, 2)->nullable();
            $table->longText('description')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }
}
