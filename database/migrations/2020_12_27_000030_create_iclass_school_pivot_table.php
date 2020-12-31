<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIclassSchoolPivotTable extends Migration
{
    public function up()
    {
        Schema::create('iclass_school', function (Blueprint $table) {
            $table->unsignedBigInteger('iclass_id');
            $table->foreign('iclass_id', 'iclass_id_fk_2863803')->references('id')->on('iclasses')->onDelete('cascade');
            $table->unsignedBigInteger('school_id');
            $table->foreign('school_id', 'school_id_fk_2863803')->references('id')->on('schools')->onDelete('cascade');
        });
    }
}
