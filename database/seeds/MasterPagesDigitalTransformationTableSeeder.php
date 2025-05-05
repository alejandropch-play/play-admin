<?php

use Illuminate\Database\Seeder;

class MasterPagesDigitalTransformationTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('master_pages')->insert([
            [
                'name' 		=> 'Digital Transformation',
                'slug'     => 'digital-transformation',
                'title'     => 'Digital Transformation - Technology Lab of Innovation',
                'department_id' => 5,
                'index' => 5
            ],
        ]);

        DB::table('master_sections')->insert([
            #DT
            [
                'name' 		=> 'Banner',
                'master_page_id'     => 10,
            ],
            [
                'name' 		=> 'Qué hacemos?',
                'master_page_id'     => 10,
            ],
            /*[
                'name' 		=> 'Casos de Éxito',
                'master_page_id'     => 10,
            ],
            [
                'name' 		=> 'Clientes',
                'master_page_id'     => 10,
            ],*/
            [
                'name' 		=> 'Contáctenos',
                'master_page_id'     => 10,
            ],
            [
                'name' 		=> 'Frase',
                'master_page_id'     => 10,
            ],
        ]);

        DB::table('master_fields')->insert([
            #DT
            //Banner
            [
                'name' 		=> 'Fondo',
                'variable'     => 'background',
                'type'     => 'image',
                'master_section_id'     => 40
            ],
            [
                'name' 		=> 'Gráfica',
                'variable'     => 'image',
                'type'     => 'image',
                'master_section_id'     => 40
            ],
            //Qué hacemos?
            [
                'name' 		=> 'Título',
                'variable' 		=> 'title',
                'type'     => 'input',
                'master_section_id' => 41
            ],
            [
                'name' 		=> 'Descripción',
                'variable' 		=> 'description',
                'type'     => 'editor_small',
                'master_section_id' => 41
            ],
            [
                'name' 		=> 'Gráfica',
                'variable'     => 'image',
                'type'     => 'image',
                'master_section_id'     => 41
            ],
            //Casos de Éxito
            /*[
                'name' 		=> 'Título',
                'variable' 		=> 'title',
                'type'     => 'input',
                'master_section_id' => 20
            ],*/
            //Clientes
            /*[
                'name' 		=> 'Título',
                'variable' 		=> 'title',
                'type'     => 'input',
                'master_section_id' => 42
            ],
            [
                'name' 		=> 'Imagen',
                'variable'     => 'image',
                'type'     => 'image',
                'master_section_id'     => 42
            ],
            [
                'name' 		=> 'Imagen Responsive',
                'variable'     => 'image_responsive',
                'type'     => 'image',
                'master_section_id'     => 42
            ],*/
            //Contáctenos
            [
                'name' 		=> 'Título',
                'variable' 		=> 'title',
                'type'     => 'input',
                'master_section_id' => 42
            ],
            [
                'name' 		=> 'Descripción',
                'variable' 		=> 'description',
                'type'     => 'editor_small',
                'master_section_id' => 42
            ],
            [
                'name' 		=> 'Fondo',
                'variable'     => 'background',
                'type'     => 'image',
                'master_section_id'     => 42
            ],
            [
                'name' 		=> 'Bot',
                'variable'     => 'image',
                'type'     => 'image',
                'master_section_id'     => 42
            ],
            [
                'name' 		=> 'Speech',
                'variable' 		=> 'speech',
                'type'     => 'input',
                'master_section_id' => 42
            ],

            [
                'name' 		=> 'Título',
                'variable' 		=> 'title',
                'type'     => 'input',
                'master_section_id' => 43
            ],
        ]);
    }
}
