import { CloudDataSearchOptions } from './CloudDataSearchOptions';

import { CloudDataSearchResult } from './CloudDataSearchResult';
import { LngLat } from '../LngLat';

type CloudDataSearchEventNames = 
'complete'|
'error';

export class CloudDataSearch {
  constructor(
    tableId: String,
    Opts: CloudDataSearchOptions
  )

  searchNearBy(center: LngLat, radius: Number, callback: (status: String, result: Object | CloudDataSearchResult) => void)

  searchInPolygon(paths: Array<LngLat>, callback: (status: String, result: Object | CloudDataSearchResult) => void)

  searchByDistrict(district: String, callback: (status: String, result: Object | CloudDataSearchResult) => void)

  SearchById(id: string, callback: (status: String, result: Object | CloudDataSearchResult) => void)


  /**
   * 设置云数据检索属性
   *
   * @param {CloudDataSearchOptions} options
   * @memberof CloudDataSearch
   */
  setOptions(options:CloudDataSearchOptions)


  /**
   * 清除搜索结果
   *
   * @memberof CloudDataSearch
   */
  clear()

  on(event: CloudDataSearchEventNames, cb: Function)
}