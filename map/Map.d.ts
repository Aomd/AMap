

import { MapOptions } from './MapOptions'

import { LngLat } from '../LngLat'

import { Bounds } from '../Bounds'

import { Size } from '../Size'

import { Pixel } from '../Pixel'

/**
 *
 *地图对象类，封装了地图的属性设置、图层变更、事件交互等接口的类。[相关示例](https://lbs.amap.com/api/javascript-api/example/map-lifecycle/map-show)
 * @export
 * @class Map
 */
export class Map {
  /**
   *Creates an instance of Map.
   * @param {(String | HTMLDivElement)} container 构造一个地图对象，参数container中传入地图容器DIV的ID值或者DIV对象
   * @param {MapOptions} opts opts地图初始化参数对象，参数详情参看MapOptions列表。
   * @memberof Map
   */
  constructor(
    container: String | HTMLDivElement,
    opts: Object | MapOptions
  )

  /**
   *获取当前地图缩放级别,在PC上，默认取值范围为[3,18]；在移动设备上，默认取值范围为[3-19]
   *3D地图会返回浮点数，2D视图为整数。（3D地图自V1.4.0开始支持）
   * @returns {Number}
   * @memberof Map
   */
  getZoom(): Number


  /**
   *获取地图图层数组，数组为一个或多个图层
   *
   * @returns {Array<Object>}
   * @memberof Map
   */
  getLayers(): Array<Object>



  /**
   *获取地图中心点经纬度坐标值。
   *
   * @returns {LngLat}
   * @memberof Map
   */
  getCenter(): LngLat



  /**
   *
   *返回地图对象的容器
   * @returns {HTMLDivElement}
   * @memberof Map
   */
  getContainer(): HTMLDivElement



  /**
   * 获取当前地图视图范围，获取当前可视区域。
   * 3D地图下返回类型为AMap.ArrayBounds，2D地图下仍返回AMap.Bounds 。（3D自V1.4.0开始支持）
   * @returns {Bounds}
   * @memberof Map
   */
  getBounds(): Bounds



  /**
   * 获取当前地图标注的显示顺序
   *
   * @returns {Number}
   * @memberof Map
   */
  getLabelzIndex(): Number


  /**
   * 获取Map的限制区域
   *
   * @returns {Bounds}
   * @memberof Map
   */
  getLimitBounds(): Bounds



  /**
   * 获取底图语言类型
   *
   * @returns {String}
   * @memberof Map
   */
  getLang(): String


  /**
   * 获取地图容器像素大小
   *
   * @returns {Size}
   * @memberof Map
   */
  getSize(): Size


  /**
   * 获取地图顺时针旋转角度
   *
   * @returns {Number}
   * @memberof Map
   */
  getRotation(): Number


  /**
   *  获取当前地图状态信息，包括是否可鼠标拖拽移动地图、地图是否可缩放、地图是否可旋转（rotateEnable）、是否可双击放大地图、是否可以通过键盘控制地图旋转（keyboardEnable）等
   *
   * @returns {Object}
   * @memberof Map
   */
  getStatus(): Object


  /**
   * 获取地图默认鼠标指针样式
   *
   * @returns {String}
   * @memberof Map
   */
  getDefaultCursor(): String


  /**
   * 获取指定位置的地图分辨率，单位：米/像素。 参数point有指定值时，返回指定点地图分辨率，point缺省时，默认返回当前地图中心点位置的分辨率
   *
   * @param {LngLat} point
   * @returns {Number}
   * @memberof Map
   */
  getResolution(point: LngLat): Number


  /**
   *
   * 获取当前地图比例尺。表示当前屏幕距离一米代表实际距离多少米
   * @param {Number} dpi
   * @returns {Number}
   * @memberof Map
   */
  getScale(dpi: Number): Number



  /**
   * 设置地图显示的缩放级别，在PC上，参数zoom可设范围：[3,18]；在移动端：参数zoom可设范围：[3,19]
   *
   * @param {Number} level
   * @memberof Map
   */
  setZoom(level: Number)


  /**
   * 设置地图标注显示的顺序
   *
   * @param {Number} index
   * @memberof Map
   */
  setLabelzIndex(index: Number)


