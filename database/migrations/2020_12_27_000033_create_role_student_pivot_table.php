<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRoleStudentPivotTable extends Migration
{
    public function up()
    {
        Schema::create('role_student', function (Blueprint $table) {
            $table->unsignedBigInteger('student_id');
            $table->foreign('student_id', 'student_id_fk_2865329')->references('id')->on('students')->onDelete('cascade');
            $table->unsignedBigInteger('role_id');
            $table->foreign('role_id', 'role_id_fk_2865329')->references('id')->on('roles')->onDelete('cascade');
        });
    }
}
