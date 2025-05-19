<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class QualityProcessSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('master_sections')->insert([
                'id' => 42,
                'name'=> 'Proceso de Calidad (Images)',
                'master_page_id' => 6,
        ]);
        DB::table('master_fields')->insert([
            [
                'name' => "Imagen del Certificado",
                'variable' => "image",
                'type' => "image",
                'master_section_id' => 42,
            ],
            [
                'name' => "Imagen de Slide 1",
                'variable' => "image_1",
                'type' => "image",
                'master_section_id' => 42,
            ],

        ]);
    }
}
