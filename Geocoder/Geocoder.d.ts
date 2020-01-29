
/**
 * 地理编码与逆地理编码服务，用于地址描述与坐标间的相互转换
 *
 * @export
 * @class Geocoder
 */

import { GeocoderOptions } from './GeocoderOptions'
import { LngLat } from '../LngLat';

type GeocoderEventNames = 'complete'|'error';

export class Geocoder {
    constructor(opts: GeocoderOptions|Object)


    /** 
     * 根据给定的地址描述进行解析，支持中文、拼音
     *
     * @param {String} address
     * @param {(status: String, result: Object) => void} callback
     * @memberof Geocoder
     */
    getLocation(address: String, callback: (status: String, result: Object) => void)


    /**
     * 地理编码时，设置地址描述所在城市
     *
     * @param {String} city
     * @memberof Geocoder
     */
    setCity(city: String)


    /**
     * 根据给定坐标进行解析
     *
     * @param {(LngLat | Array<LngLat>)} location
     * @param {(status: String, result: Object) => void} callback
     * @memberof Geocoder
     */
    getAddress(location: LngLat | Array<LngLat>, callback: (status: String, result: Object) => void)

    on(event: GeocoderEventNames, cb: Function)
}