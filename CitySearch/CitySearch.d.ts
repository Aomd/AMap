import { CitySearchResult } from './CitySearchResult';

type CitySearchEventNames =
  'complete' |
  'error';

export class CitySearch {


  /**
   * 自动获取用户IP，回调返回当前用户所在城市
   * 当status为complete时，result为CitySearchResult；
   * 当status为error时，result为错误信息info；
   * 当status为no_data时，代表检索返回0结果
   *
   * @param {((status: String, result: Object | CitySearchResult) => void)} cbk
   * @memberof CitySearch
   */
  getLocalCity(cbk: (status: String, result: Object | CitySearchResult) => void)


  /**
   * 根据输入IP地址返回对应城市信息
   * status同上
   *
   * @param {String} ip
   * @param {((status: String, result: Object | CitySearchResult) => void)} callback
   * @memberof CitySearch
   */
  getCityByIp(ip: String, callback: (status: String, result: Object | CitySearchResult) => void)

  on(event: CitySearchEventNames, cb: Function)
}