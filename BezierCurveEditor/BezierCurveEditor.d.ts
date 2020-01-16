import { Map } from "../Map/Map";
import { BezierCurve } from "../BezierCurve/BezierCurve";
import { BezierCurveEditorOptions } from './BezierCurveEditorOptions';

type BezierCurveEditorEventNames =
  'addnode' |
  'adjust' |
  'removenode' |
  'end';

/**
 * 贝瑟尔曲线的编辑插件，用于编辑AMap.BezierCurve对象，支持途经点控制点的调整和控制点的增加删除
 *
 * @export
 * @class BezierCurveEditor
 */
export class BezierCurveEditor {
    constructor(
        map: Map,
        curve: BezierCurve,
        ops: BezierCurveEditorOptions | Object
    )



    /**
     * 打开编辑功能。
     *  功能开启后及，曲线上显示途经点和控制点，按照上面的操作方法即可进行曲线的编辑
     *
     * @memberof BezierCurveEditor
     */
    open( )


    /**
     * 关闭编辑功能
     *
     * @memberof BezierCurveEditor
     */
    close( )


    on(event: BezierCurveEditorEventNames, cb: Function) 
}