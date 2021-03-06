<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// -------------------------------------------------------------------------
// Router LAPTOP
Route::get('v1/api/laptop', 'LaptopController@index');
Route::get('v1/api/laptop/{id}', 'LaptopController@show');
Route::get('v1/api/category', 'CategoryController@index');
