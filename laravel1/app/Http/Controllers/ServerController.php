<?php

namespace App\Http\Controllers;

use App\Ec3;
use App\Server;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use SebastianBergmann\Environment\Console;

class ServerController extends Controller
{
    public function getServers()
    {   
        $server = Server::all();
        $response['message'] = 'server founded';
        $response['code'] = 200;
        $response['server'] = $server;
        return response()->json($response);
        return response()->json(Server::all(), 200);
    }
    public function nbS(){
        $count =  Server::all()->count();
        return response()->json($count);
    }
    public function addServer(Request $request)
    {
        $server = Server::create($request->all());
        $response['message'] = 'server Added';
        $response['code'] = 200;
        $response['server'] = $server;
        return response()->json($response);
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

    public function getServerEc2($id){

        $ec2 = DB::table('servers')
            ->join('ec3s', $id , '=', 'ec3s.idServer')
            ->select('ec3s.*')
            ->get();
          
        if(is_null($ec2))
        {
            return response()->json(['message' => 'server not found'], 404);
        }
            return response()->json(Ec3::find($ec2.$id), 200);
    }
    

    public function getServerCdn($id){

        $cdn = DB::table('servers')
            ->join('cdns', $id, '=', 'cdns.idServer')
            ->select('cdns.*')
            ->get();
        if(is_null($cdn))
        {
            return response()->json(['message' => 'server not found'], 404);
        }
            return response()->json(Ec3::find($cdn.$id), 200);
    }
    

}
