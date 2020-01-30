import { ToolbarOptions } from './ToolbarOptions'
import { Pixel } from '../Pixel';
import { LngLat } from '../LngLat';


type ToolBarEventNames = 
'show'|
'hide'|
'location'|
'zoomchanged'

/**
 * 地图操作工具条插件
 *
 * @export
 * @class ToolBar
 */
export class ToolBar {
  constructor(
    opt: ToolbarOptions | Object
  )


  /**
   * 获取工具条相对于地图容器左上角的偏移量
   *
   * @returns {Pixel}
   * @memberof ToolBar
   */
  getOffset():Pixel 


  /**
   * 设置工具条相对于地图容器左上角的偏移量
   *
   * @param {Pixel} pixel
   * @memberof ToolBar
   */
  setOffset(pixel: Pixel)


  /**
   * 隐藏缩放级别等级条
   *
   * @memberof ToolBar
   */
  hideRuler( )

  /**
   * 显示缩放级别等级条
   *
   * @memberof ToolBar
   */
  showRuler( )

  /**
   * 隐藏方向键盘
   *
   * @memberof ToolBar
   */
  hideDirection( )

  /**
   * 显示方向键盘
   *
   * @memberof ToolBar
   */
  showDirection( )


  /**
   * 隐藏定位小部件
   *
   * @memberof ToolBar
   */
  hideLocation( )


  /** 
   * 显示定位小部件
   *
   * @memberof ToolBar
   */
  showLocation( )


  /**
   * 进行位置定位
   *
   * @memberof ToolBar
   */
  doLocation( )

  /**
   *获取上次定位的结果
   *
   * @returns {LngLat}
   * @memberof ToolBar
   */
  getLocation( ):LngLat

  /**
   * 隐藏工具条
   *
   * @memberof ToolBar
   */
  hide( )

  /**
   * 显示工具条
   *
   * @memberof ToolBar
   */
  show( )


  on(event: ToolBarEventNames, cb: Function)
}