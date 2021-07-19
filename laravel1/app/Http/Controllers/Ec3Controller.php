<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Ec3;
class Ec3Controller extends Controller
{
    public function getEc3(){
        return response()->json(Ec3::all(),200);
    }
    public function getEc3ById($id){
        $ec3 = Ec3::find($id);
        if(is_null($ec3)){
            return response()->json(['message'=>'ec3 not found'],404);
        }
        return response()->json($ec3::find($id),200);
    }
    public function addEc3(Request $request){
        $ec3 = Ec3::create($request->all());
        return response($ec3,201);
    }
    public function updateEc3(Request $request, $id){
        $ec3 = Ec3::find($id);
        if(is_null($ec3)){
            return response()->json(['message'=>'ec3 not found'],404);
        }
        $ec3->update($request->all());
        return response($ec3,200);
    }
}
