<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
class AuthController extends Controller
{
    // public function login()
    // {
    //     $credentials = request(['email','password']);
    //     if(!$token = auth()->attempt($credentials)){
    //         return response()->json(['error'=>'email or password does\'t exist'],401);
    //     }

    //     return $this.respondWithToken($token);
    // }


    public function signup(Request $request)
    {
        $user = User::create($request->all());
        return $this->login($request);
        
    }
}
