import { BuildingsOptions } from "./BuildingsOptions";
import { Map } from "../Map/Map";

export class Buildings {
  constructor(
    opts: BuildingsOptions
  )


  /**
   * 设置所属的地图对象，参数为null时从地图中移除
   *
   * @param {(Map|null)} map
   * @memberof Buildings
   */
  setMap(map: Map | null)


  /**
   * 显示
   *
   * @memberof Buildings
   */
  show()

  /**
   * 		隐藏
   *
   * @memberof Buildings
   */
  hide()

  /**
   * 		按区域设置楼块的颜色查看示例
   *
   * @memberof Buildings
   */
  setStyle()
}