<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MasterSectionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('master_sections')->insert([
            #Home
            [
                'id' => 1,
                'name' => 'Banner',
                'master_page_id' => 1,
            ],
            [
                'id' => 2,
                'name' => 'Lineas de Negocio',
                'master_page_id' => 1,
            ],
            [
                'id' => 3,
                'name' => 'Por qué Nosotros',
                'master_page_id' => 1,
            ],
            [
                'id' => 4,
                'name' => 'Nuestros Clientes',
                'master_page_id' => 1,
            ],
            [
                'id' => 5,
                'name' => 'Rompemos Fronteras',
                'master_page_id' => 1,
            ],
            [
                'id' => 6,
                'name' => 'Notas de Prensa',
                'master_page_id' => 1,
            ],
            #Blog
            [
                'id' => 7,
                'name' => 'Banner',
                'master_page_id' => 5,
            ],
            #Nuestra Historia
            [
                'id' => 8,
                'name' => 'Banner',
                'master_page_id' => 8,
            ],
            #Conocenos
            [
                'id' => 9,
                'name' => 'Banner',
                'master_page_id' => 6,
            ],
            [
                'id' => 10,
                'name' => 'Nuestra Historia',
                'master_page_id' => 6,
            ],
            [
                'id' => 11,
                'name' => 'Nuestros Trofeos',
                'master_page_id' => 6,
            ],
            [
                'id' => 12,
                'name' => 'Nuestros Players',
                'master_page_id' => 6,
            ],
            [
                'id' => 13,
                'name' => 'Hi,PLAY (Presentación)',
                'master_page_id' => 6,
            ],
            [
                'id' => 14,
                'name' => 'Proceso de Calidad (Headers)',
                'master_page_id' => 6,
            ],
            #DP
            [
                'id' => 18,
                'name' => 'Banner',
                'master_page_id' => 2,
            ],
            [
                'id' => 19,
                'name' => 'Metodología',
                'master_page_id' => 2,
            ],
            [
                'id' => 20,
                'name' => 'Casos de Éxito',
                'master_page_id' => 2,
            ],
            [
                'id' => 21,
                'name' => 'Solución de Problemas',
                'master_page_id' => 2,
            ],
            #CH
            [
                'id' => 23,
                'name' => 'Banner',
                'master_page_id' => 3,
            ],
            [
                'id' => 24,
                'name' => 'Metodología',
                'master_page_id' => 3,
            ],
            [
                'id' => 25,
                'name' => 'Casos de Éxito',
                'master_page_id' => 3,
            ],
            [
                'id' => 26,
                'name' => 'Solución de Problemas',
                'master_page_id' => 3,
            ],
            #SF
            [
                'id' => 28,
                'name' => 'Banner',
                'master_page_id' => 4,
            ],
            [
                'id' => 29,
                'name' => 'Metodología',
                'master_page_id' => 4,
            ],
            [
                'id' => 30,
                'name' => 'Casos de Éxito',
                'master_page_id' => 4,
            ],
            [
                'id' => 31,
                'name' => 'Solución de Problemas',
                'master_page_id' => 4,
            ],
            #Politicas
            [
                'id' => 33,
                'name' => 'Banner',
                'master_page_id' => 7,
            ],
            [
                'id' => 34,
                'name' => 'Información',
                'master_page_id' => 7,
            ],
        ]);
    }
}
