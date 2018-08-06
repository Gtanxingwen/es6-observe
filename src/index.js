import Observe from './observe.js'

let observeInst = new Observe()

// 订阅test
observeInst.subscribe('test', () => {
  console.log('test Event has subscribe!!!!!!!')
})

//异步发布test
setTimeout(_ => {
  observeInst.publish('test')
}, 4000)