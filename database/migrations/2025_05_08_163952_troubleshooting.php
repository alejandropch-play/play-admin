<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Troubleshooting extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('troubleshooting', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title');
            $table->string('description');
            $table->string('image');
            $table->bigInteger('department_id')->unsigned()->nullable();
            $table->foreign('department_id')->references('id')->on('departments');
            
            $table->integer('index');    
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('troubleshooting', function (Blueprint $table) {
            $table->dropForeign(['department_id']);
        });
        Schema::dropIfExists('troubleshooting');
    }
}
