# scene-application
编程语言在场景中的应用

## 打车

* 打车时，可以打专车或快车。任何车都有车牌和名称，
* 不同车价格不同，快车每公里1元，专车每公里2元。
* 行程开始时，显示车辆信息。
* 行程结束时，显示打车金额（假定行程为5公里）

```
/**
 * 车队种类
 * 价格
 * 车队信息
 * 最终金额
 * 路程
 */

interface ITaskTaxi {
    selectDistance(len: number): string
}

class TakeTaxi implements ITaskTaxi {
    private static takeTaxi: TakeTaxi
    private kindTaxi: string[] = ['快车', '专车']
    private kindTaxied: string
    private price: number = 1
    constructor(taxi: string) {
        if (this.kindTaxi.indexOf(taxi) === -1) {
            console.log('没有此车型,默认选择为快车')
            this.kindTaxied = '快车'
        } else {
            this.kindTaxied = taxi
        }
    }
    public selectDistance(len: number): string {
        if (this.kindTaxied === '专车') {
            this.price =  2
        }
        return len * this.price + '元'
    }
    /**
     * 这里使用单例模式是因为默认一个用户只选择一次车型  
     */ 
    public static select(taxi: string): TakeTaxi {
        if (!TakeTaxi.takeTaxi) {
            TakeTaxi.takeTaxi = new TakeTaxi(taxi)
        }
        return TakeTaxi.takeTaxi
    }
}

console.log(TakeTaxi.select('车').selectDistance(5))
console.log(TakeTaxi.select('专车').selectDistance(3))
console.log(TakeTaxi.select('车').selectDistance(5))

```

## 停车厂问题

* 某停车场，分n层，每层m个车位
* 每隔车位都能监控到车辆的驶入和离开
* 车辆进入前展示每层空余车位数量
* 车辆进入时，摄像头可识别车牌号和时间
* 车辆出来时，出口显示器显示车牌号和停车时间

```
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
```