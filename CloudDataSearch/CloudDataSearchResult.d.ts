export class CloudDataSearchResult {

  /**
   *Creates an instance of CloudDataSearchResult.
   * @param {String} info 成功状态文字描述
   * @param {Number} count 查询结果总数
   * @param {Array<Object>} datas 云数据数组，当根据数据id检索时，数据仅包含一个CloudData
   * @memberof CloudDataSearchResult
   */
  constructor(
    info: String,
    count: Number,
    datas: Array<Object>
  )
}