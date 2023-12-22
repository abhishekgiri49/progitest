<?php

namespace App\Services;

final class BidCalculationService
{
    const PERCENTAGE = 0.1;
    const MIN_COMMON = 10;
    const MAX_COMMON = 50;
    const MIN_LUXURY = 25;
    const MAX_LUXURY = 200;

    public function calculateBasicFee($price, $vehicleType)
    {
        $fee = $price * self::PERCENTAGE;

        if ($vehicleType === 'Common') {
            $fee = max(self::MIN_COMMON, min($fee, self::MAX_COMMON));
        } elseif ($vehicleType === 'Luxury') {
            $fee = max(self::MIN_LUXURY, min($fee, self::MAX_LUXURY));
        }

        return number_format((float) $fee, 2, '.', '');

    }
    public function calculateSpecialFee($price, $vehicleType)
    {

        if ($vehicleType === 'Common') {
            $fee = $fee = $price * 0.02;

        } elseif ($vehicleType === 'Luxury') {
            $fee = $fee = $price * 0.04;

        }

        return number_format((float) $fee, 2, '.', '');

    }
    public function calculateAssociationFee($price)
    {
        if ($price <= 500) {
            return 5;
        } elseif ($price <= 1000) {
            return 10;
        } elseif ($price <= 3000) {
            return 15;
        } else {
            return 20;
        }

    }
}
