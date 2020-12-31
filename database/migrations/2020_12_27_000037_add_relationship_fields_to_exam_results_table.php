<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRelationshipFieldsToExamResultsTable extends Migration
{
    public function up()
    {
        Schema::table('exam_results', function (Blueprint $table) {
            $table->unsignedBigInteger('last_name_id');
            $table->foreign('last_name_id', 'last_name_fk_2865426')->references('id')->on('students');
            $table->unsignedBigInteger('gender_id');
            $table->foreign('gender_id', 'gender_fk_2865427')->references('id')->on('students');
            $table->unsignedBigInteger('iclass_id');
            $table->foreign('iclass_id', 'iclass_fk_2865430')->references('id')->on('iclasses');
            $table->unsignedBigInteger('school_id');
            $table->foreign('school_id', 'school_fk_2865431')->references('id')->on('schools');
        });
    }
}
