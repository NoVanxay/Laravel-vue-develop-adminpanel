<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRelationshipFieldsToStudentsTable extends Migration
{
    public function up()
    {
        Schema::table('students', function (Blueprint $table) {
            $table->unsignedBigInteger('iclass_id');
            $table->foreign('iclass_id', 'iclass_fk_2865321')->references('id')->on('iclasses');
            $table->unsignedBigInteger('school_id');
            $table->foreign('school_id', 'school_fk_2865322')->references('id')->on('schools');
        });
    }
}
