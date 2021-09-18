<?php

namespace App\Http\Controllers;

use App\user;
use Illiminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;


class UserController extends Controller
{
    public function register(Request $request)
    {
        $user = User::where('email', $request['email'])->first();

        if ($user) {
            $response['status'] = 0;
            $response['message'] = 'Email Already exists';
            $response['code'] = 409;
        } else {
            $user = User::create([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'email' => $request->email,
                'password' => bcrypt($request->password),
                'role' => $request->role



            ]);
            $response['status'] = 1;
            $response['message'] = 'user Registred Successfully';
            $response['code'] = 200;
        }


        return response()->json($response);
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        try {
            if (!JWTAuth::attempt($credentials)) {
                $response['status'] = 0;
                $response['code'] = 401;
                $response['data'] = null;
                $response['message'] = 'email or password is incorrect';
                return response()->json($response);
            }
        } catch (JWTException $e) {
            $response['data'] = null;
            $response['code'] = 500;
            $response['message'] = 'could not create token';
            return response()->json($response);
        }
        $user = auth()->user();
        $data['token'] = auth()->claims([
            'user_id' => $user->id,
            'email' => $user->email
        ])->attempt($credentials);

        $response['data'] = $data;
        $response['status'] = 1;
        $response['code'] = 200;
        $response['message'] = 'login successfully';
        return response()->json($response);
    }
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
        $user->first_name = $request->first_name;
        $user->last_name = $request->last_name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);

        $user->save();
        $response['message'] = 'Updated with success';
        $response['code'] = 200;
        $response['user'] = $user;

        return response()->json($response);
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

    public function nbU()
    {
        $count =  User::all()->count();
        return response()->json($count);
    }
}
