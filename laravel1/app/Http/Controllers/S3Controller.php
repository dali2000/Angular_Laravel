<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\S3;
class S3Controller extends Controller
{
    public function getS3(){
        return response()->json(S3::all(),200);
    }
    public function getS3ById($id){
        $s3 = S3::find($id);
        if(is_null($s3)){
            return response()->json(['message'=>'S3 not found'],404);
        }
        return response()->json($s3::find($id),200);
    }
    public function addS3(Request $request){
        $s3 = S3::create($request->all());
        return response($s3,201);
    }
    public function updateS3(Request $request, $id){
        $s3 = S3::find($id);
        if(is_null($s3)){
            return response()->json(['message'=>'S3 not found'],404);
        }
        $s3->update($request->all());
        return response($s3,200);
    }
}