  /**
   * 设置地图图层数组，数组为一个或多个图层。当叠加多个图层时，普通二维地图需通过实例化一个TileLayer类实现（自v1.3 新增）
   *
   * @param {Array<Object>} layers
   * @memberof Map
   */
  setLayers(layers: Array<Object>)


  /**
   * 添加覆盖物/图层。参数为单个覆盖物/图层，或覆盖物/图层的数组。
   *
   * @param {Array<Object>} overlayers
   * @memberof Map
   */
  add(overlayers: Array<Object>)



  /**
   * 删除覆盖物/图层。参数为单个覆盖物/图层，或覆盖物/图层的数组。
   *
   * @param {Array<Object>} overlayers
   * @memberof Map
   */
  remove(overlayers: Array<Object>)


  /**
   * 返回添加的覆盖物对象，可选类型包括marker、circle、polyline、polygon； Type可缺省，缺省时返回所有覆盖物（marker、circle、polyline、polygon）。 返回结果不包含官方覆盖物等，比如定位marker，周边搜索圆等
   *
   * @param {String} type
   * @returns {Object}
   * @memberof Map
   */
  getAllOverlays(type: String): Object


  /**
   * 设置地图显示的中心点
   *
   * @param {LngLat} position
   * @memberof Map
   */
  setCenter(position: LngLat)



  /**
   * 地图缩放至指定级别并以指定点为地图显示中心点
   *
   * @param {Number} zoomLevel
   * @param {LngLat} center
   * @memberof Map
   */
  setZoomAndCenter(zoomLevel: Number, center: LngLat)



  /**
   * 按照行政区名称或adcode来设置地图显示的中心点。
   * 行政区名称支持中国、省、市、区/县名称，如遇重名的情况，会按城市编码表顺序返回第一个。adcode请在城市编码表中查询。
   * 建议不要同时使用center/setCenter()和setCity()，如一起使用程序将以setCity()作为最后结果
   *
   * @param {String} city
   * @param {Function} callback
   * @memberof Map
   */
  setCity(city: String, callback: Function)


  /**
   * 指定当前地图显示范围，参数bounds为指定的范围
   *
   * @param {Bounds} bound
   * @memberof Map
   */
  setBounds(bound: Bounds)



  /**
   * 设置Map的限制区域，设定区域限制后，传入参数为限制的Bounds。地图仅在区域内可拖拽   
   *
   * @param {Bounds} bound
   * @memberof Map
   */
  setLimitBounds(bound: Bounds)



  /**
   * 清除限制区域
   *
   * @memberof Map
   */
  clearLimitBounds()



  /**
   * 设置地图语言类型，设置后底图重新加载
   *
   * @param {String} lang
   * @returns {String}
   * @memberof Map
   */
  setLang(lang: String): String


  /**
   * 设置地图顺时针旋转角度，旋转原点为地图容器中心点，取值范围 [0-360]（自v1.3 新增）
   *
   * @param {Number} rotation
   * @returns {Number}
   * @memberof Map
   */
  setRotation(rotation: Number): Number


  /**
   * 设置当前地图显示状态，包括是否可鼠标拖拽移动地图、地图是否可缩放、地图是否可旋转（rotateEnable）、是否可双击放大地图、是否可以通过键盘控制地图旋转（keyboardEnable）等 
   *
   * @param {Object} status
   * @memberof Map
   */
  setStatus(status: Object)


  /**
   * 设置鼠标指针默认样式，参数cursor应符合CSS的cursor属性规范。可为CSS标注中的光标样式，如：setCursor(“pointer”)等；或者自定义的光标样式，如： 
   * setCursor("url('https://lbs.amap.com/webapi/static/Images//0.png'),pointer")
   * 
   *
   * @param {String} cursor
   * @memberof Map
   */
  setDefaultCursor(cursor: String)


  /**
   * 地图放大一级显示
   *
   * @memberof Map
   */
  zoomIn()


  /**
   * 地图缩小一级显示
   *
   * @memberof Map
   */
  zoomOut()


  /**
   * 地图中心点平移至指定点位置
   *
   * @param {LngLat} positon
   * @memberof Map
   */
  panTo(positon: LngLat)


  /**
   * 以像素为单位，沿x方向和y方向移动地图，x向右为正，y向下为正
   *
   * @param {Number} x
   * @param {Number} y
   * @memberof Map
   */
  panBy(x: Number, y: Number)


