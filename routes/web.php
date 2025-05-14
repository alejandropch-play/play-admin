<?php

Route::get('/','Admin\Auth\LoginController@showLoginForm')->name('login');
Route::post('login','Admin\Auth\LoginController@login')->name('login.post');
Route::post('logout','Admin\Auth\LoginController@logout')->name('logout');
Route::post('login/email', 'Admin\Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
Route::get('login/restablecer/{token}', 'Admin\Auth\ResetPasswordController@showResetForm')->name('password.reset');
Route::post('login/reset', 'Admin\Auth\ResetPasswordController@reset')->name('password.update');

Route::middleware(['auth'])->namespace('Admin')->name('admin.')->group(function() {
    Route::get('/dashboard', 'DashboardController@index')->name('dashboard');
    Route::get('json/dashboard', 'DashboardController@getStatistics')->name('dashboard.get-statistics');

    Route::get('perfil', 'ProfileController@index')->name('profile');
    Route::get('json/profile', 'ProfileController@getProfile')->name('profile.json.get-profile');
    Route::put('profile', 'ProfileController@updateProfile')->name('profile.update-profile');
    Route::put('change-password', 'ProfileController@updatePassword')->name('profile.update-contrasena');

    #Notas de Prensa
    Route::get('notas-de-prensa/posts', 'PressReleases\PostController@index')->name('press_releases.post')->middleware('permission:notas-de-prensa/posts');

#Libro de Reclamaciones
Route::get('libro-de-reclamaciones/reclamos', 'ComplaintsBook\ClaimController@index')->name('complaints_book.claim')->middleware('permission:libro-de-reclamaciones/reclamos');

#Libro de Reclamaciones
Route::get('trabaja-con-nosotros/puestos', 'WorkWithUs\JobController@index')->name('work_with_us.job')->middleware('permission:trabaja-con-nosotros/puestos');

    #Users
    Route::get('configuracion/usuarios', 'Configuration\UsersController@index')->name('users')->middleware('permission:configuracion/usuarios');
    Route::post('configuracion/usuarios', 'Configuration\UsersController@registrar')->name('users.registrar')->middleware('permission:configuracion/usuarios');
    Route::put('configuracion/usuarios/{usuario}', 'Configuration\UsersController@actualizar')->name('users.update')->middleware('permission:configuracion/usuarios');
    Route::delete('configuracion/usuarios/{usuario}', 'Configuration\UsersController@eliminar')->name('users.delete')->middleware('permission:configuracion/usuarios');
    Route::put('configuracion/usuarios/deshabilitar/{usuario}', 'Configuration\UsersController@disable')->name('users.update')->middleware('permission:configuracion/usuarios');
    Route::get('configuracion/json/usuarios', 'Configuration\UsersController@obtenerUsuarios')->name('json.users')->middleware('permission:configuracion/usuarios');
    Route::get('configuracion/json/usuarios/{usuario}', 'Configuration\UsersController@obtenerUsuario')->name('json.user')->middleware('permission:configuracion/usuarios');
    #Roles
    Route::get('configuracion/roles', 'Configuration\RolesController@index')->name('roles')->middleware('permission:configuracion/roles');
    Route::post('configuracion/roles', 'Configuration\RolesController@registrar')->name('roles.registrar')->middleware('permission:configuracion/roles');
    Route::put('configuracion/roles/{rol}', 'Configuration\RolesController@actualizar')->name('roles.update')->middleware('permission:configuracion/roles');
    Route::delete('configuracion/roles/{rol}', 'Configuration\RolesController@eliminar')->name('roles.delete')->middleware('permission:configuracion/roles');
    Route::get('configuracion/json/roles', 'Configuration\RolesController@obtenerRoles')->name('json.roles.get-roles')->middleware('permission:configuracion/roles');
    Route::get('configuracion/json/roles/{rol}', 'Configuration\RolesController@obtenerRol')->name('json.roles.get-rol')->middleware('permission:configuracion/roles');
    Route::get('configuracion/json/modulos', 'Configuration\RolesController@obtenerModulos')->name('json.roles.get-modulos')->middleware('permission:configuracion/roles');

    #Leads
    Route::get('leads', 'LeadsController@index')->name('leads')->middleware('permission:leads');
    Route::get('leads/all-export', 'LeadsController@allExport')->name('leads.all-export')->middleware('permission:leads');
    Route::post('leads/filter-export', 'LeadsController@filterExport')->name('leads.filter-export')->middleware('permission:leads');
    Route::get('leads/json/contact-email-destination', 'LeadsController@getEmailDestination')->name('leads.json.contact-email-destination')->middleware('permission:leads');
    Route::get('json/contactos', 'LeadsController@getContacts')->name('leads.json.get-contactos')->middleware('permission:leads');
    Route::get('json/contactos/{lead}', 'LeadsController@getContact')->name('leads.json.get-contacto')->middleware('permission:leads');
    Route::delete('leads/{lead}', 'LeadsController@delete')->name('leads.delete')->middleware('permission:leads');
    Route::put('leads', 'LeadsController@update')->name('leads.update');

    #Information
    #SEO
    Route::get('informacion/seo', 'Information\SeoController@index')->name('information.seo')->middleware('permission:informacion/seo');
    Route::get('informacion/json/seo', 'Information\SeoController@getPages')->name('information.seo.json.get-pages')->middleware('permission:informacion/seo');
    Route::put('informacion/seo/{page}', 'Information\SeoController@update')->name('information.seo.update')->middleware('permission:informacion/seo');
    #General
    Route::get('informacion/general', 'Information\GeneralController@index')->name('information')->middleware('permission:informacion/general');
    Route::get('informacion/json/informacion', 'Information\GeneralController@get')->name('information.get')->middleware('permission:informacion/general');
    Route::post('informacion/general', 'Information\GeneralController@registrar')->name('information.registrar')->middleware('permission:informacion/general');


    Route::get('informacion/json/partners', 'Information\GeneralController@getPartners')->name('information.partners.json.get-partners')->middleware('permission:informacion/general');
    Route::post('informacion/partners', 'Information\GeneralController@createPartner')->name('information.partners.create')->middleware('permission:informacion/general');
    Route::put('informacion/partners/order', 'Information\GeneralController@orderPartners')->name('information.partners.order')->middleware('permission:informacion/general');
    Route::get('informacion/json/partners/{partner}', 'Information\GeneralController@getPartner')->name('information.partners.json.get-partner')->middleware('permission:informacion/general');
    Route::delete('informacion/partners/{partner}', 'Information\GeneralController@deletePartner')->name('information.partners.delete')->middleware('permission:informacion/general');
    Route::put('informacion/partners/{partner}', 'Information\GeneralController@updatePartner')->name('information.partners.update')->middleware('permission:informacion/general');


    #Pages
    Route::get('informacion/paginas', 'Information\PagesController@index')->name('pages');
    Route::get('informacion/json/pages', 'Information\PagesController@getPages')->name('pages.json.get-pages');
    Route::get('informacion/json/pages/{page}', 'Information\PagesController@getPageSections')->name('pages.json.get-page-sections');
    Route::get('informacion/json/pages/section/{section}', 'Information\PagesController@getPageSectionFields')->name('pages.json.get-page-sections-fields');
    Route::post('informacion/pages', 'Information\PagesController@updateSection')->name('pages.update-section');
    Route::post('informacion/pages/image', 'Information\PagesController@storeImage')->name('pages.store-image');
    Route::post('informacion/json/pages/agregar/{section}','Information\PagesController@postAddMore')->name('page.add-more');

    #Social Networks
    Route::get('informacion/redes-sociales', 'Information\SocialController@index')->name('information.social')->middleware('permission:informacion/redes-sociales');
    Route::get('informacion/json/social', 'Information\SocialController@getNetworks')->name('information.social.json.get-networks')->middleware('permission:informacion/redes-sociales');
    Route::post('informacion/social', 'Information\SocialController@create')->name('information.social.create')->middleware('permission:informacion/redes-sociales');
    Route::put('informacion/social/order', 'Information\SocialController@order')->name('information.social.order')->middleware('permission:informacion/redes-sociales');
    Route::get('informacion/json/social/{social}', 'Information\SocialController@getNetwork')->name('information.social.json.get-social')->middleware('permission:informacion/redes-sociales');
    Route::delete('informacion/social/{social}', 'Information\SocialController@delete')->name('information.social.delete')->middleware('permission:informacion/redes-sociales');
    Route::put('informacion/social/{social}', 'Information\SocialController@update')->name('information.social.update')->middleware('permission:informacion/redes-sociales');

    #Players
    Route::get('players', 'Information\PlayersController@index')->name('information.players')->middleware('permission:players');
    Route::post('players', 'Information\PlayersController@create')->name('information.players.create')->middleware('permission:players');
    Route::get('json/players', 'Information\PlayersController@getPlayers')->name('information.players.json.get-players')->middleware('permission:players');
    Route::put('players/order', 'Information\PlayersController@order')->name('information.players.order')->middleware('permission:players');
    Route::get('json/players/{player}', 'Information\PlayersController@getPlayer')->name('information.players.json.get-player')->middleware('permission:players');
    Route::delete('players/{player}', 'Information\PlayersController@delete')->name('information.players.delete')->middleware('permission:players');
    Route::put('players/{player}', 'Information\PlayersController@update')->name('information.players.update')->middleware('permission:players');

    #Blog
    #Category
    Route::get('blog/categorias', 'Blog\CategoriesController@index')->name('blog.categories')->middleware('permission:blog/categorias');
    Route::post('blog/categories', 'Blog\CategoriesController@create')->name('blog.categories.create')->middleware('permission:blog/categorias');
    Route::delete('blog/categories/{category}', 'Blog\CategoriesController@delete')->name('blog.categories.delete')->middleware('permission:blog/categorias');
    Route::put('blog/categories/{category}', 'Blog\CategoriesController@update')->name('blog.categories.update')->middleware('permission:blog/categorias');
    Route::get('blog/json/categories', 'Blog\CategoriesController@getCategories')->name('blog.categories.get-categories')->middleware('permission:blog/categorias');
    Route::get('blog/json/categories/autocomplete', 'Blog\CategoriesController@autocomplete')->name('blog.categories.get-category-autocomplete');
    Route::get('blog/json/categories/{category}', 'Blog\CategoriesController@getCategory')->name('blog.categories.get-category')->middleware('permission:blog/categorias');

    #Posts
    Route::get('blog/posts', 'Blog\PostsController@index')->name('blog.posts')->middleware('permission:blog/posts');
    Route::post('blog/posts', 'Blog\PostsController@create')->name('blog.posts.create')->middleware('permission:blog/posts');
    Route::get('blog/json/posts', 'Blog\PostsController@getPosts')->name('blog.posts.get-posts')->middleware('permission:blog/posts');
    Route::get('blog/json/posts/{post}', 'Blog\PostsController@getPost')->name('blog.posts.json.get-post')->middleware('permission:blog/posts');
    Route::delete('blog/posts/{post}', 'Blog\PostsController@delete')->name('blog.posts.delete')->middleware('permission:blog/posts');
    Route::put('blog/posts/{post}', 'Blog\PostsController@update')->name('blog.posts.update')->middleware('permission:blog/posts');
    Route::post('blog/posts/image', 'Blog\PostsController@storeImage')->name('blog.posts.store-image')->middleware('permission:blog/posts');

    #Departments
    Route::get('especialidades', 'DepartmentsController@index')->name('departments')->middleware('permission:especialidades');
    Route::get('json/departments', 'DepartmentsController@getDepartments')->name('departments.get-departments')->middleware('permission:especialidades');
    Route::put('departments/{department}', 'DepartmentsController@update')->name('departments.update')->middleware('permission:especialidades');

    #Customers
    Route::get('clientes', 'CustomerController@index')->name('clientes')->middleware('permission:clientes');
    Route::post('customers', 'CustomerController@create')->name('customers.create')->middleware('permission:clientes');
    Route::put('customers/order', 'CustomerController@order')->name('customers.order')->middleware('permission:clientes');
    Route::put('customers/{customer}', 'CustomerController@update')->name('customers.update')->middleware('permission:clientes');
    Route::get('json/customers', 'CustomerController@getCustomers')->name('customers.json.get-customers')->middleware('permission:clientes');
    Route::get('json/customers/{customer}', 'CustomerController@getCustomer')->name('customers.json.get-customer')->middleware('permission:clientes');
    Route::delete('customers/{customer}', 'CustomerController@delete')->name('customers.delete')->middleware('permission:clientes');

    #Awards
    Route::get('premios', 'AwardsController@index')->name('awards')->middleware('permission:premios');
    Route::post('awards', 'AwardsController@create')->name('awards.create')->middleware('permission:premios');
    Route::put('awards/order', 'AwardsController@order')->name('awards.order')->middleware('permission:premios');
    Route::post('awards/image', 'AwardsController@storeImage')->name('awards.store-image')->middleware('permission:premios');
    Route::put('awards/{award}', 'AwardsController@update')->name('awards.update')->middleware('permission:premios');
    Route::get('json/awards', 'AwardsController@getAwards')->name('awards.json.get-awards')->middleware('permission:premios');
    Route::get('json/awards/{award}', 'AwardsController@getAward')->name('awards.json.get-award')->middleware('permission:premios');
    Route::delete('awards/{award}', 'AwardsController@delete')->name('awards.delete')->middleware('permission:premios');

    #Testimonials
    Route::get('testimonios', 'TestimonialsController@index')->name('clientes')->middleware('permission:testimonios');
    Route::post('testimonials', 'TestimonialsController@create')->name('testimonials.create')->middleware('permission:testimonios');
    Route::put('testimonials/order', 'TestimonialsController@order')->name('testimonials.order')->middleware('permission:testimonios');
    Route::put('testimonials/{testimonial}', 'TestimonialsController@update')->name('testimonials.update')->middleware('permission:testimonios');
    Route::get('json/testimonials', 'TestimonialsController@getTestimonials')->name('testimonials.json.get-testimonials')->middleware('permission:testimonios');
    Route::get('json/testimonials/{testimonial}', 'TestimonialsController@getTestimonial')->name('testimonials.json.get-testimonial')->middleware('permission:testimonios');
    Route::delete('testimonials/{testimonial}', 'TestimonialsController@delete')->name('testimonials.delete')->middleware('permission:testimonios');

    #Applicants
    Route::get('postulantes', 'ApplicantsController@index')->name('applicants')->middleware('permission:postulantes');
    Route::get('json/applicants', 'ApplicantsController@getApplicants')->name('applicants.get-applicants')->middleware('permission:postulantes');
    Route::get('json/applicants/{applicant}', 'ApplicantsController@getApplicant')->name('applicants.json.get-applicant')->middleware('permission:postulantes');
    Route::delete('applicants/{applicant}', 'ApplicantsController@delete')->name('applicants.delete')->middleware('permission:postulantes');
    //Route::put('applicants/{applicant}', 'ApplicantsController@update')->name('applicants.update')->middleware('permission:postulantes');
    Route::delete('applicants/{applicant}', 'ApplicantsController@delete')->name('applicants.delete')->middleware('permission:postulantes');

    Route::put('applicants', 'ApplicantsController@update')->name('applicants.update')->middleware('permission:postulantes');
    Route::get('applicants/json/contact-email-destination', 'ApplicantsController@getEmailDestination')->name('applicants.json.contact-email-destination')->middleware('permission:postulantes');

    #SuccessStories
    Route::get('casos-de-exito', 'SuccessStoriesController@index')->name('success-stories')->middleware('permission:casos-de-exito');
    Route::post('success-stories ', 'SuccessStoriesController@create')->name('success-stories.create')->middleware('permission:casos-de-exito');
    Route::get('json/success-stories ', 'SuccessStoriesController@getSuccessStories')->name('success-stories.json.get-success-stories')->middleware('permission:casos-de-exito');
    Route::put('success-stories/order', 'SuccessStoriesController@order')->name('success-stories.order')->middleware('permission:casos-de-exito');
    Route::get('json/success-stories/{story}', 'SuccessStoriesController@getSuccessStory')->name('success-stories.json.get-success-story')->middleware('permission:casos-de-exito');
    Route::delete('success-stories/{story}', 'SuccessStoriesController@delete')->name('success-stories.delete')->middleware('permission:casos-de-exito');
    Route::put('success-stories/{story}', 'SuccessStoriesController@update')->name('success-stories.update')->middleware('permission:casos-de-exito');

    #SuccessStories
    Route::get('solucion-de-problemas', 'TroubleshootingController@index')->name('troubleshooting')->middleware('permission:solucion-de-problemas');
    Route::post('troubleshooting', 'TroubleshootingController@create')->name('troubleshooting.create')->middleware('permission:solucion-de-problemas');
    Route::get('json/troubleshooting ', 'TroubleshootingController@getSuccessStories')->name('troubleshooting.json.get-troubleshooting')->middleware('permission:solucion-de-problemas');
    Route::put('troubleshooting/order', 'TroubleshootingController@order')->name('troubleshooting.order')->middleware('permission:solucion-de-problemas');
    Route::get('json/troubleshooting/{solution}', 'TroubleshootingController@getSuccessStory')->name('troubleshooting.json.get-troubleshooting')->middleware('permission:solucion-de-problemas');
    Route::delete('troubleshooting/{solution}', 'TroubleshootingController@delete')->name('troubleshooting.delete')->middleware('permission:solucion-de-problemas');
    Route::put('troubleshooting/{solution}', 'TroubleshootingController@update')->name('troubleshooting.update')->middleware('permission:solucion-de-problemas');


    #BusinessLineLogo
    Route::get('logos-linea-de-negocio', 'BusinessLineLogoController@index')->name('business-line-logo')->middleware('permission:logos-linea-de-negocio');
    Route::post('business-line-logo', 'BusinessLineLogoController@create')->name('business-line-logo.create')->middleware('permission:logos-linea-de-negocio');
    Route::get('json/business-line-logo ', 'BusinessLineLogoController@getBusinessLineLogos')->name('business-line-logo.json.get-business-line-logos')->middleware('permission:logos-linea-de-negocio');
    Route::put('business-line-logo/order', 'BusinessLineLogoController@order')->name('business-line-logo.order')->middleware('permission:logos-linea-de-negocio');
    Route::get('json/business-line-logo/{solution}', 'BusinessLineLogoController@getBusinessLineLogo')->name('business-line-logo.json.get-business-line-logo')->middleware('permission:logos-linea-de-negocio');
    Route::delete('business-line-logo/{solution}', 'BusinessLineLogoController@delete')->name('business-line-logo.delete')->middleware('permission:logos-linea-de-negocio');
    Route::put('business-line-logo/{solution}', 'BusinessLineLogoController@update')->name('business-line-logo.update')->middleware('permission:logos-linea-de-negocio');

    #WhyUs
    Route::get('por-que-nosotros', 'WhyUsController@index')->name('why-us')->middleware('permission:por-que-nosotros');
    Route::post('why-us', 'WhyUsController@create')->name('why-us.create')->middleware('permission:por-que-nosotros');
    Route::get('json/why-us ', 'WhyUsController@getAllWhyUs')->name('why-us.json.get-all-why-us')->middleware('permission:por-que-nosotros');
    Route::put('why-us/order', 'WhyUsController@order')->name('why-us.order')->middleware('permission:por-que-nosotros');
    Route::get('json/why-us/{solution}', 'WhyUsController@getWhyUs')->name('why-us.json.get-why-us')->middleware('permission:por-que-nosotros');
    Route::delete('why-us/{solution}', 'WhyUsController@delete')->name('why-us.delete')->middleware('permission:por-que-nosotros');
    Route::put('why-us/{solution}', 'WhyUsController@update')->name('why-us.update')->middleware('permission:por-que-nosotros');
        

    #Cooltura Play
    //Galería
    Route::get('cooltura-play/galeria', 'Cooltura\GalleryController@index')->name('cooltura-play.galery')->middleware('permission:cooltura-play/galeria');
    Route::post('cooltura-play/gallery', 'Cooltura\GalleryController@create')->name('cooltura-play.galery.create')->middleware('permission:cooltura-play/galeria');
    Route::get('cooltura-play/json/gallery', 'Cooltura\GalleryController@getItems')->name('cooltura-play.galery.json.get-items')->middleware('permission:cooltura-play/galeria');
    Route::put('cooltura-play/gallery/order', 'Cooltura\GalleryController@order')->name('cooltura-play.galery.order')->middleware('permission:cooltura-play/galeria');
    Route::get('cooltura-play/json/gallery/{item}', 'Cooltura\GalleryController@getItem')->name('cooltura-play.galery.json.get-item')->middleware('permission:cooltura-play/galeria');
    Route::delete('cooltura-play/gallery/{item}', 'Cooltura\GalleryController@delete')->name('cooltura-play.galery.delete')->middleware('permission:cooltura-play/galeria');
    Route::put('cooltura-play/gallery/{item}', 'Cooltura\GalleryController@update')->name('cooltura-play.galery.update')->middleware('permission:cooltura-play/galeria');

    Route::get('cooltura-play/adn', 'Cooltura\ADNController@index')->name('cooltura-play.adn')->middleware('permission:cooltura-play/adn');
    Route::post('cooltura-play/adn', 'Cooltura\ADNController@create')->name('cooltura-play.adn.create')->middleware('permission:cooltura-play/adn');
    Route::get('cooltura-play/json/adn', 'Cooltura\ADNController@getItems')->name('cooltura-play.adn.json.get-items')->middleware('permission:cooltura-play/adn');
    Route::put('cooltura-play/adn/order', 'Cooltura\ADNController@order')->name('cooltura-play.adn.order')->middleware('permission:cooltura-play/adn');
    Route::get('cooltura-play/json/adn/{item}', 'Cooltura\ADNController@getItem')->name('cooltura-play.adn.json.get-item')->middleware('permission:cooltura-play/adn');
    Route::delete('cooltura-play/adn/{item}', 'Cooltura\ADNController@delete')->name('cooltura-play.adn.delete')->middleware('permission:cooltura-play/adn');
    Route::put('cooltura-play/adn/{item}', 'Cooltura\ADNController@update')->name('cooltura-play.adn.update')->middleware('permission:cooltura-play/adn');

    Route::get('chatbot-conversaciones', 'ChatbotMessagesController@index')->name('chatbot-messages.index');
    Route::get('chatbot-messages/json/get-all', 'ChatbotMessagesController@getAll')->name('chatbot-messages.get-all');
    Route::get('chatbot-messages/json/get-by', 'ChatbotMessagesController@getBy')->name('chatbot-messages.get-by');

    #File
    Route::get('files/{folder}/{subfolder}/{file}','AdminController@getFile')->name('get-file');
    Route::get('json/select/roles', 'AdminController@getRoles')->name('json.get-roles');
    Route::get('json/select/categories', 'AdminController@getCategories')->name('json.get-categories');
    Route::get('json/select/departments', 'AdminController@getDepartments')->name('json.get-departments');
    Route::get('json/select/departments-no-main', 'AdminController@getDepartmentsNoMain')->name('json.get-departments');

    #HiPlay
    Route::get('hiplay', 'HiPlayController@index')->name('hiplay.index')->middleware('permission:hiplay');
    Route::post('podcast', 'HiPlayController@createPodcast')->name('hiplay.create-podcast')->middleware('permission:hiplay');
    Route::get('json/podcasts', 'HiPlayController@getPodcasts')->name('hiplay.get-podcasts')->middleware('permission:hiplay');
    Route::get('json/podcast/{podcast}', 'HiPlayController@getPodcast')->name('hiplay.json.get-podcast')->middleware('permission:hiplay');
    Route::delete('podcast/{podcast}', 'HiPlayController@delete')->name('hiplay.delete-podcast')->middleware('permission:hiplay');
    Route::post('podcast/{podcast}', 'HiPlayController@update')->name('hiplay.update-podcast')->middleware('permission:hiplay');
});

/*Route::get('mail', function () {
    //$lead->load('leadMediumRel')->load('leadSourceRel')->load('departmentRel')
    $lead = App\Lead::with('leadMediumRel')->with('leadSourceRel')->with('departmentRel')->find(10);
    //dd($lead);
    if($lead->oferta->comercio->landing && $lead->oferta->comercio->correo_lead){
        dd($lead->oferta->comercio->correo_lead);
    }
    else{
        dd("No");
    }
    return view('emails.lead',compact('lead'));
    //return (new App\Notifications\LeadNotificacion($lead))->toMail($lead);
});*/
