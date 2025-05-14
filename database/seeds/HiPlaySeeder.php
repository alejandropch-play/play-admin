<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class HiPlaySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('master_modules')->insert([
                'id' => 31,
                'name' => 'Hi,Play',
                'slug' => 'hiplay',
                'parent' => 0,
                'icon' => 'fas fa-film',
                'index' => 17
        ]);
        DB::table('master_permissions')->insert([
                [
                'role_id' => 1,
                'module_id' => 31],

                [
                'role_id' => 2,
                'module_id' => 31]

        ]);
    }
}
