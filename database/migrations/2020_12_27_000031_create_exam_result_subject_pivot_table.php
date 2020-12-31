<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExamResultSubjectPivotTable extends Migration
{
    public function up()
    {
        Schema::create('exam_result_subject', function (Blueprint $table) {
            $table->unsignedBigInteger('exam_result_id');
            $table->foreign('exam_result_id', 'exam_result_id_fk_2865428')->references('id')->on('exam_results')->onDelete('cascade');
            $table->unsignedBigInteger('subject_id');
            $table->foreign('subject_id', 'subject_id_fk_2865428')->references('id')->on('subjects')->onDelete('cascade');
        });
    }
}
