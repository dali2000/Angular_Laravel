<?php

namespace App\Http\Controllers;

use App\sqs;
use Illuminate\Http\Request;

class SqsController extends Controller
{
    public function addSqs(Request $request)
    {
        $sqs = sqs::create($request->all());
        return response($sqs, 201);
    }
}
