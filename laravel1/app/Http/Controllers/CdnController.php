<?php

namespace App\Http\Controllers;

use App\cdn;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CdnController extends Controller
{
    public function getS3(){
        return response()->json(cdn::all(),200);
    }
    public function getS3ById($id){
        $s3 = cdn::find($id);
        if(is_null($s3)){
            return response()->json(['message'=>'ec3 not found'],404);
        }
        return response()->json($s3::find($id),200);
    }
    public function addS3(Request $request)
    {
        $s3 = cdn::create($request->all());
        return response($s3, 201);
    }
    public function updateS3(Request $request, $id){
        $s3 = cdn::find($id);
        if(is_null($s3)){
            return response()->json(['message'=>'s3 not found'],404);
        }
        $s3->update($request->all());
        return response($s3,200);
    }
    public function getCdn3ByIdServer($id)
    {
        $cdn = DB::table('cdns')->where('idServer',$id)->get();
        if(is_null($cdn))
        {
            return response()->json(['message' => 'server not found'], 404);
        }
            return response()->json($cdn, 200);
    }
}
