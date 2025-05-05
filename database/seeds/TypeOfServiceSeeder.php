<?php

use Illuminate\Database\Seeder;

class TypeOfServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('type_of_service')->insert([
            [
                'name' => 'Creativity Hub',
          ],
            [
        		  'name' => 'Digital Performance',
            ],
            [
                'name' => 'Software Factory',
          ]
        ]);
    }
}
