<?php

use Illuminate\Database\Seeder;

class WellHiredSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('well_hired')->insert([
            [
                'name' => 'Servicio',
          ],
        ]);
    }
}
