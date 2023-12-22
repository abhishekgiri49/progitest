<?php
namespace App\Repository;

interface VehicleInterface
{
    /**
     * Get  Vehicle by id
     *
     * @param int
     */
    public function getVehicleById($id);
    /**
     * Get all Vehicle  by it's ID
     *
     * @param int
     */

    /**
     * Get's all Vehicle.
     *
     * @return mixed
     */
    public function getAll();

    /**
     * create a Vehicle
     *
     * @return mixed
     */
    public function create(array $data);
    /**
     * Updates a Vehicle.
     *
     * @param int
     * @param array
     */

    public function update( $id,array $data);

    /**
     * Deletes a Vehicle.
     *
     * @param int
     */
    public function delete($id);
}