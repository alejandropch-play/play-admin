<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePressReleasePosts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('press_release_posts', function (Blueprint $table) {
            $table->bigIncrements('id');
            
            $table->string('title');
            $table->string('url');

            $table->string('image');
            $table->string('thumbnail');
            
            $table->boolean('published');
            
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
        Schema::dropIfExists('press_release_posts');
    }
}
