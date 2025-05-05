<?php

use Illuminate\Database\Seeder;

class MasterModulesTableSeeder2 extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('master_modules')->insert([
            #Notas de Prensa
            [
                 'name' => 'Notas de Prensa',
                 'slug' => NULL,
                 'parent' => 0,
                 'icon' => 'fas fa-newspaper',
                 'index' => 11
            ],
            [
                  'name' => 'Posts',
                  'slug' => 'notas-de-prensa/posts',
                  'parent' => 24,
                  'icon' => NULL,
                  'index' => 1
            ],
            #Libro de Reclamaciones
             [
                 'name' => 'Libro de Reclamaciones',
                 'slug' => NULL,
                 'parent' => 0,
                 'icon' => 'fas fa-newspaper',
                 'index' => 14
             ],
             [
                  'name' => 'Reclamos',
                  'slug' => 'libro-de-reclamaciones/reclamos',
                   'parent' => 26,
                   'icon' => NULL,
                   'index' => 1
            ],
            #Trabaja con Nosotros
            [
                'name' => 'Trabaja con Nosotros',
                'slug' => NULL,
                'parent' => 0,
                'icon' => 'fas fa-newspaper',
                'index' => 15
            ],
                [
                    'name' => 'Puestos',
                    'slug' => 'trabaja-con-nosotros/puestos',
                    'parent' => 28,
                    'icon' => NULL,
                    'index' => 1
                ],

        ]);
    }
}
