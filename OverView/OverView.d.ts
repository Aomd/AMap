import { OverViewOptions } from './OverViewOptions'
import { TileLayer } from '../TileLayer/TileLayer';

type OverViewEventNames =
    'show' |
    'hide' |
    'open' |
    'close';

/**
 * 地图鹰眼插件
 *
 * @export
 * @class OverView
 */
export class OverView {
    constructor(
        opt: OverViewOptions | Object
    )


    /**
     * 显示鹰眼窗体
     *
     * @memberof OverView
     */
    show()





    /**
     * 隐藏鹰眼窗体
     *
     * @memberof OverView
     */
    hide()





    /**
     * 展开鹰眼窗口
     *
     * @memberof OverView
     */
    open()





    /**
     *
     *
     * @memberof OverView
     */
    close()





    /**
     * 设置鹰眼中需显示的切片图层
     *
     * @param {*} TileLayer
     * @memberof OverView
     */
    setTileLayer(TileLayer)





    /**
     * 获取窗体中显示的切片图层
     *
     * @memberof OverView
     */
    getTileLayer(): TileLayer | Object

    on(event: OverViewEventNames, cb: Function)
}