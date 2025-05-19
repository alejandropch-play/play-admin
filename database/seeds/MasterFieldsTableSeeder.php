<?php

use Illuminate\Database\Seeder;

class MasterFieldsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('master_fields')->insert([
            #Home
            //Banner
            [
                'name' 		=> 'Header',
                'variable'     => 'header',
                'type'     => 'input',
                'master_section_id'     => 1
            ],
            [
                'name' 		=> 'Title',
                'variable'     => 'tittle',
                'type'     => 'input',
                'master_section_id'     => 1
            ],
            [
                'name' 		=> 'Poster (para pantallas grandes)',
                'variable'     => 'poster_image',
                'type'     => 'image',
                'master_section_id'     => 1
            ],
            [
                'name' => 'Premio',
                'variable' => 'award_image_home',
                'type' => 'image',
                'master_section_id' => 1
            ],
            [
                'name' => 'Personaje Play (visible solo en pantallas pequeñas)',
                'variable' => 'play-character_image_home',
                'type' => 'image',
                'master_section_id' => 1
            ],
            //Lineas de Negocio
            [
                'name' 		=> 'Imagen',
                'variable'     => 'image',
                'type'     => 'image',
                'master_section_id'     => 2
            ],
            [
                'name' 		=> 'Título',
                'variable' 		=> 'tittle',
                'type'     => 'input',
                'master_section_id' => 2
            ],
            [
                'name' 		=> 'Subtítulo',
                'variable' 		=> 'sub_title',
                'type'     => 'input',
                'master_section_id' => 2
            ],
            [
                'name' 		=> 'Imagen Digital Performance',
                'variable'     => 'image_dp',
                'type'     => 'image',
                'master_section_id'     => 2
            ],
            [
                'name' 		=> 'Texto de Digital Performance',
                'variable' 		=> 'text_dp',
               'type'     => 'input',
                'master_section_id' => 2
            ],
            [
                'name' 		=> 'Imagen de Creativity Hub',
                'variable'     => 'image_ch',
                'type'     => 'image',
                'master_section_id'     => 2
            ],
            [
                'name' 		=> 'Texto de Creativity Hub',
                'variable' 		=> 'text_ch',
                'type'     => 'input',
                'master_section_id' => 2
            ],
            [
                'name' 		=> 'Imagen de Software Factory',
                'variable'     => 'image_sf',
                'type'     => 'image',
                'master_section_id'     => 2
            ],
            [
                'name' 		=> 'Texto de Software Factory',
                'variable' 		=> 'text_sf',
                'type'     => 'input',
                'master_section_id' => 2
            ],
            //  Por que Nosotros
            [
                'name' 		=> 'Título',
                'variable' 		=> 'tittle',
                'type'     => 'input',
                'master_section_id' => 3
            ],
            [
                'name' 		=> 'Subtitulo',
                'variable' 		=> 'subitle',
                'type'     => 'input',
                'master_section_id' => 3
            ],
            //Nuestros Clientes
            [
                'name' 		=> 'Título',
                'variable' 		=> 'tittle',
                'type'     => 'input',
                'master_section_id' => 4
            ],
            [
                'name' 		=> 'Subtitulo',
                'variable' 		=> 'subtitle',
                'type'     => 'input',
                'master_section_id' => 4
            ],

            //Rompemos Fronteras
            [
                'name' 		=> 'Título',
                'variable' 		=> 'tittle',
                'type'     => 'input',
                'master_section_id' => 5
            ],
            [
                'name' 		=> 'Subtitulo',
                'variable' 		=> 'subtitle',
                'type'     => 'input',
                'master_section_id' => 5
            ],

            //Notas de Prensa
            [
                'name' 		=> 'Título',
                'variable' 		=> 'tittle',
                'type'     => 'input',
                'master_section_id' => 6
            ],
            [
                'name' 		=> 'Subtitulo',
                'variable' 		=> 'subtitle',
                'type'     => 'input',
                'master_section_id' => 6
            ],
            [
                'name' 		=> 'Frase',
                'variable' 		=> 'frase',
                'type'     => 'input',
                'master_section_id' => 6
            ],
            #Blog
            //Banner
            [
                'name' 		=> 'Header',
                'variable' 		=> 'header',
                'type'     => 'input',
                'master_section_id' => 7
            ],
            [
                'name' 		=> 'Título',
                'variable' 		=> 'tittle',
                'type'     => 'input',
                'master_section_id' => 7
            ],
            [
                'name' 		=> 'Imagen de Fondo (visible solo en pantallas grandes)',
                'variable'     => 'image_blog',
                'type'     => 'image',
                'master_section_id'     => 7
            ],
            [
                'name' 		=> 'Personaje Play',
                'variable'     => 'play-character_image_home',
                'type'     => 'image',
                'master_section_id'     => 7
            ],
            #Conocenos
            //Nuestra Historia
            [
                'name' 		=> 'Título',
                'variable' 		=> 'tittle',
                'type'     => 'input',
                'master_section_id' => 8
            ],
            [
                'name' 		=> 'Subtitulo',
                'variable' 		=> 'subtitle',
                'type'     => 'input',
                'master_section_id' => 8
            ],
            #Conocenos
            // Banner
            [
                'name' 		=> 'Header',
                'variable' 		=> 'header',
                'type'     => 'input',
                'master_section_id' => 9
            ],
            [
                'name' 		=> 'Título',
                'variable' 		=> 'tittle',
                'type'     => 'input',
                'master_section_id' => 9
            ],
            [
                'name' => 'Personaje Play',
                'variable' => 'play-character_image_home',
                'type' => 'image',
                'master_section_id' => 9
            ],
            [
                'name' 		=> 'Imagen de Fondo (visible solo en pantallas grandes)',
                'variable'     => 'image',
                'type'     => 'image',
                'master_section_id'     => 9
            ],
            [
                'name' 		=> 'Item 1',
                'variable' 		=> 'image_1',
                'type'     => 'image',
                'master_section_id'     => 9
            ],
            [
                'name' 		=> 'Texto para item 1',
                'variable' 		=> 'text_1',
                'type'     => 'input',
                'master_section_id' => 9
            ],
            [
                'name' 		=> 'Item 2',
                'variable'     => 'image_2',
                'type'     => 'image',
                'master_section_id'     => 9
            ],
            [
                'name' 		=> 'Texto para item 2',
                'variable' 		=> 'text_2',
                'type'     => 'input',
                'master_section_id' => 9
            ],
            [
                'name' 		=> 'Item 3',
                'variable'     => 'image_3',
                'type'     => 'image',
                'master_section_id'     => 9
            ],
            [
                'name' 		=> 'Texto para item 3',
                'variable' 		=> 'text_3',
                'type'     => 'input',
                'master_section_id' => 9
            ],
            [
                'name' 		=> 'Item 4',
                'variable'     => 'image_4',
                'type'     => 'image',
                'master_section_id'     => 9
            ],
            [
                'name' 		=> 'Texto para item 4',
                'variable' 		=> 'text_4',
                'type'     => 'input',
                'master_section_id' => 9
            ],
            // Nuestra Historia
            [
                'name' 		=> 'Título',
                'variable' 		=> 'tittle',
                'type'     => 'input',
                'master_section_id' => 10
            ],
            [
                'name' 		=> 'Subtitulo',
                'variable' 		=> 'subtitle',
                'type'     => 'input',
                'master_section_id' => 10
            ],
            // Nuestros trofeos
            [
                'name' 		=> 'Título',
                'variable' 		=> 'tittle',
                'type'     => 'input',
                'master_section_id' => 11
            ],
            [
                'name' 		=> 'Subtitulo',
                'variable' 		=> 'subtitle',
                'type'     => 'input',
                'master_section_id' => 11
            ],
            [
                'name' 		=> 'Frase',
                'variable' 		=> 'frase',
                'type'     => 'input',
                'master_section_id' => 11
            ],
            //Nuestros Players
            [
                'name' 		=> 'Título',
                'variable' 		=> 'tittle',
                'type'     => 'input',
                'master_section_id' => 12
            ],
            [
                'name' 		=> 'Subtitulo',
                'variable' 		=> 'subtitle',
                'type'     => 'input',
                'master_section_id' => 12
            ],
            [
                'name' 		=> 'Frase',
                'variable' 		=> 'frase',
                'type'     => 'input',
                'master_section_id' => 12
            ],
            //Hi,Play
            [
                'name' 		=> 'Imagen',
                'variable'     => 'image',
                'type'     => 'image',
                'master_section_id'     => 13
            ],
            [
                'name' 		=> 'Descripción',
                'variable' 		=> 'description',
                'type'     => 'input',
                'master_section_id' => 13
            ],
            //Proceso de Calidad
            [
                'name' 		=> 'Título',
                'variable' 		=> 'tittle',
                'type'     => 'input',
                'master_section_id' => 14
            ],
            [
                'name' 		=> 'Subtitulo',
                'variable' 		=> 'subtitle',
                'type'     => 'input',
                'master_section_id' => 14
            ],
            [
                'name' 		=> 'Frase',
                'variable' 		=> 'frase',
                'type'     => 'input',
                'master_section_id' => 14
            ],
            #SF
            //Banner
            [
                'name' 		=> 'Fondo',
                'variable'     => 'background',
                'type'     => 'image',
                'master_section_id'     => 18
            ],
            [
                'name' 		=> 'Titulo Image',
                'variable'     => 'image',
                'type'     => 'image',
                'master_section_id'     => 18
            ],
            [
                'name' 		=> 'Descripción',
                'variable'     => 'description',
                'type'     => 'input',
                'master_section_id'     => 18
            ],
            [
                'name' 		=> 'Imagen de Formulario',
                'variable'     => 'image_responsive',
                'type'     => 'image',
                'master_section_id'     => 18
            ],
            //Metodologia?
            [
                'name' 		=> 'Título',
                'variable' 		=> 'tittle',
                'type'     => 'input',
                'master_section_id' => 19
            ],
             [
                'name' 		=> 'SubTitulo',
                'variable' 		=> 'sub_title',
                'type'     => 'input',
                'master_section_id' => 19
            ],
             [
                'name' 		=> 'Description',
                'variable' 		=> 'description',
                'type'     => 'input',
                'master_section_id' => 19
            ],
            [
                'name' 		=> 'Gráfica',
                'variable'     => 'image',
                'type'     => 'image',
                'master_section_id'     => 19
            ],
            //Casos de Éxito
            [
                'name' 		=> 'Título',
                'variable' 		=> 'tittle',
                'type'     => 'input',
                'master_section_id' => 20
            ],
             [
                'name' 		=> 'SubTitulo',
                'variable' 		=> 'sub_title',
                'type'     => 'input',
                'master_section_id' => 20
            ],
             [
                'name' 		=> 'Description',
                'variable' 		=> 'description',
                'type'     => 'input',
                'master_section_id' => 20
            ],
            //Solucion de Problemas
            [
                'name' 		=> 'Título',
                'variable' 		=> 'tittle',
                'type'     => 'input',
                'master_section_id' => 21
            ],
            [
                'name' 		=> 'SubTitulo',
                'variable' 		=> 'sub_title',
                'type'     => 'input',
                'master_section_id' => 21
            ],

            #CH
            //Banner
            [
                'name' 		=> 'Fondo',
                'variable'     => 'background',
                'type'     => 'image',
                'master_section_id'     => 23
            ],
            [
                'name' 		=> 'Titulo Image',
                'variable'     => 'image',
                'type'     => 'image',
                'master_section_id'     => 23
            ],
            [
                'name' 		=> 'Descripción',
                'variable'     => 'description',
                'type'     => 'input',
                'master_section_id'     => 23
            ],
            [
                'name' 		=> 'Imagen de Formulario',
                'variable'     => 'image_responsive',
                'type'     => 'image',
                'master_section_id'     => 23
            ],
            //Metodologia?
                [
                'name' 		=> 'Título',
                'variable' 		=> 'tittle',
                'type'     => 'input',
                'master_section_id' => 24
            ],
             [
                'name' 		=> 'SubTitulo',
                'variable' 		=> 'sub_title',
                'type'     => 'input',
                'master_section_id' => 24
            ],
             [
                'name' 		=> 'Description',
                'variable' 		=> 'description',
                'type'     => 'input',
                'master_section_id' => 24
            ],
            [
                'name' 		=> 'Gráfica',
                'variable'     => 'image',
                'type'     => 'image',
                'master_section_id'     => 24
            ],
            //Casos de Éxito
            [
                'name' 		=> 'Título',
                'variable' 		=> 'tittle',
                'type'     => 'input',
                'master_section_id' => 25
            ],
             [
                'name' 		=> 'SubTitulo',
                'variable' 		=> 'sub_title',
                'type'     => 'input',
                'master_section_id' => 25
            ],
             [
                'name' 		=> 'Description',
                'variable' 		=> 'description',
                'type'     => 'input',
                'master_section_id' => 25
            ],
            //Solucion de Problemas
            [
                'name' 		=> 'Título',
                'variable' 		=> 'tittle',
                'type'     => 'input',
                'master_section_id' => 26
            ],
            [
                'name' 		=> 'SubTitulo',
                'variable' 		=> 'sub_title',
                'type'     => 'input',
                'master_section_id' => 26
            ],

            #DP
            //Banner
            [
                'name' 		=> 'Fondo',
                'variable'     => 'background',
                'type'     => 'image',
                'master_section_id'     => 28
            ],
            [
                'name' 		=> 'Titulo Image',
                'variable'     => 'image',
                'type'     => 'image',
                'master_section_id'     => 28
            ],
            [
                'name' 		=> 'Descripción',
                'variable'     => 'description',
                'type'     => 'input',
                'master_section_id'     => 28
            ],
            [
                'name' 		=> 'Imagen de Formulario',
                'variable'     => 'image_responsive',
                'type'     => 'image',
                'master_section_id'     => 28
            ],
            //Metodologia Digital Performance
               [
                'name' 		=> 'Título',
                'variable' 		=> 'tittle',
                'type'     => 'input',
                'master_section_id' => 29
            ],
             [
                'name' 		=> 'SubTitulo',
                'variable' 		=> 'sub_title',
                'type'     => 'input',
                'master_section_id' => 29
            ],
             [
                'name' 		=> 'Description',
                'variable' 		=> 'description',
                'type'     => 'input',
                'master_section_id' => 29
            ],
            [
                'name' 		=> 'Gráfica',
                'variable'     => 'image',
                'type'     => 'image',
                'master_section_id'     => 29
            ],
            //Casos de Éxito
            [
                'name' 		=> 'Título',
                'variable' 		=> 'tittle',
                'type'     => 'input',
                'master_section_id' => 30
            ],
             [
                'name' 		=> 'SubTitulo',
                'variable' 		=> 'sub_title',
                'type'     => 'input',
                'master_section_id' => 30
            ],
             [
                'name' 		=> 'Description',
                'variable' 		=> 'description',
                'type'     => 'input',
                'master_section_id' => 30
            ],
            //Solucion de Problemas
            [
                'name' 		=> 'Título',
                'variable' 		=> 'tittle',
                'type'     => 'input',
                'master_section_id' => 31
            ],
            [
                'name' 		=> 'SubTitulo',
                'variable' 		=> 'sub_title',
                'type'     => 'input',
                'master_section_id' => 31
            ],
            #Politicas
            //Banner
            [
                'name' 		=> 'Banner',
                'variable'     => 'background',
                'type'     => 'image',
                'master_section_id'     => 33
            ],
            [
                'name' 		=> 'Título',
                'variable' 		=> 'tittle',
                'type'     => 'input',
                'master_section_id' => 33
            ],
            //Informacion
            [
                'name' 		=> 'Descripción',
                'variable' 		=> 'description',
                'type'     => 'editor_large',
                'master_section_id' => 34
            ],

            // DP
            [
                'name' => 'Titulo Objetivo 1',
                'variable' => 'title_1',
                'type' => 'input',
                'master_section_id' => 36
            ],
            [
                'name' => 'Descripción del objetivo 1',
                'variable' => 'description_1',
                'type' => 'input',
                'master_section_id' => 36
            ],
            [
                'name' => 'Titulo Objetivo 2',
                'variable' => 'title_2',
                'type' => 'input',
                'master_section_id' => 36
            ],
            [
                'name' => 'Descripción del objetivo 2',
                'variable' => 'description_2',
                'type' => 'input',
                'master_section_id' => 36
            ],
            [
                'name' => 'Titulo Objetivo 3',
                'variable' => 'title_3',
                'type' => 'input',
                'master_section_id' => 36
            ],
            [
                'name' => 'Descripción del objetivo 3',
                'variable' => 'description_3',
                'type' => 'input',
                'master_section_id' => 36
            ],
            [
                'name' => 'Titulo Objetivo 4',
                'variable' => 'title_4',
                'type' => 'input',
                'master_section_id' => 36
            ],
            [
                'name' => 'Descripción del objetivo 4',
                'variable' => 'description_4',
                'type' => 'input',
                'master_section_id' => 36
            ],

            //CH
            [
                'name' => 'Titulo Objetivo 1',
                'variable' => 'title_1',
                'type' => 'input',
                'master_section_id' => 37
            ],
            [
                'name' => 'Descripción del objetivo 1',
                'variable' => 'description_1',
                'type' => 'input',
                'master_section_id' => 37
            ],
            [
                'name' => 'Titulo Objetivo 2',
                'variable' => 'title_2',
                'type' => 'input',
                'master_section_id' => 37
            ],
            [
                'name' => 'Descripción del objetivo 2',
                'variable' => 'description_2',
                'type' => 'input',
                'master_section_id' => 37
            ],
            [
                'name' => 'Titulo Objetivo 3',
                'variable' => 'title_3',
                'type' => 'input',
                'master_section_id' => 37
            ],
            [
                'name' => 'Descripción del objetivo 3',
                'variable' => 'description_3',
                'type' => 'input',
                'master_section_id' => 37
            ],
            [
                'name' => 'Titulo Objetivo 4',
                'variable' => 'title_4',
                'type' => 'input',
                'master_section_id' => 37
            ],
            [
                'name' => 'Descripción del objetivo 4',
                'variable' => 'description_4',
                'type' => 'input',
                'master_section_id' => 37
            ],

            //SF
            [
                'name' => 'Titulo Objetivo 1',
                'variable' => 'title_1',
                'type' => 'input',
                'master_section_id' => 38
            ],
            [
                'name' => 'Descripción del objetivo 1',
                'variable' => 'description_1',
                'type' => 'input',
                'master_section_id' => 38
            ],
            [
                'name' => 'Titulo Objetivo 2',
                'variable' => 'title_2',
                'type' => 'input',
                'master_section_id' => 38
            ],
            [
                'name' => 'Descripción del objetivo 2',
                'variable' => 'description_2',
                'type' => 'input',
                'master_section_id' => 38
            ],
            [
                'name' => 'Titulo Objetivo 3',
                'variable' => 'title_3',
                'type' => 'input',
                'master_section_id' => 38
            ],
            [
                'name' => 'Descripción del objetivo 3',
                'variable' => 'description_3',
                'type' => 'input',
                'master_section_id' => 38
            ],
            [
                'name' => 'Titulo Objetivo 4',
                'variable' => 'title_4',
                'type' => 'input',
                'master_section_id' => 38
            ],
            [
                'name' => 'Descripción del objetivo 4',
                'variable' => 'description_4',
                'type' => 'input',
                'master_section_id' => 38
            ],

        ]);
    }
}
