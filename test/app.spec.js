//use this library so we can test our code
const assert = require('assert');

// reference our app code so we can test it
// does not yet exist
const app = require('../app.js')

const smallCar = app.smallCar;
const smallTruck = app.smallTruck;

describe('Vehicle Rating Calculator', function () {
    it('calculates a rating of 10 for a vehicle with 4 cylinders and diesel fuel', function () {
        const rating = app.calculateVehicleRating(smallCar);
        assert.equal(rating, 10);
    });

    it('Calculates a rating of 5 for a truck with 4 cylinders and regular fuel', function () {
        const rating = app.calculateVehicleRating(smallTruck);
        assert.equal(rating, 4);
    })
})