  /**
   * 根据地图上添加的覆盖物分布情况，自动缩放地图到合适的视野级别，参数均可缺省。
   * overlayList为覆盖物数组，缺省时为当前地图上添加的所有覆盖物图层，
   * immediately代表是否需要动画过程，avoid代表上下左右的像素避让宽度，maxZoom代表fitView之后的最大级别
   *
   * @param {(Array<Object>|null)} overlayList
   * @param {Boolean} immediately
   * @param {[Number,Number,Number,Number]} avoid
   * @param {Number} maxZoom
   * @memberof Map
   */
  setFitView(overlayList: Array<Object> | null, immediately: Boolean, avoid: [Number, Number, Number, Number], maxZoom: Number)



  /**
   * 删除地图上所有的覆盖物
   *
   * @memberof Map
   */
  clearMap()


  /**
   * 注销地图对象，并清空地图容器
   *
   * @memberof Map
   */
  destroy()


  /**
   * 插件加载方法。参数name中指定需要加载的插件类型，同时加载多个插件时，以字符串数组的形式添加。在Callback回调函数中进行地图插件的创建、插件事件的绑定等操作；插件为地图功能的扩展，按需加载；插件写作方法
   *
   * @param {(String|Array<String>)} name
   * @param {Function} callback
   * @memberof Map
   */
  plugin(name: String | Array<String>, callback: Function)



  /**
   * 添加控件。参数可以是插件列表中的任何插件对象，如：ToolBar、OverView、Scale等
   *
   * @param {Object} obj
   * @memberof Map
   */
  addControl(obj: Object)


  /**
   * 移除地图上的指定控件
   *
   * @param {Object} obj
   * @memberof Map
   */
  removeControl(obj: Object)


  /**
   *清除地图上的信息窗体。
   *
   * @memberof Map
   */
  clearInfoWindow()


  /**
   * 平面地图像素坐标转换为地图经纬度坐标
   *
   * @param {Pixel} pixel
   * @param {Number} level
   * @returns {LngLat}
   * @memberof Map
   */
  pixelToLngLat(pixel: Pixel, level: Number): LngLat


  /**
   * 地图经纬度坐标转换为平面地图像素坐标
   *
   * @param {LngLat} lngLat
   * @param {Number} level
   * @returns {Pixel}
   * @memberof Map
   */
  lnglatToPixel(lngLat: LngLat, level: Number): Pixel



  /**
   * 地图容器像素坐标转为地图经纬度坐标
   *
   * @param {Pixel} pixel
   * @memberof Map
   */
  containerToLngLat(pixel: Pixel)


  /**
   * 地图经纬度坐标转为地图容器像素坐标
   *
   * @param {LngLat} lnglat
   * @returns {Pixel}
   * @memberof Map
   */
  lngLatToContainer(lnglat: LngLat): Pixel


  /**
   * 设置地图的显示样式，目前支持两种地图样式：
   * 第一种：自定义地图样式，如"amap://styles/d6bf8c1d69cea9f5c696185ad4ac4c86"
   *  可前往地图自定义平台定制自己的个性地图样式；
   *  第二种：官方样式模版,如"amap://styles/grey"
   *
   * @param {String} style
   * @memberof Map
   */
  setMapStyle(style: String)



  /**
   * 获取地图显示样式
   *
   * @returns {String}
   * @memberof Map
   */
  getMapStyle(): String



  /**
   * 设置地图上显示的元素种类，支持bg（地图背景）、point（兴趣点）、
   * road（道路）、building（建筑物）
   *
   * @param {Array<String>} feature
   * @memberof Map
   */
  setFeatures(feature: Array<String>)




  /**
   * 获取地图显示元素种类
   *
   * @returns {Array<String>}
   * @memberof Map
   */
  getFeatures(): Array<String>


  /**
   *
   * 设置俯仰角,3D视图有效（自V1.4.0开始支持）
   * @param {*} Number
   * @memberof Map
   */
  setPitch(Number)


  /**
   * 获取俯仰角（自V1.4.0开始支持）
   *
   * @returns {Number}
   * @memberof Map
   */
  getPitch(): Number

}
