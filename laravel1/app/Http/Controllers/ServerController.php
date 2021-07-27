<?php

namespace App\Http\Controllers;

use App\Server;
use Illuminate\Http\Request;

class ServerController extends Controller
{
    public function getServers()
    {
        return response()->json(Server::all(), 200);
    }
    public function addServer(Request $request)
    {
        $server = Server::create($request->all());
        return response($server, 201);
    }
    public function getServerById($id)
    {
        $Server = Server::find($id);
        if (is_null($Server)) {
            return response()->json(['message' => 'server not found'], 404);
        }
        return response()->json(Server::find($id), 200);
    }
    public function DeleteServer(Request $request, $id)
    {
        $server = Server::find($id);
        if (is_null($server)) {
            return response()->json(['message' => 'User not found'], 404);
        }
        $server->delete();
        return response()->json(null, 204);
    }
}
