<?php

Route::group(['prefix' => 'v1', 'as' => 'api.', 'namespace' => 'Api\V1\Admin', 'middleware' => ['auth:sanctum']], function () {
    // Abilities
    Route::apiResource('abilities', 'AbilitiesController', ['only' => ['index']]);

    // Locales
    Route::get('locales/languages', 'LocalesController@languages')->name('locales.languages');
    Route::get('locales/messages', 'LocalesController@messages')->name('locales.messages');

    // Dashboard
    Route::get('dashboard', 'DashboardApiController@index')->name('dashboard');

    // Permissions
    Route::resource('permissions', 'PermissionsApiController');

    // Roles
    Route::resource('roles', 'RolesApiController');

    // Users
    Route::resource('users', 'UsersApiController');

    // Annoucements
    Route::post('annoucements/media', 'AnnoucementApiController@storeMedia')->name('annoucements.storeMedia');
    Route::resource('annoucements', 'AnnoucementApiController');

    // Policies
    Route::post('policies/media', 'PolicyApiController@storeMedia')->name('policies.storeMedia');
    Route::resource('policies', 'PolicyApiController');

    // Textbooks
    Route::post('textbooks/media', 'TextbookApiController@storeMedia')->name('textbooks.storeMedia');
    Route::resource('textbooks', 'TextbookApiController');

    // Manuals
    Route::post('manuals/media', 'ManualApiController@storeMedia')->name('manuals.storeMedia');
    Route::resource('manuals', 'ManualApiController');

    // Templates
    Route::post('templates/media', 'TemplateApiController@storeMedia')->name('templates.storeMedia');
    Route::resource('templates', 'TemplateApiController');

    // Aboutuses
    Route::post('aboutuses/media', 'AboutUsApiController@storeMedia')->name('aboutuses.storeMedia');
    Route::resource('aboutuses', 'AboutUsApiController');

    // Contactuses
    Route::resource('contactuses', 'ContactUsApiController');

    // Categories
    Route::resource('categories', 'CategoryApiController');

    // Allbooks
    Route::post('allbooks/media', 'AllbookApiController@storeMedia')->name('allbooks.storeMedia');
    Route::resource('allbooks', 'AllbookApiController');

    // Faq Categories
    Route::resource('faq-categories', 'FaqCategoryApiController');

    // Faq Questions
    Route::resource('faq-questions', 'FaqQuestionApiController');

    // Schools
    Route::resource('schools', 'SchoolApiController');

    // Iclasses
    Route::resource('iclasses', 'IclassApiController');

    // Subjects
    Route::resource('subjects', 'SubjectApiController');

    // Students
    Route::post('students/media', 'StudentApiController@storeMedia')->name('students.storeMedia');
    Route::resource('students', 'StudentApiController');

    // Exam Results
    Route::resource('exam-results', 'ExamResultApiController');

    // History Admin Teachers
    Route::post('history-admin-teachers/media', 'HistoryAdminTeachersApiController@storeMedia')->name('history-admin-teachers.storeMedia');
    Route::resource('history-admin-teachers', 'HistoryAdminTeachersApiController');

    // Content Categories
    Route::resource('content-categories', 'ContentCategoryApiController');

    // Content Tags
    Route::resource('content-tags', 'ContentTagApiController');

    // Content Pages
    Route::post('content-pages/media', 'ContentPageApiController@storeMedia')->name('content-pages.storeMedia');
    Route::resource('content-pages', 'ContentPageApiController');

    // Comments
    Route::resource('comments', 'CommentApiController');

    // Replies
    Route::resource('replies', 'ReplyApiController');
});
