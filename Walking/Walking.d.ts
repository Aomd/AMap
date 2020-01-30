import { WalkingOptions } from './WalkingOptions'
import { LngLat } from '../LngLat'


type WalkingEventNames = 
'complete' |
'error' |
'searchOnAMAP';
/**
 *
 *
 * @export
 * @class Walking
 */
export class Walking {
    constructor(
        opts: WalkingOptions | Object
    )


    /**
     * 根据起点和终点坐标
     *
     * @param {LngLat} origin
     * @param {LngLat} destination
     * @param {(status: String, result: Object) => void} callback
     * @memberof Walking
     */
    search(origin: LngLat, destination: LngLat, callback: (status: String, result: Object) => void)


    /**
     * 清除搜索的结果
     *
     * @memberof Walking
     */
    clear()

    on(event: WalkingEventNames, cb: Function)
}