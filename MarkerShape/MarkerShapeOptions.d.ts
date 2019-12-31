 
 /**
  *
  *
  * @export
  * @class MarkerShapeOptions
  */
 export class MarkerShapeOptions{
   
  /**
   *Creates an instance of MarkerShapeOptions.
   * @param {Array<Number>} coords 可点击区域组成元素数组，存放图形的像素坐标等信息，该数组元素由type决定： circle:coords格式为 [x1, y1, r]，x1，y1为圆心像素坐标，r为圆半径poly: coords格式为 [x1, y1, x2, y2 … xn, yn]，各x，y表示多边形边界像素坐标rect: coords格式为 [x1, y1, x2, y2]，x1，y1为矩形左上角像素坐标，x2，y2为矩形右下角像素坐标Markshape的像素坐标是指相对于marker的左上角的像素坐标偏移量
   * @param {String} type可点击区域类型，可选值：- circle:圆形- poly:多边形- rect:矩形
   * @memberof MarkerShapeOptions
   */
  constructor(
    coords:Array<Number>,
    type:String
   )
 }