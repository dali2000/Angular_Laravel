<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function getUser()
    {
        return response()->json(User::all(), 200);
    }
    public function getUserByid($id)
    {
        $user = User::find($id);
        if (is_null($user)) {
            return response()->json(['message' => 'User not found'], 404);
        }
        return response()->json($user::find($id), 200);
    }
    public function addUser(Request $request)
    {
        $user = User::create($request->all());
        return response($user, 201);
    }
    public function updateUser(Request $request, $id)
    {
        $user = User::find($id);
        if (is_null($user)) {
            return response()->json(['message' => 'User not found'], 404);
        }
        $user->update($request->all());
        return response($user, 200);
    }
    public function deleteUser(Request $request, $id)
    {
        $user = User::find($id);
        if (is_null($user)) {
            return response()->json(['message' => 'User not found'], 404);
        }
        $user->delete();
        return response()->json(null, 204);
    }





    public function index(){
        return User::all();
    }
    public function user(Request $request){
        return $request->user();
    }




  



  
}
