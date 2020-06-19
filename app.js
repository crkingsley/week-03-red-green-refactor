module.exports = {
    smallCar: {
        engineSize: 4,
        fuelType: 'diesel'
    },
    smallTruck: {
        engineSize: 6,
        fuelType: 'regular'
    },

    calculateVehicleRating: function (vehicle) {
        let rating = 0;

        switch (vehicle.engineSize) {
            case 1:
            case 2:
            case 3:
            case 4:
                rating = 9
                break
            case 5:
            case 6:
                rating = 5
                break
            default:
        }

        if (vehicle.fuelType == 'diesel') {
            rating = rating + 1
        }else {
            rating = rating - 1
        }
        return rating;
    }
}