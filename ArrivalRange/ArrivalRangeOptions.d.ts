import { LngLat } from '../LngLat'



/**
 * 构造函数，示例化一个到达圈函数类
 *
 * @export
 * @class ArrivalRangeOptions
 */
export class ArrivalRangeOptions {

    /**
     *Creates an instance of ArrivalRangeOptions.
     * @param {String} policy 公交出行策略,可选为：只坐地铁：SUBWAY, 只坐公交：BUS，缺省时为公交+地铁,BUS,SUBWAY
     * @param {String} resultType 结果返回样式：polygon：返回多边形边界值，coverage：判断设定的终点坐标是否在到达圈范围内
     * @param {(LngLat | Array<LngLat>)} destination 选择一个想到达的目的地坐标，最多支持5个目的地坐标
     * @memberof ArrivalRangeOptions
     */
    constructor(
        policy: String,
        resultType: String,
        destination: LngLat | Array<LngLat>,
    )
}