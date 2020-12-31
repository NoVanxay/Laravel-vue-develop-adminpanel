<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentsTable extends Migration
{
    public function up()
    {
        Schema::create('students', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('st_code')->unique();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('gender');
            $table->date('dob');
            $table->string('village_birth');
            $table->string('district');
            $table->string('province');
            $table->string('father_name');
            $table->integer('father_no')->nullable();
            $table->string('mother_name')->nullable();
            $table->integer('mother_no')->nullable();
            $table->string('current_vill');
            $table->string('current_dis');
            $table->string('current_pro');
            $table->string('end_from')->nullable();
            $table->date('end_date')->nullable();
            $table->integer('phone')->nullable();
            $table->string('email')->nullable();
            $table->string('password')->nullable();
            $table->string('remember_token')->nullable();
            $table->string('note')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }
}
