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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


//Get All employees
Route::get('employees','EmployeeController@getEmployee');

//get specefique employee
Route::get('employee/{id}','EmployeeController@getEmployeeByid');

//add employee
Route::post('addEmployee','EmployeeController@addEmployee');
//Update Employee
Route::post('updateEmployee/{id}','EmployeeController@updateEmployee');
//delete Employee
Route::delete('deleteEmployee/{id}','EmployeeController@deleteEmployee');