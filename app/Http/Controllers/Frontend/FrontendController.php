<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Validator;

class FrontendController extends BaseController
{

    public function __construct()
    {

    }

    protected function validateRequest(Request $request, array $rules)
    {
        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            $this->sendResponse('Validation error', $validator->errors(), 422);
        }

        return $validator;
    }

    protected function sendResponse($message, $body, $statusCode)
    {
        $status = (($statusCode >= 200 && $statusCode < 300)) ? true : false;
        return response(['status' => $status, 'message' => $message, 'body' => $body], $statusCode);
    }

}
