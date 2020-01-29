import { OriginPath } from './OriginPath'

import { GraspedPath } from './GraspedPath'

export class GraspRoad {

    /**
     * 用于驾车轨迹的纠偏。
     *
     * @param {(OriginPath | Object)} path
     * @param {((err: Object, result: GraspedPath | Object) => void)} GraspRoadCallback
     * @memberof GraspRoad
     */
    driving(path: OriginPath | Object, GraspRoadCallback: (err: Object, result: GraspedPath | Object) => void)
}