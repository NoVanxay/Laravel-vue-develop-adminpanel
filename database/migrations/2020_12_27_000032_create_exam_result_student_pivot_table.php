<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExamResultStudentPivotTable extends Migration
{
    public function up()
    {
        Schema::create('exam_result_student', function (Blueprint $table) {
            $table->unsignedBigInteger('exam_result_id');
            $table->foreign('exam_result_id', 'exam_result_id_fk_2865425')->references('id')->on('exam_results')->onDelete('cascade');
            $table->unsignedBigInteger('student_id');
            $table->foreign('student_id', 'student_id_fk_2865425')->references('id')->on('students')->onDelete('cascade');
        });
    }
}
