"use strict";
class Car {
}
class Floor {
    constructor(len) {
        this.spacePark = [];
        for (let i = 0; i < len; i++) {
            this.spacePark.push(new Car());
        }
    }
}
class ParkingLot {
    constructor(num, len) {
        this.floorArr = [];
        for (let i = 0; i < num; i++) {
            this.floorArr.push(new Floor(len));
        }
    }
}
