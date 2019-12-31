import { TileLayer } from "../TileLayer";
import { Map } from "../../Map/Map";


/**
 * 灵活切片图层，继承自AMap.TileLayer，开发者可通过构造时传入给其传入createTile字段来指定每一个切片的内容(v1.4.2新增)
 *
 * @export
 * @class Flexible
 * @extends {TileLayer}
 */
export class Flexible extends TileLayer{

  /**
   *Creates an instance of Flexible.
   * @param {Function} createTile 由开发者实现，由API自动调用，xyz分别为切片横向纵向编号和层级，切片大小256。假设每次创建的贴片为A(支持img或者canvas)，当创建或者获取成功时请回调success(A)，不需要显示或者失败时请回调fail()
   * @param {Number} cacheSize 内存中缓存的切片的数量上限
   * @param {Number} opacity 图层的透明度，[0,1]
   * @param {Boolean} visible 是否显示
   * @param {Map} map 图层所属的地图对象
   * @param {Number} zIndex 层级，缺省为12
   * @param {[Number,Number]} zooms 设置可见级别，[最小级别，最大级别]
   * @memberof Flexible
   */
  constructor(
    createTile:Function,
    cacheSize:Number,
    opacity:Number,
    visible:Boolean,
    map:Map,
    zIndex:Number,
    zooms:[Number,Number]
  )
}