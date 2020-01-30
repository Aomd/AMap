import {TruckDrivingOptions} from './TruckDrivingOptions'

/**
 * 货车路线规划
 *
 * @export
 * @class TruckDriving
 */
export class TruckDriving {
    constructor(
        opts:TruckDrivingOptions|Object
    )

    /**
     * 根据路径，实现货车路线规划
     *
     * @param {Array<Number>} path
     * @param {(status: String, result: Object) => void} cbk
     * @memberof TruckDriving
     */
    search(path: Array<Number>, cbk: (status: String, result: Object) => void)


    /**
     * 清除搜索结果
     *
     * @memberof TruckDriving
     */
    clear()


    /**
     *  修改车牌号
     *
     * @param {String} province
     * @param {Number} number
     * @memberof TruckDriving
     */
    setProvinceAndNumber(province:String,number:Number)
}