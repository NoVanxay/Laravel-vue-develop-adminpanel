<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIclassSubjectPivotTable extends Migration
{
    public function up()
    {
        Schema::create('iclass_subject', function (Blueprint $table) {
            $table->unsignedBigInteger('subject_id');
            $table->foreign('subject_id', 'subject_id_fk_2863810')->references('id')->on('subjects')->onDelete('cascade');
            $table->unsignedBigInteger('iclass_id');
            $table->foreign('iclass_id', 'iclass_id_fk_2863810')->references('id')->on('iclasses')->onDelete('cascade');
        });
    }
}
