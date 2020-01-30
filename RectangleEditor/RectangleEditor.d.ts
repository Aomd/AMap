import { Map } from "../Map/Map";
import { Rectangle } from "../Rectangle/Rectangle";


type RectangleEditorEventNames =

    'adjust' |
    'end';
/**
 * 矩形的编辑插件
 *
 * @export
 * @class RectangleEditor
 */
export class RectangleEditor {
    constructor(
        map: Map, Rectangle: Rectangle | Object
    )

    open()

    close()

    on(event: RectangleEditorEventNames, cb: Function)
}