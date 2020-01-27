import { ContextMenuOptions } from './ContextMenuOptions';
import { Map } from '../Map/Map';
import { LngLat } from '../LngLat';

type ContextMenuEventNames =
  'open' |
  'close';

export class ContextMenu {
  constructor(
    opt: ContextMenuOptions
  )


  /**
   *
   *
   * @param {String} text 菜单显示内容
   * @param {Function} fn 该菜单下需进行的操作
   * @param {Number} num 当前菜单项在右键菜单中的排序位置，以0开始
   * @memberof ContextMenu
   */
  addItem(text: String, fn: Function, num: Number)


  /**
   * 删除一个菜单项
   *
   * @param {String} text  菜单显示内容
   * @param {Function} fn 该菜单下需进行的操作
   * @memberof ContextMenu
   */
  removeItem(text: String, fn: Function)


  /**
   * 在地图的指定位置打开右键菜单。
   *
   * @param {Map} map
   * @param {LngLat} position
   * @memberof ContextMenu
   */
  open(map: Map, position: LngLat)


  /**
   * 关闭右键菜单
   *
   * @memberof ContextMenu
   */
  close()

  on(event: ContextMenuEventNames, cb: Function)
}