<?php

use Illuminate\Database\Seeder;

class BannerControllersSeeder  extends Seeder
{
   /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('master_fields')->insert([
            'name' => 'Premio',
            'variable' => 'award_image_home',
            'type' => 'image',
            'master_section_id' => 1
        ]);
        DB::table('master_fields')->insert([
            'name' => 'Personaje Play (visible solo en pantallas pequeñas)',
            'variable' => 'play-character_image_home',
            'type' => 'image',
            'master_section_id' => 1
        ]);

    }
}
