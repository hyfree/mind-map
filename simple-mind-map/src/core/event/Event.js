import EventEmitter from 'eventemitter3'
import { CONSTANTS } from '../../constants/constant'

//  事件类
class Event extends EventEmitter {
  //  构造函数
  constructor(opt = {}) {
    super()
    this.opt = opt
    this.mindMap = opt.mindMap
    this.isLeftMousedown = false
    this.isRightMousedown = false
    this.isMiddleMousedown = false
    this.mousedownPos = {
      x: 0,
      y: 0
    }
    this.mousemovePos = {
      x: 0,
      y: 0
    }
    this.mousemoveOffset = {
      x: 0,
      y: 0
    }
    this.bindFn()
    this.bind()
  }

  //  绑定函数上下文
  bindFn() {
    this.onBodyClick = this.onBodyClick.bind(this)
    this.onDrawClick = this.onDrawClick.bind(this)
    this.onMousedown = this.onMousedown.bind(this)
    this.onMousemove = this.onMousemove.bind(this)
    this.onMouseup = this.onMouseup.bind(this)
    this.onMousewheel = this.onMousewheel.bind(this)
    this.onContextmenu = this.onContextmenu.bind(this)
    this.onSvgMousedown = this.onSvgMousedown.bind(this)
    this.onKeyup = this.onKeyup.bind(this)
    this.onMouseenter = this.onMouseenter.bind(this)
    this.onMouseleave = this.onMouseleave.bind(this)
  }

  //  绑定事件
  bind() {
    document.body.addEventListener('click', this.onBodyClick)
    this.mindMap.svg.on('click', this.onDrawClick)
    this.mindMap.el.addEventListener('mousedown', this.onMousedown)
    this.mindMap.svg.on('mousedown', this.onSvgMousedown)
    window.addEventListener('mousemove', this.onMousemove)
    window.addEventListener('mouseup', this.onMouseup)
    this.mindMap.el.addEventListener('wheel', this.onMousewheel)
    this.mindMap.svg.on('contextmenu', this.onContextmenu)
    this.mindMap.svg.on('mouseenter', this.onMouseenter)
    this.mindMap.svg.on('mouseleave', this.onMouseleave)
    window.addEventListener('keyup', this.onKeyup)
  }

  //  解绑事件
  unbind() {
    document.body.removeEventListener('click', this.onBodyClick)
    this.mindMap.svg.off('click', this.onDrawClick)
    this.mindMap.el.removeEventListener('mousedown', this.onMousedown)
    window.removeEventListener('mousemove', this.onMousemove)
    window.removeEventListener('mouseup', this.onMouseup)
    this.mindMap.el.removeEventListener('wheel', this.onMousewheel)
    this.mindMap.svg.off('contextmenu', this.onContextmenu)
    this.mindMap.svg.off('mouseenter', this.onMouseenter)
    this.mindMap.svg.off('mouseleave', this.onMouseleave)
    window.removeEventListener('keyup', this.onKeyup)
  }

  //   画布的单击事件
  onDrawClick(e) {
    this.emit('draw_click', e)
  }

  // 页面的单击事件
  onBodyClick(e) {
    this.emit('body_click', e)
  }

  //   svg画布的鼠标按下事件
  onSvgMousedown(e) {
    this.emit('svg_mousedown', e)
  }

  //  鼠标按下事件
  onMousedown(e) {
    // 鼠标左键
    if (e.which === 1) {
      this.isLeftMousedown = true
    } else if (e.which === 3) {
      this.isRightMousedown = true
    } else if (e.which === 2) {
      this.isMiddleMousedown = true
    }
    this.mousedownPos.x = e.clientX
    this.mousedownPos.y = e.clientY
    this.emit('mousedown', e, this)
  }

  //  鼠标移动事件
  onMousemove(e) {
    let { useLeftKeySelectionRightKeyDrag } = this.mindMap.opt
    this.mousemovePos.x = e.clientX
    this.mousemovePos.y = e.clientY
    this.mousemoveOffset.x = e.clientX - this.mousedownPos.x
    this.mousemoveOffset.y = e.clientY - this.mousedownPos.y
    this.emit('mousemove', e, this)
    if (
      this.isMiddleMousedown ||
      (useLeftKeySelectionRightKeyDrag
        ? this.isRightMousedown
        : this.isLeftMousedown) 		
    ) {
      e.preventDefault()
      this.emit('drag', e, this)
    }
  }

  //  鼠标松开事件
  onMouseup(e) {
    this.isLeftMousedown = false
    this.isRightMousedown = false
    this.isMiddleMousedown = false
    this.emit('mouseup', e, this)
  }

  //  鼠标滚动
  onMousewheel(e) {
    e.stopPropagation()
    e.preventDefault()
    let dir
    // 解决mac触控板双指缩放方向相反的问题
    if (e.ctrlKey) {
      if (e.deltaY > 0) dir = CONSTANTS.DIR.UP
      if (e.deltaY < 0) dir = CONSTANTS.DIR.DOWN
      if (e.deltaX > 0) dir = CONSTANTS.DIR.LEFT
      if (e.deltaX < 0) dir = CONSTANTS.DIR.RIGHT
    } else {
      if ((e.wheelDeltaY || e.detail) > 0) dir = CONSTANTS.DIR.UP
      if ((e.wheelDeltaY || e.detail) < 0) dir = CONSTANTS.DIR.DOWN
      if ((e.wheelDeltaX || e.detail) > 0) dir = CONSTANTS.DIR.LEFT
      if ((e.wheelDeltaX || e.detail) < 0) dir = CONSTANTS.DIR.RIGHT
    }
    // 判断是否是触控板
    let isTouchPad = false
    // mac、windows
    if (e.wheelDeltaY === e.deltaY * -3 || Math.abs(e.wheelDeltaY) <= 10) {
      isTouchPad = true
    }
    this.emit('mousewheel', e, dir, this, isTouchPad)
  }

  //  鼠标右键菜单事件
  onContextmenu(e) {
    e.preventDefault()
    this.emit('contextmenu', e)
  }

  //  按键松开事件
  onKeyup(e) {
    this.emit('keyup', e)
  }

  // 进入
  onMouseenter(e) {
    this.emit('svg_mouseenter', e)
  }

  // 离开
  onMouseleave(e) {
    this.emit('svg_mouseleave', e)
  }
}

export default Event
