import { TileLayer } from "../TileLayer/TileLayer";

export class OverViewOptions {



    /**
     *Creates an instance of OverViewOptions.
     * @param {TileLayer} tileLayer 鹰眼窗体中需显示的切片图层
     * @param {Boolean} isOpen  鹰眼是否展开，默认为false
     * @param {Boolean} visible 鹰眼是否显示，默认为true
     * @memberof OverViewOptions
     */
    constructor(
        tileLayer: TileLayer,

        // 鹰眼窗体中需显示的切片图层

        isOpen: Boolean,

        // 鹰眼是否展开，默认为false

        visible: Boolean,

        // 鹰眼是否显示，默认为true
    )
}