declare class Car {
}
declare class Floor {
    spacePark: Car[];
    constructor(len: number);
}
declare class ParkingLot {
    floorArr: Floor[];
    constructor(num: number, len: number);
}
