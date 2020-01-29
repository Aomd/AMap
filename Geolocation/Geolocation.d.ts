import {GeolocationOptions} from './GeolocationOptions'

type GeolocationEventNames = 'complete'|'error';

export class Geolocation{
  constructor(
    opts:GeolocationOptions|Object
  )


  /**
   * 是否支持浏览器定位，当不支持是getCurrentPosition也会使用尝试进行精确IP定位
   *
   * @returns {Boolean}
   * @memberof Geolocation
   */
  isSupported( ):Boolean


  /**
   * 获取用户当前的精确位置信息
   *
   * @param {(status,result)=>void} callback
   * @memberof Geolocation
   */
  getCurrentPosition(callback:(status,result)=>void)


  /**
   * 使用浏览器定位接口监控当前位置，移动端有效
   *
   * @returns {Number}
   * @memberof Geolocation
   */
  watchPosition( ):Number


  /**
   * 取消对当前位置的监控
   *
   * @param {Number} watchId
   * @returns {Number}
   * @memberof Geolocation
   */
  clearWatch(watchId:Number):Number


  /**
   * 进行IP城市查询
   *
   * @param {(status,result)=>void} callback
   * @memberof Geolocation
   */
  getCityInfo(callback:(status,result)=>void)

  on(event: GeolocationEventNames, cb: Function)
}