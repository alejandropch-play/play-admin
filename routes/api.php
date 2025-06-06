<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/

Route::namespace('Api')->group(function() {
    Route::get('layout', 'ApiController@layout');
    Route::get('awards', 'PageController@getAwards');
    Route::get('quality-process', 'ApiController@qualityProcessData');
    Route::get('paginate/blog', 'ApiController@paginateBlog');
    Route::get('paginate/success-stories', 'ApiController@paginateSuccessStories');
    Route::get('paginate/troubleshooting', 'ApiController@getTroubleshooting');
    Route::get('business-line-logos', 'ApiController@getBusinessLineLogos');
    Route::get('why-us', 'ApiController@getWhyUs');
    Route::get('history', 'ApiController@getHistory');
    Route::prefix('lead')->group(function() {
        Route::post('save', 'LeadController@save');
        Route::post('save-landing', 'LeadController@saveLanding');
        Route::post('save-cliengo', 'LeadController@saveCliengo');
        Route::post('save-facebook-chatbot', 'LeadController@saveFacebookChatbot');
        Route::post('save-chatbot', 'LeadController@saveChatbot');
    });
    Route::prefix('applicant')->group(function() {
        Route::post('save', 'ApplicantController@save');
    });    
    Route::prefix('page')->group(function() {
        Route::get('nosotros/players', 'PageController@getPlayers');
        Route::get('nosotros/podcasts', 'PageController@getPodcasts');
        Route::get('home', 'PageController@home');
        Route::get('client-logos', 'PageController@getClientLogos');
        Route::get('testimonials', 'PageController@getTestimonials');
        Route::get('department/{department}', 'PageController@department');
        Route::get('department/{department}/success-story', 'PageController@successStory');
        Route::get('blog', 'PageController@blog');
        Route::get('blog/json', 'PageController@getPosts');
        Route::get('blog/category', 'PageController@getCategories');
        Route::get('blog/category/{category}', 'PageController@blogCategory');
        Route::get('blog/category/{category}/{post}', 'PageController@blogCategoryPost');
        Route::get('blog/{post_id}/comment', 'PageController@getBlogComments');
        Route::post('blog/{post_id}/comment', 'PageController@blogCommentPost');
        Route::get('know-us', 'PageController@knowUs');
        Route::get('privacity-policy', 'PageController@privacityPolicy');
        Route::get('work-with-us', 'PageController@workWithUs');
        Route::get('contact-us', 'PageController@contactUs');
        Route::get('complaints-book', 'PageController@complaintsBook');
    });
});


