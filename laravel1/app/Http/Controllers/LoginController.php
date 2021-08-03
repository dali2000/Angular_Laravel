<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Cartalyst\Sentinel\Laravel\Facades\Sentinel;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        Sentinel::authenticateAndRemember($request->all());
        
        return Sentinel::check();
       
    }
}
