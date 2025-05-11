<?php

use Illuminate\Database\Seeder;

class MasterFieldsTableSeeder4 extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('master_fields')->insert([
            #Notas de Prensa
            // [
            //     'name' 		=> 'Titulo',
            //     'variable' 		=> 'title',
            //     'type'     => 'input',
            //     'master_section_id' => 35
            // ],
            // [
            //     'name' 		=> 'Descripción',
            //     'variable' 		=> 'description',
            //     'type'     => 'editor_small',
            //     'master_section_id' => 35
            // ],
            #Libro de Reclamaciones
            // [
            //     'name' => 'Banner',
            //     'variable' => 'background',
            //     'type' => 'image',
            //     'master_section_id' => 36
            // ],
            // [
            //     'name' => 'Titulo',
            //     'variable' => 'title',
            //     'type' => 'input',
            //     'master_section_id' => 36
            // ],
            // [
            //     'name' => 'Información para Reclamo / Queja',
            //     'variable' => 'text1',
            //     'type' => 'editor_small',
            //     'master_section_id' => 36
            // ],
            // [
            //     'name' => 'Observaciones y acciones adoptadas por el proveedor',
            //     'variable' => 'text2',
            //     'type' => 'editor_large',
            //     'master_section_id' => 36
            // ],
            // [
            //     'name' => 'Adjuntos',
            //     'variable' => 'text3',
            //     'type' => 'editor_small',
            //     'master_section_id' => 36
            // ],
            #Trabaja con Nosotros
            [
                'name' => 'Titulo si hay Ofertas',
                'variable' => 'title_offers',
                'type' => 'input',
                'master_section_id' => 6
            ],
            [
                'name' => 'Titulo si no hay Ofertas',
                'variable' => 'title_no_offers',
                'type' => 'input',
                'master_section_id' => 6
            ],

            ###
            [
                'name' => 'Titulo Objetivo 1',
                'variable' => 'title',
                'type' => 'input',
                'master_section_id' => 37
            ],
            [
                'name' => 'Descripción del objetivo 1',
                'variable' => 'description',
                'type' => 'input',
                'master_section_id' => 37
            ],
            [
                'name' => 'Titulo Objetivo 2',
                'variable' => 'title_2',
                'type' => 'input',
                'master_section_id' => 37
            ],
            [
                'name' => 'Descripción del objetivo 2',
                'variable' => 'description_2',
                'type' => 'input',
                'master_section_id' => 37
            ],
            [
                'name' => 'Titulo Objetivo 3',
                'variable' => 'title_3',
                'type' => 'input',
                'master_section_id' => 37
            ],
            [
                'name' => 'Descripción del objetivo 3',
                'variable' => 'description_3',
                'type' => 'input',
                'master_section_id' => 37
            ],
            [
                'name' => 'Titulo Objetivo 4',
                'variable' => 'title_4',
                'type' => 'input',
                'master_section_id' => 37
            ],
            [
                'name' => 'Descripción del objetivo 4',
                'variable' => 'description_4',
                'type' => 'input',
                'master_section_id' => 37
            ],
           
            ###
            [
                'name' => 'Titulo Objetivo 1',
                'variable' => 'title',
                'type' => 'input',
                'master_section_id' => 38
            ],
            [
                'name' => 'Descripción del objetivo 1',
                'variable' => 'description',
                'type' => 'input',
                'master_section_id' => 38
            ],
            [
                'name' => 'Titulo Objetivo 2',
                'variable' => 'title_2',
                'type' => 'input',
                'master_section_id' => 38
            ],
            [
                'name' => 'Descripción del objetivo 2',
                'variable' => 'description_2',
                'type' => 'input',
                'master_section_id' => 38
            ],
            [
                'name' => 'Titulo Objetivo 3',
                'variable' => 'title_3',
                'type' => 'input',
                'master_section_id' => 38
            ],
            [
                'name' => 'Descripción del objetivo 3',
                'variable' => 'description_3',
                'type' => 'input',
                'master_section_id' => 38
            ],
            [
                'name' => 'Titulo Objetivo 4',
                'variable' => 'title_4',
                'type' => 'input',
                'master_section_id' => 38
            ],
            [
                'name' => 'Descripción del objetivo 4',
                'variable' => 'description_4',
                'type' => 'input',
                'master_section_id' => 38
            ],
            ###
            [
                'name' => 'Titulo Objetivo 1',
                'variable' => 'title',
                'type' => 'input',
                'master_section_id' => 39
            ],
            [
                'name' => 'Descripción del objetivo 1',
                'variable' => 'description',
                'type' => 'input',
                'master_section_id' => 39
            ],
            [
                'name' => 'Titulo Objetivo 2',
                'variable' => 'title_2',
                'type' => 'input',
                'master_section_id' => 39
            ],
            [
                'name' => 'Descripción del objetivo 2',
                'variable' => 'description_2',
                'type' => 'input',
                'master_section_id' => 39
            ],
            [
                'name' => 'Titulo Objetivo 3',
                'variable' => 'title_3',
                'type' => 'input',
                'master_section_id' => 39
            ],
            [
                'name' => 'Descripción del objetivo 3',
                'variable' => 'description_3',
                'type' => 'input',
                'master_section_id' => 39
            ],
            [
                'name' => 'Titulo Objetivo 4',
                'variable' => 'title_4',
                'type' => 'input',
                'master_section_id' => 39
            ],
            [
                'name' => 'Descripción del objetivo 4',
                'variable' => 'description_4',
                'type' => 'input',
                'master_section_id' => 39
            ],
        ]);
    }
}
