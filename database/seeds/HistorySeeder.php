<?php

use Illuminate\Database\Seeder;

class HistorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('master_modules')->insert([
            [
                'id' => 34,
                'name' => 'Nuestra Historia',
                'slug' => 'nuestra-historia',
                'parent' => 0,
                'icon' => 'fas fa-book-reader',
                'index' => 20,
            ],
        ]);
        DB::table('master_permissions')->insert([
            [
                'id' => 63,
                'role_id' => 2,
                'module_id' => 34
            ],
            [
                'id' => 64,
                'role_id' => 1,
                'module_id' => 34
            ],
        ]);
    }
}
