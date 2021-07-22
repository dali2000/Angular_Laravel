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

Route::get('users','UserController@getUser');
Route::post('register','UserController@register');


//get specefique user
Route::get('user/{id}','UserController@getUserByid');

//add user
Route::post('addUser','UserController@addUser');
//Update user
Route::post('updateUser/{id}','UserController@updateUser');
//delete user
Route::delete('deleteUser/{id}','UserController@deleteUser');





Route::get('/','UserController@index');

//ec3
Route::get('getEc3','Ec3Controller@getEc3');
Route::get('getEc3ById/{id}','Ec3Controller@getEc3ById');
Route::post('addEc3','Ec3Controller@addEc3');
Route::put('updateEc3/{id}','Ec3Controller@updateEc3');


//S3
Route::get('getS3','S3Controller@getS3');
Route::get('getS3ById/{id}','S3Controller@getS3ById');
Route::post('addS3','S3Controller@addS3');
Route::put('updateS3/{id}','S3Controller@updateS3');

