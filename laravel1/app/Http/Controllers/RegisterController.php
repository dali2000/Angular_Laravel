<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Cartalyst\Sentinel\Laravel\Facades\Sentinel;

use function PHPUnit\Framework\isNull;

class RegisterController extends Controller
{
    public function postRegister(Request $request)
    {
        $user1 = $request->all();
        $user = Sentinel::registerAndActivate($user1);
        

            $response['message'] = 'user Added';
            $response['code'] = 200;
            $response['user'] = $user;
   
        return response()->json($response);

    }
}
