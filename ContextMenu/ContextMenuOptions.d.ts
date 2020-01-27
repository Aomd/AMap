import { LngLat } from "../LngLat";

export class ContextMenuOptions {

  /**
   *Creates an instance of ContextMenuOptions.
   * @param {LngLat} position 右键菜单显示的位置
   * @param {(String | HTMLElement)} content 右键菜单内容（针对自定义菜单时，添加菜单内容及功能。可以是HTML要素字符串或者HTML DOM对象。）
   * @param {Number} width 右键菜单宽度
   * @memberof ContextMenuOptions
   */
  constructor(
    position: LngLat,
    content: String | HTMLElement,
    width: Number
  )
}