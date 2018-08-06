class Es6Observe {
  constructor() {
    this.eventObjects = {} // 保存事件对象
  }

  /**
   * 订阅事件
   * @param event
   * @param fn
   */
  subscribe(event, fn) {
    if(!this.eventObjects[event]) {
      this.eventObjects[event] = []
    }
    this.eventObjects[event].push(fn)
  }

  /**
   * 发布事件
   */
  publish() {
    const event = Array.prototype.shift.apply(arguments) // 获取到的第一个参数
    const fns = this.eventObjects[event] //该订阅对象所有方法 array
    if (event) {
      fns.forEach(item => item())
    }
  }

  /**
   * 取消订阅
   * @param event
   * @param fn
   */
  unSubscribe(event, fn) {
    const fns = this.eventObjects[event]
    if(fns) {
      this.eventObjects[event] = fns.filter( item !== fn )
    }
  }
}

export default Es6Observe