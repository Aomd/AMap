
/**
 *像素坐标，确定地图上的一个像素点。
 *
 * @export
 * @class Pixel
 */
export class Pixel {


  /**
   * Creates an instance of Pixel.
   * 构造一个像素坐标对象。
   * @param {Number} x
   * @param {Number} y
   * @memberof Pixel
   */
  constructor(x: Number, y: Number)


  /**
   * 获得X方向像素坐标
   *
   * @returns {Number}
   * @memberof Pixel
   */
  getX(): Number


  /**
   *
   * 获得Y方向像素坐标
   * @returns {Number}
   * @memberof Pixel
   */
  getY(): Number


  /**
   * 当前像素坐标与传入像素坐标是否相等
   *
   * @param {Pixel} point
   * @returns {Boolean}
   * @memberof Pixel
   */
  equals(point: Pixel): Boolean


  /**
   * 以字符串形式返回像素坐标对象
   *
   * @returns {String}
   * @memberof Pixel
   */
  toString(): String
}