<?php

namespace App\Repository\Vehicle;

use App\Models\Vehicles;
use App\Repository\VehicleInterface;
use App\Services\BidCalculationService;

class Vehicle implements VehicleInterface
{
    protected $vehicle;
    protected $bidCalculationService;
    public function __construct(Vehicles $vehicle, BidCalculationService $bidCalculationService)
    {
        $this->bidCalculationService = $bidCalculationService;
        $this->vehicle = $vehicle;
    }
    /**
     * Gets by id vehicle.
     *
     * @return mixed
     */

    public function getVehicleById($vehicle_id)
    {
        return $this->vehicle->where("id", $vehicle_id)->first();
    }

    /**
     * Gets all vehicle.
     *
     * @return mixed
     */
    public function getAll()
    {
        return $this->vehicle->latest();
    }
/**
 * Gets all vehicle with calculation.
 *
 * @return mixed
 */
    public function getAllCalculated()
    {
        $vehicles = $this->vehicle->latest()->get();
        $calculated = [];
        foreach ($vehicles as $vehicle) {
            $basicFee = $this->bidCalculationService->calculateBasicFee($vehicle->price, $vehicle->vehicle_type);
            $specialFee = $this->bidCalculationService->calculateSpecialFee($vehicle->price, $vehicle->vehicle_type);

            $associationFee = $this->bidCalculationService->calculateAssociationFee($vehicle->price);
            $storageFee = 100; // assuming a fixed storage fee of $100

            $total = $vehicle->price + $basicFee + $specialFee + $associationFee + $storageFee;

            // Append the calculated values to the result array
            $calculated[] = [
                'id' => $vehicle->id,
                'price' => $vehicle->price,
                'vehicle_type' => $vehicle->vehicle_type,
                'basic_fee' => $basicFee,
                'special_fee' => $specialFee,
                'association_fee' => $associationFee,
                'storage_fee' => $storageFee,
                'total' => $total,
            ];
        }
        return $calculated;

    }
    /**
     * create a vehicle
     *
     * @return mixed
     */
    public function create(array $data)
    {
        return $this->vehicle->create($data);
    }
    /**
     * Updates a vehicle.
     *
     * @param int
     * @param array
     */

    public function update($id, array $data)
    {
        return $this->vehicle->find($id)->update($data);
    }

    /**
     * Deletes a vehicle.
     *
     * @param int
     */
    public function delete($id)
    {
        return $this->vehicle->find($id)->delete();
    }
}
