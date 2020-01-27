export class ControlBarOptions{

  /**
   *Creates an instance of ControlBarOptions.
   * @param {Object} position 控制显示位置，如{top:’10px’,right:’10px’}
   * @param {Boolean} showZoomBar 是否显示缩放按钮。移动端默认为false，PC端为默认为true
   * @param {Boolean} showControlButton 是否显示倾斜、旋转按钮。移动端默认为false，PC端为默认为true
   * @memberof ControlBarOptions
   */
  constructor(
    position:Object,
    showZoomBar:Boolean,
    showControlButton:Boolean
  )
}