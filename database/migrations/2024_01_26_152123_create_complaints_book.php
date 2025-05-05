<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateComplaintsBook extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('complaints_book', function (Blueprint $table) {
            $table->bigIncrements('id');
            
            $table->string('name');
            $table->string('email');

            $table->bigInteger('document_type_id')->unsigned();

            $table->string('document_number');
            $table->string('address');
            $table->string('district');
            $table->string('phone_number');

            $table->bigInteger('well_hired_id')->unsigned();
            $table->bigInteger('type_of_service_id')->unsigned();
            $table->bigInteger('type_of_claim_id')->unsigned();

            $table->longText('description');

            $table->foreign('document_type_id')->references('id')->on('document_type');
            $table->foreign('well_hired_id')->references('id')->on('well_hired');
            $table->foreign('type_of_service_id')->references('id')->on('type_of_service');
            $table->foreign('type_of_claim_id')->references('id')->on('type_of_claim');
            
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
        Schema::dropIfExists('complaints_book');
    }
}
