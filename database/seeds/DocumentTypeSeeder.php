<?php

use Illuminate\Database\Seeder;

class DocumentTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('document_type')->insert([
            [
                'name' => 'D.N.I',
          ],
            [
        		  'name' => 'Carnet de Extranjeria',
            ]
        ]);
    }
}
