<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Cartalyst\Sentinel\Laravel\Facades\Sentinel;
class RegisterController extends Controller
{
    public function postRegister(Request $request)
    {
        $user1 = $request->all();
        $user = Sentinel::registerAndActivate($user1);
        if(is_null($user)){
            return response()->json(['message' => 'User exist'], 400);
        }
        

    }
}
