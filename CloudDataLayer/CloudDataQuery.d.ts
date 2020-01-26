export class CloudDataQuery {

  /**
   *Creates an instance of CloudDataQuery.
   * @param {String} keywords 搜索关键字，仅对云数据中建立文本索引的字段有效
   * @param {String} filter 云数据筛选条件，仅支持对建立了排序筛选索引的字段进行筛选
   * @memberof CloudDataQuery
   */
  constructor(
    keywords: String,
    filter: String
  )
}