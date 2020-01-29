export class LineSearchResult {


    /**
     *Creates an instance of LineSearchResult.
     * @param {String} info 成功状态文字描述
     * @param {Array<Object>} LineInfo 根据查询条件返回公交路线信息
     * @param {Array<Object>} keywordList 查无此公交站时，返回的建议关键字列表，可根据建议关键字查询
     * @param {Array<Object>} cityList 查该城市无此公交站时，返回的建议城市列表
     * @memberof LineSearchResult
     */
    constructor(
        info: String,


        LineInfo: Array<Object>,


        keywordList: Array<Object>,


        cityList: Array<Object>

    )
}