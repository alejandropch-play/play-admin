<?php

use Illuminate\Database\Seeder;

class MasterPagesTableSeeder2 extends Seeder
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
                'id' => 10,
                'name' 		=> 'Libro de Reclamaciones',
                'slug'     => 'libro-de-reclamaciones',
                'title'     => 'Libro de Reclamaciones',
                'department_id' => NULL,
                'index' => 9
            ],
        ]);
    }
}
