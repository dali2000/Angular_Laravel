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
Route::put('updateEc3/{id}', 'Ec3Controller@updateEc3');


//S3
Route::post('addCdn', 'CdnController@addS3');
Route::get('getS3', 'CdnController@getS3');
Route::get('getS3ById/{id}', 'CdnController@getS3ById');
Route::put('updateS3/{id}', 'CdnController@updateS3');
//sqs
Route::post('addSqs', 'SqsController@addSqs');


//server
Route::post('addServer', 'ServerController@addServer');
Route::get('getServerById/{id}', 'ServerController@getServerById');
Route::get('getServers', 'ServerController@getServers');
Route::delete('DeleteServer/{id}', 'ServerController@DeleteServer');
