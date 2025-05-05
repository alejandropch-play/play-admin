<?php

use Illuminate\Database\Seeder;

class PressReleasePosts extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('press_release_posts')->insert([
            [
                'title' => 'El 90% de inmobiliarias peruanas invierten en digitalización en beneficio de clientes y nuevas tecnologías',
                'url' => 'https://peru21.pe/lima/sector-inmobiliario-digitalizacion-play-group-el-90-de-inmobiliarias-peruanas-invierten-en-digitalizacion-en-beneficio-de-clientes-y-nuevas-tecnologias-noticia',
                'image' => '170631379221749.jpg',
                'thumbnail' => '170631379264012.jpg',
                'published' => '1',
                'created_at' => '2024-01-26 19:03:13'
            ],
            [
                'title' => 'Internacional: Agencia peruana es la Mejor Agencia de Transformación Digital en Small Business Awards 2020',
                'url' => 'https://www.mercadonegro.pe/negocios-y-empresas/agencias/internacional-play-group-es-la-mejor-agencia-de-transformacion-digital-en-small-business-awards-2020/',
                'image' => '170631381345063.jpg',
                'thumbnail' => '170631381370728.jpg',
                'published' => '1',
                'created_at' => '2024-01-26 19:03:34'
            ],
            [
                'title' => 'Marketing digital: conoce tres claves para aumentar ventas online',
                'url' => 'https://andina.pe/agencia/noticia-marketing-digital-conoce-tres-claves-para-aumentar-ventas-online-945802.aspx',
                'image' => '170631383094962.jpg',
                'thumbnail' => '170631383121894.jpg',
                'published' => '1',
                'created_at' => '2024-01-26 19:03:51'
            ],
            [
                'title' => 'PLAY Group LATAM es nombrada “La mejor agencia digital del año” por TopFice',
                'url' => 'https://pressperu.com/play-group-es-nombrada-la-mejor-agencia-digital-del-ano-por-topfice/',
                'image' => '170631386321166.jpg',
                'thumbnail' => '170631386349594.jpg',
                'published' => '1',
                'created_at' => '2024-01-26 19:04:23'
            ],

            [
                'title' => 'Más del 90% de entidades educativas en Perú han empezado a digitalizar enseñanzas',
                'url' => 'https://laprimera.pe/mas-del-90-de-entidades-educativas-en-peru-han-empezado-a-digitalizar-ensenanzas/',
                'image' => '17086235022264.jpg',
                'thumbnail' => '17086235022264.jpg',
                'published' => '1',
                'created_at' => '2024-01-26 19:04:23'
            ],
            [
                'title' => 'Día del Maestro: una profesión que necesita digitalizarse para estar acorde con los nuevos tiempos',
                'url' => 'https://www.infobae.com/peru/2023/07/06/dia-del-maestro-una-profesion-que-necesita-digitalizarse-para-estar-acorde-con-los-nuevos-tiempos/',
                'image' => '17086234859332.jpg',
                'thumbnail' => '17086234859332.jpg',
                'published' => '1',
                'created_at' => '2024-01-26 19:04:23'
            ],
            [
                'title' => 'PLAY Group LATAM: mucho más que un cambio de nombre',
                'url' => 'https://infomarketing.pe/marketing/noticias/play-group-mucho-mas-que-un-cambio-de-nombre/',
                'image' => '170862346986620.jpg',
                'thumbnail' => '170862346986620.jpg',
                'published' => '1',
                'created_at' => '2024-01-26 19:04:23'
            ],
            [
                'title' => 'Entidades educativas destinan más de 1 millón de soles para la digitalización',
                'url' => 'https://peru21.pe/cheka/tecnologia/educacion-inversion-digitalizacion-entidades-educativas-destinan-mas-de-1-millon-de-soles-para-la-digitalizacion-noticia/#:~:text=Al%20d%C3%ADa%20de%20hoy%2C%20el,2023%2C%2010%3A08%20a',
                'image' => '170862345137169.jpg',
                'thumbnail' => '170862345137169.jpg',
                'published' => '1',
                'created_at' => '2024-01-26 19:04:23'
            ],
        ]);

        DB::table('content')->insert([
            [
                'field' => 'title',
                'value' => 'Nuestro alcance en diferentes Medios de Prensa',
                'master_section_id' => 35,
                'created_at' => now()
            ],
            [
                'field' => 'description',
                'value' => 'Compartimos contigo nuestras notas, reportajes y entrevistas.',
                'master_section_id' => 35,
                'created_at' => now()
            ],



            [
                'field' => 'background',
                'value' => 'p-170753932965c6fb810b05b.jpg',
                'master_section_id' => 35,
                'created_at' => now()
            ],
            [
                'field' => 'title',
                'value' => 'Libro de Reclamaciones',
                'master_section_id' => 35,
                'created_at' => now()
            ],
            [
                'field' => 'text1',
                'value' => '<p><strong>Reclamo:</strong> Disconformidad relacionadas a los productos o servicios.</p><p><strong>Queja:</strong> Disconformidad no relacionada a los productos o servicios o malestar o descontento respecto a la atención al cliente.</p>',
                'master_section_id' => 35,
                'created_at' => now()
            ],
            [
                'field' => 'text2',
                'value' => '<p><strong>OBSERVACIONES Y ACCIONES ADOPTADOS POR EL PROVEEDOR:</strong></p><p>*La respuesta a este reclamo o queja será enviada al correo indicado en el presente formulario.</p><p>*El plazo máximo de atención es de 30 días calendario desde su presentación, el cual podrá extenderse excepcionalmente de acuerdo a la complejidad del reclamo o queja, lo cual será informado oportunamente mediante un previo aviso al USUARIO.</p><p>*Con el envío del presente documento EL USUARIO valida la información consignada y declara haber sido debidamente informado por PROEM PYMES S.A.C, sobre el procedimiento, plazo de atención y medio de respuesta a su reclamo o queja.</p><p>*En caso el reclamo resulte procedente o improcedente, le será enviado a su correo electrónico por el cual nos está enviando la presente comunicación.</p><p>*Su HOJA DE RECLAMACIÓN/QUEJA así como el seguimiento, le será enviado a su correo electrónico por el cual nos está enviando la presente comunicación.</p><p>*La formulación del reclamo no impide acudir por otras vías de solución de controversias ni es requisito previo para interponer una denuncia ante el INDECOPI.</p>',
                'master_section_id' => 35,
                'created_at' => now()
            ],
            [
                'field' => 'text3',
                'value' => '<p><strong>Adjuntos</strong></p><p>Adjunta un documento con un límite de 20MB, en formato PDF, para respaldar tu reclamo o queja.</p>',
                'master_section_id' => 35,
                'created_at' => now()
            ],
        ]);
    }
}
