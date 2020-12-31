<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHistoryAdminTeachersTable extends Migration
{
    public function up()
    {
        Schema::create('history_admin_teachers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title');
            $table->string('fist_name');
            $table->string('last_name');
            $table->string('gender');
            $table->string('eng_name');
            $table->string('eng_last');
            $table->date('dob');
            $table->string('txt');
            $table->string('tribes');
            $table->string('religion');
            $table->datetime('pabbajja')->nullable();
            $table->string('identification_card');
            $table->string('province_birth');
            $table->string('district_birth');
            $table->string('village_birth');
            $table->string('current_pro');
            $table->string('current_dist');
            $table->string('current_vill');
            $table->string('temple');
            $table->integer('phone_no');
            $table->integer('phone_mobile')->nullable();
            $table->integer('office_no')->nullable();
            $table->integer('census');
            $table->date('allow_date')->nullable();
            $table->string('at');
            $table->timestamps();
            $table->softDeletes();
        });
    }
}
