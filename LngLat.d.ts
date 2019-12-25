export class LngLat {


  /**
   * Creates an instance of LngLat.
   * 构造一个地理坐标对象，lng、lat分别代表经度、纬度值;
   * noAutoFix表示是否自动将经度修正到 [-180,180] 区间内，缺省为false，
   * 此时会自动修正，比如传入[190,30]，会被自动修正为[-170,30],
   * noAutoFix为true时不会自动修正，可以用来进行跨日期限的覆盖物绘制
   * @param {Number} lng
   * @param {Number} lat
   * @param {Boolean} noAutofix
   * @memberof LngLat
   */
  constructor(lng: Number, lat: Number, noAutofix: Boolean)


  /**
   * 当前经纬度坐标值经度移动w，纬度移动s，得到新的坐标。
   * 经度向右移为正值，纬度向上移为正值，单位为米。
   *
   * @param {Number} w
   * @param {Number} s
   * @returns {LngLat}
   * @memberof LngLat
   */
  offset(w: Number, s: Number): LngLat


  /**
   * 当前经纬度和传入经纬度或者经纬度数组连线之间的地面距离，单位为米
   *
   * @param {(LngLat | Array<LngLat>)} lnglat
   * @returns {Number}
   * @memberof LngLat
   */
  distance(lnglat: LngLat | Array<LngLat>): Number


  /**
   * 获取经度值。
   *
   * @returns {Number}
   * @memberof LngLat
   */
  getLng(): Number


  /**
   * 获取纬度值。
   *
   * @returns {Number}
   * @memberof LngLat
   */
  getLat(): Number


  /**
   * 判断当前坐标对象与传入坐标对象是否相等
   *
   * @param {LngLat} lnglat
   * @returns {Boolean}
   * @memberof LngLat
   */
  equals(lnglat: LngLat): Boolean



  /**
   * LngLat对象以字符串的形式返回。
   *
   * @returns {String}
   * @memberof LngLat
   */
  toString(): String
}
