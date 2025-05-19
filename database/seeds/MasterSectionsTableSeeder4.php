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
            #Libro de Reclamaciones
            [
                'id'=>35,
                'name' 		=> 'Libro de Reclamaciones',
                'master_page_id'     => 10,
            ],
            #DI, CH, SW
            [
                'id' => 36,
                'name' 		=> 'Objetivos Empresariales',
                'master_page_id'     => 2,
            ],
            [
                'id' => 37,
                'name' 		=> 'Objetivos Empresariales',
                'master_page_id'     => 3,
            ],
            [
                'id' => 38,
                'name' 		=> 'Objetivos Empresariales',
                'master_page_id'     => 4,
            ],
        ]);
    }
}
