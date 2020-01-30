import { Pixel } from "../Pixel";





type ScaleEventNames =
    'complete' |
    'error';



/**
 * 比例尺插件
 *
 * @export
 * @class Scale
 */
export class Scale{


    /**
     * 显示比例尺
     *
     * @memberof Scale
     */
    show( )
    

    /**
     * 隐藏比例尺
     *
     * @memberof Scale
     */
    hide( )
    
    
    
    /**
     * 相对于地图容器左上角的偏移量
     *
     * @returns {Pixel}
     * @memberof Scale
     */
    offset():Pixel
    
    
    
    /**
     * 控件停靠位置
     *
     * @returns {String}
     * @memberof Scale
     */
    position():String      
    
    

    on(event: ScaleEventNames, cb: Function)
}