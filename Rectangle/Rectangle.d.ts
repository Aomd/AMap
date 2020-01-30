import { RectangleOptions } from './RectangleOptions'
import { Bounds } from '../Bounds';
import { Map } from '../Map/Map';
import { LngLat } from '../LngLat';


type RectangleEventNames =

  'click' |
  'dblclick' |
  'rightclick' |
  'hide' |
  'show' |
  'mousedown' |
  'mouseup' |
  'mouseover' |
  'mouseout' |
  'change' |
  'touchstart' |
  'touchmove' |
  'touchend';

/**
 *
 *
 * @export
 * @class Rectangle
 */
export class Rectangle {
    constructor(
        opt: RectangleOptions | Object
    )

    /**
     * 获取矩形范围
     *
     * @returns {Bounds}
     * @memberof Rectangle
     */
    getBounds(): Bounds
    
    
    /**
     * 设置矩形的范围
     *
     * @param {Bounds} bounds
     * @memberof Rectangle
     */
    setBounds(bounds: Bounds)
    
    
    /**
     * 修改矩形属性
     *
     * @param {RectangleOptions} rectangleopt
     * @memberof Rectangle
     */
    setOptions(rectangleopt: RectangleOptions)
    
    
    /**
     * 获取矩形的属性
     *
     * @returns {Object}
     * @memberof Rectangle
     */
    getOptions(): Object
    
    
    /**
     * 地图上隐藏矩形
     *
     * @memberof Rectangle
     */
    hide()
    
    
    /**
     * 地图上显示矩形
     *
     * @memberof Rectangle
     */
    show()
    
    
    /**
     * 在指定地图上添加该矩形覆盖物
     *
     * @param {Map} map
     * @memberof Rectangle
     */
    setMap(map: Map)
    
    
    /**
     * 设置用户自定义属性
     *
     * @param {*} ext
     * @memberof Rectangle
     */
    setExtData(ext: any)
    
    /**
     * 获取用户自定义属性
     *
     * @returns {*}
     * @memberof Rectangle
     */
    getExtData(): any


    /**
     * 判断指定点坐标是否在矩形内
     *
     * @param {LngLat} point
     * @returns {Boolean}
     * @memberof Rectangle
     */
    contains(point: LngLat): Boolean

    on(event: RectangleEventNames, cb: Function)
}