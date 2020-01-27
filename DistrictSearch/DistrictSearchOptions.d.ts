export class DistrictSearchOptions {


  /**
   *Creates an instance of DistrictSearchOptions.
   * @param {String} level 关键字对应的行政区级别或商圈
   * @param {Boolean} showbiz 是否显示商圈，默认值true
   * @param {String} extensions 是否返回行政区边界坐标点
   * @param {Number} subdistrict 显示下级行政区级数
   * @memberof DistrictSearchOptions
   */
  constructor(
    level: String,
    showbiz: Boolean,
    extensions: String,
    subdistrict: Number
  )
}