<?php

use Illuminate\Database\Seeder;

class ChatbotMessagesTableSeeder extends Seeder
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
                'name' 	=> 'Chatbot conversaciones',
				'slug' 		=> 'chatbot-conversaciones',
				'parent' 	=> 0,
				'icon' 		=> 'fas fa-robot',
                'index'    => 11
            ],
        ]);

        DB::table('master_permissions')->insert([
            [
                'role_id' 	=> 1,
				'module_id' 		=> 24
            ],
            [
                'role_id' 	=> 2,
				'module_id' 		=> 24
            ],
        ]);    
    }
}
