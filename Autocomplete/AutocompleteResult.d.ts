import { Tip } from "./Tip";

export class AutocompleteResult{

    /**
     *Creates an instance of AutocompleteResult.
     * @param {String} info 查询状态说明
     * @param {Number} count 输入提示条数
     * @param {Array<Tip>} tips 输入提示列表
     * @memberof AutocompleteResult
     */
    constructor(
        info:String,
        count:Number,
        tips:Array<Tip>
    )
}