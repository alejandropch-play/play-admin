<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        // Seeders basicos a ejecutar

        $this->call(RolesTableSeeder::class);
        $this->call(MasterModulesTableSeeder::class);
        $this->call(MasterPermissionsTableSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(DepartmentsTableSeeder::class);
        $this->call(MasterSocialNetworksTableSeeder::class);
        $this->call(MasterPagesTableSeeder::class);
        $this->call(MasterSectionsTableSeeder::class);
        $this->call(MasterFieldsTableSeeder::class);
        $this->call(LeadsMediumTableSeeder::class);
        $this->call(LeadsSourceTableSeeder::class);

        // Notas de Prensa, Libro de Reclamaciones
        // Ejecutar los seeders en orden por separado

        // Primera ejecucion

        $this->call(MasterPagesTableSeeder2::class);

        // Segunda ejecucion

        $this->call(MasterModulesTableSeeder2::class);
        $this->call(MasterSectionsTableSeeder4::class);

        $this->call(MasterFieldsTableSeeder4::class);
        $this->call(MasterPermissionsTableSeeder2::class);

        $this->call(PressReleasePosts::class);

        $this->call(DocumentTypeSeeder::class);
        $this->call(WellHiredSeeder::class);
        $this->call(TypeOfServiceSeeder::class);
        $this->call(TypeOfClaimSeeder::class);

        $this->call(WorkWithUsSeeder::class);

        $this->call(HiPlaySeeder::class);


    }
}
