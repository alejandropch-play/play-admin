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
                'id' => 40,
                'name'=> 'Proceso de Calidad',
                'master_page_id' => 6,
        ]);
        DB::table('master_fields')->insert([
            [
                'name' => "Imagen del Certificado",
                'variable' => "image",
                'type' => "image",
                'master_section_id' => 40,
            ],
            [
                'name' => "Imagen de Slide 1",
                'variable' => "image",
                'type' => "image",
                'master_section_id' => 40,
            ],

        ]);
    }
}
