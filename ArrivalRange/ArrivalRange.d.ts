import { LngLat } from "../LngLat";
import { ArrivalRangeOptions } from './ArrivalRangeOptions';


/**
 * 根据输入的起点坐标和设定的时间范围
 *
 * @export
 * @class ArrivalRange
 */
export class ArrivalRange {

  /**
   * 计算某个时间段内用户通过公交出行可到达的距离范围
   *
   * @param {LngLat} origin
   * @param {Number} time
   * @param {Function} callback
   * @param {ArrivalRangeOptions} opts
   * @memberof ArrivalRange
   */
  search(origin: LngLat, time: Number, callback: (a: String) => void, opts: ArrivalRangeOptions)
}