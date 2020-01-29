import { Map } from "../Map/Map";

export class GroundImageOptions{

    /**
     *Creates an instance of GroundImageOptions.
     * @param {Map} map 要显示该groundimage的地图对象
     * @param {Boolean} clickable 图层是否可点击，若为可点击则GroundImage支持鼠标点击事件
     * @param {Number} opacity 图片透明度，取值范围[0,1]，0表示完全透明，1表示不透明
     * @memberof GroundImageOptions
     */
    constructor(
        map:Map,
        clickable:Boolean,
        opacity:	Number
    )
}