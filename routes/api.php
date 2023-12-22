<?php

// use Illuminate\Http\Request;

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
Route::get('/vehicle/list', 'Frontend\VehicleController@list')->name('vehicle.list.api');
Route::post('/vehicle/create', 'Frontend\VehicleController@create')->name('vehicle.create.api');
Route::post('/vehicle/update/{id}', 'Frontend\VehicleController@update')->name('vehicle.update.api');
Route::get('/vehicle/delete/{id}', 'Frontend\VehicleController@delete')->name('vehicle.distroy.api');