<?php

use App\Http\Controllers\UserController;
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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });






//user

Route::get('users', 'UserController@getUser');
Route::post('register', 'UserController@register');


//get specefique user
Route::get('user/{id}', 'UserController@getUserByid');
Route::get('nbU', 'UserController@nbU');
//add user
Route::post('addUser', 'UserController@addUser');
//Update user
Route::post('updateUser/{id}', 'UserController@updateUser');
//delete user   
Route::delete('deleteUser/{id}', 'UserController@deleteUser');





Route::get('/', 'UserController@index');

//ec3
Route::get('getEc3', 'Ec3Controller@getEc3');
Route::get('getEc3ById/{id}', 'Ec3Controller@getEc3ById');
Route::post('addEc3', 'Ec3Controller@addEc3');
Route::post('updateEc3/{id}', 'Ec3Controller@updateEc3');
Route::get('getEc3ByIdServer/{id}', 'Ec3Controller@getEc3ByIdServer');

//S3
Route::post('addCdn', 'CdnController@addS3');
Route::get('getS3', 'CdnController@getS3');
Route::get('getS3ById/{id}', 'CdnController@getS3ById');
Route::post('updateS3/{id}', 'CdnController@updateS3');
Route::get('getS3ByIdServer/{id}', 'CdnController@getCdn3ByIdServer');

//sqs
Route::post('addSqs', 'SqsController@addSqs');
Route::get('getSqs', 'SqsController@getSqs');
Route::get('getSqsById/{id}', 'SqsController@getSqsById');
Route::post('updateSqs/{id}', 'SqsController@updateSqs');
Route::get('getSqsByIdServer/{id}', 'SqsController@getSqsByIdServer');



//server
Route::post('addServer', 'ServerController@addServer');
Route::get('getServerById/{id}', 'ServerController@getServerById');
Route::get('getServers', 'ServerController@getServers');
Route::delete('DeleteServer/{id}', 'ServerController@DeleteServer');

Route::get('getServerEc2', 'ServerController@getServerEc2/{id}');
Route::get('getServerCdn', 'ServerController@getServerCdn/{id}');

Route::get('nbS','ServerController@nbS');
//auth
Route::post('postRegister','RegisterController@postRegister');
Route::post('login', 'LoginController@login');