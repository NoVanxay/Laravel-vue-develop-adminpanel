<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRelationshipFieldsToCommentsTable extends Migration
{
    public function up()
    {
        Schema::table('comments', function (Blueprint $table) {
            $table->unsignedBigInteger('users_id')->nullable();
            $table->foreign('users_id', 'users_fk_2871943')->references('id')->on('users');
            $table->unsignedBigInteger('title_id')->nullable();
            $table->foreign('title_id', 'title_fk_2871944')->references('id')->on('content_pages');
        });
    }
}
