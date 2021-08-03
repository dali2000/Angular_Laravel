<?php

namespace App\Http\Controllers;

use App\sqs;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SqsController extends Controller
{
    public function addSqs(Request $request)
    {
        $sqs = sqs::create($request->all());
        return response($sqs, 201);
    }
    public function getSqs()
    {
        return response()->json(sqs::all(), 200);
    }
    public function getSqsById($id)
    {
        $sqs = sqs::find($id);
        if (is_null($sqs)) {
            return response()->json(['message' => 'ec3 not found'], 404);
        }
        return response()->json($sqs::find($id), 200);
    }
    public function updateSqs(Request $request, $id)
    {
        $sqs = sqs::find($id);
        if (is_null($sqs)) {
            return response()->json(['message' => 's3 not found'], 404);
        }
        $sqs->update($request->all());
        return response($sqs, 200);
    }
    public function getSqsByIdServer($id)
    {
        $sqs = DB::table('sqs')->where('idServer', $id)->get();
        if (is_null($sqs)) {
            return response()->json(['message' => 'server not found'], 404);
        }
        return response()->json($sqs, 200);
    }
}
