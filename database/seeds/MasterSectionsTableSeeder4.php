<?php

use Illuminate\Database\Seeder;

class MasterSectionsTableSeeder4 extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('master_sections')->insert([
            #Notas de Prensa
            [
                'name' 		=> 'Notas de Prensa',
                'master_page_id'     => 1,
            ],
            #Libro de Reclamaciones
            [
                'name' 		=> 'Libro de Reclamaciones',
                'master_page_id'     => 10,
            ],
            #DI, CH, SW
            [
                'name' 		=> 'Objetivos Empresariales',
                'master_page_id'     => 2,
            ],
            [
                'name' 		=> 'Objetivos Empresariales',
                'master_page_id'     => 3,
            ],
            [
                'name' 		=> 'Objetivos Empresariales',
                'master_page_id'     => 4,
            ],
        ]);
    }
}
