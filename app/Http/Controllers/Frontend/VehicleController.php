<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Frontend\FrontendController;
use App\Repository\VehicleInterface;
use Illuminate\Http\Request;

class VehicleController extends FrontendController
{
    protected $vehicle;

    public function __construct(VehicleInterface $vehicle)
    {
        parent::__construct();
        $this->vehicle = $vehicle;
    }

    public function list(Request $request)
    {
        try {
            $vehicles = $this->vehicle->getAllCalculated();
            return $this->sendResponse('Item List', $vehicles, 200);
        } catch (\Exception $e) {
            return $this->sendErrorResponse($e->getMessage(), [], 500);
        }
    }

    public function view($id, Request $request)
    {
        try {
            $vehicle = $this->vehicle->getVehicleById($id);
            return $this->sendResponse('Vehicle Detail !!', $vehicle, 200);
        } catch (\Exception $e) {
            return $this->sendErrorResponse($e->getMessage(), [], 500);
        }
    }

    public function create(Request $request)
    {

        $validator = $this->validateRequest($request, [
            'price' => 'required',
            'vehicle_type' => 'required',
        ]);

        $created = $this->vehicle->create($validator->validated());
        return $this->sendResponse('Vehicle Created !!', $created, 201);

    }

    public function update($id, Request $request)
    {

        $validator = $this->validateRequest($request, [
            'price' => 'required',
            'vehicle_type' => 'required',
        ]);

        $vehicle = $this->vehicle->getVehicleById($id);
        $vehicle->update($validator->validated());

        return $this->sendResponse('Vehicle Updated !!', $vehicle, 200);

    }

    public function delete($id, Request $request)
    {
        try {
            $vehicle = $this->vehicle->getVehicleById($id);

            if ($vehicle) {
                $vehicle->delete();
                return $this->sendResponse('Vehicle Deleted !!', [], 200);
            } else {
                return $this->sendResponse('Something went wrong. Please refresh and try again !!', [], 401);
            }
        } catch (\Exception $e) {
            return $this->sendErrorResponse($e->getMessage(), [], 500);
        }
    }

}
