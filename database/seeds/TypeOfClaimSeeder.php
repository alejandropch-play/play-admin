<?php

use Illuminate\Database\Seeder;

class TypeOfClaimSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('type_of_claim')->insert([
            [
                'name' => 'Queja',
          ],
            [
        		  'name' => 'Reclamo',
            ]
        ]);
    }
}
