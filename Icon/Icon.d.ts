import { IconOptions } from "./IconOptions";
import { Size } from "../Size";


export class Icon {



  /**
   *Creates an instance of Icon.
   * @param {(Object | IconOptions)} opt
   * @memberof Icon
   */
  constructor(opt: Object | IconOptions)



  /**
   * 获取图标图片大小
   *
   * @returns {Size}
   * @memberof IconOptions
   */
  getImageSize(): Size

  /**
   * 设置图标图片大小
   *
   * @param {Size} size
   * @memberof IconOptions
   */
  setImageSize(size: Size)
}