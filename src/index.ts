// /**
//  * 车队种类
//  * 价格
//  * 车队信息
//  * 最终金额
//  * 路程
//  */

// interface ITaskTaxi {
//     selectDistance(len: number): string
// }

// class TakeTaxi implements ITaskTaxi {
//     private static takeTaxi: TakeTaxi
//     private kindTaxi: string[] = ['快车', '专车']
//     private kindTaxied: string
//     private price: number = 1
//     constructor(taxi: string) {
//         if (this.kindTaxi.indexOf(taxi) === -1) {
//             console.log('没有此车型,默认选择为快车')
//             this.kindTaxied = '快车'
//         } else {
//             this.kindTaxied = taxi
//         }
//     }
//     public selectDistance(len: number): string {
//         if (this.kindTaxied === '专车') {
//             this.price =  2
//         }
//         return len * this.price + '元'
//     }
//     /**
//      * 这里使用单例模式是因为默认一个用户只选择一次车型  
//      */ 
//     public static select(taxi: string): TakeTaxi {
//         if (!TakeTaxi.takeTaxi) {
//             TakeTaxi.takeTaxi = new TakeTaxi(taxi)
//         }
//         return TakeTaxi.takeTaxi
//     }
// }

// console.log(TakeTaxi.select('车').selectDistance(5))
// console.log(TakeTaxi.select('专车').selectDistance(3))
// console.log(TakeTaxi.select('车').selectDistance(5))

// 每个停车位
class Car {
    
}
// 每层楼
class Floor {
    public spacePark: Car[] = []
    constructor(len: number) {
        for (let i = 0; i < len; i ++) {
            this.spacePark.push(new Car())
        }    
    }
}
// 创造一个停车场
class ParkingLot {
    public floorArr: Floor[] = []
    constructor(num: number, len: number) {
        for (let i = 0; i < num; i ++) {
            this.floorArr.push(new Floor(len))
        }
    }
}