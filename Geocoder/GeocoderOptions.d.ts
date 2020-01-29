export class GeocoderOptions{

  /**
   *Creates an instance of GeocoderOptions.
   * @param {String} city 城市，地理编码时，设置地址描述所在城市
   * @param {Number} radius 逆地理编码时，以给定坐标为中心点，单位：米
   * @param {String} lang 设置语言类型
   * @param {Boolean} batch 是否批量查询batch=true为批量查询,batch=false为单点查询，
   * @param {String} extensions 逆地理编码时，返回信息的详略
   * @memberof GeocoderOptions
   */
  constructor(
    city:String,
    radius:    Number,
    lang:String,
    batch:Boolean,
    extensions:String
  )
}