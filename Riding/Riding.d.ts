
import { RidingOptions } from './RidingOptions'
import { LngLat } from '../LngLat'


type RidingEventNames = 

'complete'|
'error'

/**
 * 骑行路径规划服务
 *
 * @export
 * @class Riding
 */
export class Riding {
    constructor(
        opts: RidingOptions | Object
    )


    /**
     * 根据起点和终点坐标，实现骑行路径规划
     *
     * @param {LngLat} origin
     * @param {LngLat} destination
     * @param {(status: String, result: Object) => void} callback
     * @memberof Riding
     */
    search(origin: LngLat, destination: LngLat, callback: (status: String, result: Object) => void)


    /**
     * 清除搜索的结果
     *
     * @memberof Riding
     */
    clear()

    on(event:RidingEventNames,cb:Function)
}