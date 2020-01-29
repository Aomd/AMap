import { Pixel } from "../Pixel";
import { MarkerOptions } from "../Marker/MarkerOptions";
import { CircleOptions } from "../Circle/CircleOptions";

export class GeolocationOptions{


  /**
   *Creates an instance of GeolocationOptions.
   * @param {Boolean} enableHighAccuracy 是否使用高精度默认值：true
   * @param {Number} timeout 超时毫秒数，若在指定时间内未定位成功，返回超时错误信息“TIMEOUT”
   * @param {Number} noIpLocate 是否禁止使用IP定位，默认值为0，可选值0-3
   * @param {Number} noGeoLocation 是否禁止使用浏览器Geolocation定位，默认值为0，可选值0-3
   * @param {Boolean} GeoLocationFirst 默认为false，设置为true的时候可以调整PC端为优先使用浏览器定位，失败后使用IP定位
   * @param {Number} maximumAge 缓存毫秒数。定位成功后，定位结果的保留时间
   * @param {Boolean} convert 是否使用坐标偏移，取值true:为高德地图坐标，取值false:为浏览器定位坐标
   * @param {Boolean} showButton 是否显示定位按钮
   * @param {(String| HTMLElement)} buttonDom 自定义定位按钮的内容。可支持HTML代码或Dom元素对象，不设置该属性则使用默认按钮样式
   * @param {String} buttonPosition 定位按钮可停靠的位置
   * @param {Pixel} buttonOffset 按钮距离停靠位置的偏移量
   * @param {Boolean} showMarker 定位成功时是否在定位位置显示一个Marker
   * @param {MarkerOptions} markerOptions 定位点Marker的配置，不设置该属性则使用默认Marker样式
   * @param {Boolean} showCircle 定位成功并且有精度信息时，是否用一个圆圈circle表示精度范围
   * @param {CircleOptions} circleOptions 定位点Circle的配置，不设置该属性则使用默认Circle样式
   * @param {Boolean} panToLocation 定位成功后，是否把定位得到的坐标设置为地图中心点坐标
   * @param {Boolean} zoomToAccuracy 定位成功且显示精度范围时，是否把地图视野调整到正好显示精度范围
   * @param {Boolean} useNative 是否使用安卓定位sdk用来进行定位，默认：false
   * @param {String} extensions JSAPI在定位成功的时候会将得到的经纬度进行逆地理编码后获取地址信息，以方便开发者的进一步使用;
   * @memberof GeolocationOptions
   */
  constructor(
    enableHighAccuracy:Boolean,
    timeout:Number,
    noIpLocate:Number,
    noGeoLocation:Number,
    GeoLocationFirst:Boolean,
    maximumAge:Number,
    convert:Boolean,
    showButton:Boolean,
    buttonDom:String| HTMLElement,
    buttonPosition:String,
    buttonOffset:Pixel,
    showMarker:Boolean,
    markerOptions:MarkerOptions,
    showCircle:Boolean,
    circleOptions:CircleOptions,
    panToLocation:Boolean,
    zoomToAccuracy:Boolean,
    useNative:Boolean,
    extensions:String
  )
}