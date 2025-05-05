<?php

use Illuminate\Database\Seeder;

class DepartmentsTableSeeder2 extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('departments')->insert([
            [
                'name' 	=> 'Digital Transformation',
                'title' => 'Digital Transformation',
                //'slug' => 'software-factory',
				'logo' 	=>  NULL,
				'excerpt' => 'Synergy Beyond Upgrade',
                'main'    => 0
            ]
        ]);
    }
}
