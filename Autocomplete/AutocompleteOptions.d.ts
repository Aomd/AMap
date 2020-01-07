
export class AutocompleteOptions {


  /**
   *Creates an instance of AutocompleteOptions.
   * @param {String} datatype  返回的数据类型可选值：all-返回所有数据类型、poi-返回POI数据类型、bus-返回公交站点数据类型、busline-返回公交线路数据类型目前暂时不支持多种类型
   * @param {Boolean} citylimit 是否强制限制在设置的城市内搜索,默认值为：falsetrue：强制限制设定城市，false：不强制限制设定城市
   * @param {(String|HTMLInputElement)} input 可选参数，用来指定一个input输入框，设定之后，在input输入文字将自动生成下拉选择列表。支持传入输入框DOM对象的id值，或直接传入输入框的DOM对象。
   * @param {(String|HTMLDivElement)} output 可选参数，指定一个现有的div的id或者元素，作为展示提示结果的容器，当指定了input的时候有效，缺省的时候将自动创建一个显示结果面板
   * @param {String} [type] 输入提示时限定POI类型，多个类型用“|”分隔，POI相关类型请在网站“相关下载”处下载目前只支持Poi类型编码如“050000”默认值：所有类别
   * @param {String} [city] 输入提示时限定城市。可选值：城市名（中文或中文全拼）、citycode、adcode；默认值：“全国”
   * @param {Boolean} [outPutDirAuto] 默认为true，表示是否在input位于页面较下方的时候自动将输入面板显示在input上方以避免被遮挡
   * @memberof AutocompleteOptions
   */
  constructor(
    datatype: String,

    input: String | HTMLInputElement,

    output: String | HTMLDivElement,

    citylimit?: Boolean,

    type?: String,

    city?: String,

    outPutDirAuto?: Boolean
  )
}