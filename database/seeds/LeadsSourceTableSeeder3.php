<?php

use Illuminate\Database\Seeder;

class LeadsSourceTableSeeder3 extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('leads_source')->insert([
            [
                'name' 	=> 'Lid',
            ],
        ]);
    }
}
