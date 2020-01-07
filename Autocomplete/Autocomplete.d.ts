import { AutocompleteOptions } from './AutocompleteOptions';

import { AutocompleteResult } from './AutocompleteResult';

type AutocompleteEventNames =
    'complete' |
    'error' |
    'select' |
    'choose';

/**
 * 根据输入关键字提示匹配信息
 *
 * @export
 * @class Autocomplete
 */
export class Autocomplete {

    /**
     * 构造函数，提供输入提示功能
     *Creates an instance of Autocomplete.
     * @param {(AutocompleteOptions | Object)} opts
     * @memberof Autocomplete
     */
    constructor(
        opts: AutocompleteOptions | Object
    )


    /**
     * 根据输入关键字提示匹配信息，支持中文、拼音
     * 当status为complete时，result为AutocompleteResult；
     * 当status为error时，result为错误信息info；
     * 当status为no_data时，代表检索返回0结果
     *
     * @param {String} keyword
     * @param {Function} callback
     * @memberof Autocomplete
     */
    search(keyword: String, callback: (status: String, result: String | AutocompleteResult) => void)


    /**
     * 设置提示Poi类型，多个类型用“|”分隔，POI相关类型请在网站“相关下载”处下载
     * 目前只支持Poi类型编码如“050000”
     * 默认值：所有类别
     *
     * @param {String} type
     * @memberof Autocomplete
     */
    setType(type: String)


    /**
     * 设置城市
     *
     * @param {String} city
     * @memberof Autocomplete
     */
    setCity(city: String)


    /**
     * 设置是否强制限制城市
     *
     * @param {*} Boolean
     * @memberof Autocomplete
     */
    setCityLimit(Boolean)

    on(event: AutocompleteEventNames, cb: Function)
}