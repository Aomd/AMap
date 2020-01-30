import { TransferOptions } from './TransferOptions';
import { LngLat } from '../LngLat';

type TransferPolicy =

    'LEAST_TIME' |



    'LEAST_FEE' |



    'LEAST_TRANSFER' |



    'LEAST_WALK' |



    'MOST_COMFORT' |



    'NO_SUBWAY';

type TransferEventNames =
    'complete' |
    'error'

/**
 * 公交换乘服务
 *
 * @export
 * @class Transfer
 */
export class Transfer {
    constructor(
        opts: TransferOptions | Object
    )


    /**
     * 根据起点和终点坐标/名称
     *
     * @param {LngLat} origin
     * @param {LngLat} destination
     * @param {(status: String, result: Object) => void} callback
     * @memberof Transfer
     */
    search(origin: LngLat, destination: LngLat, callback: (status: String, result: Object) => void)


    /**
     * 设置公交换乘策略
     *
     * @param {TransferPolicy} policy
     * @memberof Transfer
     */
    setPolicy(policy: TransferPolicy)


    /**
     * 设置公交换乘查询的城市
     *
     * @param {String} city
     * @memberof Transfer
     */
    setCity(city: String)


    /**
     * 设置公交换乘查询的城市
     *
     * @param {String} city
     * @memberof Transfer
     */
    setCityd(city: String)


    /**
     * 设置公交路径规划出发时间
     *
     * @param {String} time
     * @param {String} data
     * @memberof Transfer
     */
    leaveAt(time: String, data: String)



    /**
     * 清除结果显示
     *
     * @memberof Transfer
     */
    clear()



    /**
     * 唤起高德地图客户端公交路径规划
     *
     * @param {Object} obj
     * @memberof Transfer
     */
    searchOnAMAP(obj: Object)


    on(event: TransferEventNames, cb: Function)
}


