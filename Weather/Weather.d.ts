
type WeatherEventNames =
    'complete' |
    'error'

/**
 *
 *
 * @export
 * @class Weather
 */
export class Weather {

    /**
     * 查询实时天气信息
     *
     * @param {String} district
     * @param {(obj: Object, objt: Object) => void} callback
     * @memberof Weather
     */
    getLive(district: String, callback: (obj: Object, objt: Object) => void)


    /**
     * 查询四天预报天气
     *
     * @param {String} district
     * @param {(obj: Object, objt: Object) => void} callback
     * @memberof Weather
     */
    getForecast(district: String, callback: (obj: Object, objt: Object) => void)

    on(event: WeatherEventNames, cb: Function)
}