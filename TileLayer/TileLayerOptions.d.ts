import {Map} from '../Map/Map'


/**
 * 切片图层类，该类为基础类，不指定getTileUrl时为高德默认底图。
 *
 * @export
 * @class TileLayerOptions
 */
export class TileLayerOptions{


  /**
   *Creates an instance of TileLayerOptions.
   * @param {Map} map 要显示该图层的地图对象
   * @param {Number} tileSize 切片大小，取值：
   * 256，表示切片大小为256*256，
   * 128，表示切片大小为128*128，
   * 64，表示切片大小为64*64。默认值为256
   * @param {String} tileUrl 切片取图地址(自1.3版本起，该属性与getTileUrl属性合并)
   * 如：'https://abc.amap.com/tile?x=[x]&y=[y]&z=[z]'
   * [x]、[y]、[z]分别替代切片的xyz。
   * @param {String} errorUrl取图错误时的代替地址
   * @param {(String|Function)} getTileUrl 获取图块取图地址，该属性值为一个字符串或者一个函数
   * 字符串如：'https://abc.amap.com/tile?x=[x]&y=[y]&z=[z]'
   * 函数参数z为地图缩放级别，x,y分别为相应缩放级别下图块横向、纵向索引号，
   * 该属性可以用来改变取图地址，实现自定义栅格图。
   * @param {Number} zIndex 图层叠加的顺序值，0表示最底层。默认zIndex：1
   * @param {Number} opacity 图层的透明度，取值范围[0,1]，1代表完全不透明，0代表完全透明
   * @param {Array} zooms 支持的缩放级别范围，默认范围[3-18]，在PC上，取值范围为[3-18]；在移动设备上，取值范围为[3-19]
   * @param {Boolean} detectRetina 是否在高清屏下进行清晰度适配，默认为true。将根据移动设备屏幕设备像素比，采用相应的技术手段，保证图层在不同设备像素比下的清晰度。
   * @memberof TileLayerOptions
   */
  constructor(
    map:Map,
    tileSize:	Number,
    tileUrl	:String,
    errorUrl:	String,
    getTileUrl:	String|Function,
    zIndex:	Number,
    opacity:	Number,
    zooms	:Array<Number>,
    detectRetina:	Boolean
  )
}