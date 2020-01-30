import { Map } from "../Map/Map";

import { RangingToolOptions } from './RangingToolOptions'


type RangingToolEventNames =
    'addnode' |
    'removenode' |
    'end';

/**
 * 构造一个距离量测插件对象
 *
 * @export
 * @class RangingTool
 */
export class RangingTool {

    /**
     *Creates an instance of RangingTool.
     * @param {Map} map
     * @param {RangingToolOptions} opts
     * @memberof RangingTool
     */
    constructor(map: Map, opts: RangingToolOptions | Object)


    /**
     * 开启距离量测功能
     *
     * @memberof RangingTool
     */
    turnOn()

    /**
     * 关闭距离量测功能
     *
     * @memberof RangingTool
     */
    turnOff()

    on(event: RangingToolEventNames, cb: Function)

}