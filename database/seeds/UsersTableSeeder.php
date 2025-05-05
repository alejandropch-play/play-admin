<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [
                'full_name' => 'John Timoteo',
                'username' => 'john',
                'email' => 'jft@pglatam.com',
                'password' => bcrypt('Qwerty123'),
                'status' => 1,
                'role_id' => 1
            ],
            [
                'full_name' => 'Joseph Padilla Garcia',
                'username' => 'joseph',
                'email' => 'joseph@play.com',
                'password' => bcrypt('Qwerty123'),
                'status' => 1,
                'role_id' => 1
            ],
            [
                'full_name' => 'playgroup',
                'username' => 'playgroup',
                'email' => 'play@play.com',
                'password' => bcrypt('Qwerty123'),
                'status' => 1,
                'role_id' => 1
            ]
        ]);
    }
}
