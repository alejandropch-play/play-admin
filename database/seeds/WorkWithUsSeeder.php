<?php

use Illuminate\Database\Seeder;

class WorkWithUsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('content')->insert([
            [
                'field' => 'banner_image',
                'value' => 'p-170753932965c6fb810b05b.jpg',
                'master_section_id' => 6,
                'created_at' => now()
          ],
          [
            'field' => 'banner_title',
            'value' => 'Trabaja con Nosotros',
            'master_section_id' => 6,
            'created_at' => now()
      ],
      [
        'field' => 'title_offers',
        'value' => '¿Listo(a) para ser un gran PLAYER?',
        'master_section_id' => 6,
        'created_at' => now()
  ],
  [
    'field' => 'title_no_offers',
    'value' => '¡UPS! Nuestro equipo está completo. Pero queremos conocerte.',
    'master_section_id' => 6,
    'created_at' => now()
],
        ]);
    }
}
