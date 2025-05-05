<?php

use Illuminate\Database\Seeder;

class MasterPermissionsTableSeeder2 extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('master_permissions')->insert([
            #Notas de Prensa
            [
              'role_id' 	=> 1,
               'module_id' 		=> 24
            ],
            [
               'role_id' 	=> 1,
            	'module_id' 		=> 25
           ],
            #Libro de Reclamaciones
              [
                  'role_id' => 1,
                  'module_id' => 26
              ],
              [
                  'role_id' => 1,
                  'module_id' => 27
              ],
            #Trabaja con Nosotros
            [
                'role_id' 	=> 1,
            	'module_id' 		=> 28
            ],
            [
                'role_id' 	=> 1,
            	'module_id' 		=> 29
            ],
            [
                'role_id' 	=> 2,
            	'module_id' 		=> 28
            ],
            [
                'role_id' 	=> 2,
            	'module_id' 		=> 29
            ],
        ]);
    }
}
