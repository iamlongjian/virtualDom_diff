import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
} from "snabbdom";


const container = document.getElementById('container')
const btn = document.getElementById('btn')
// 创建patch函数
const patch = init([classModule,
  propsModule,
  styleModule,
  eventListenersModule,])

const vnode1 = h('ul',{},[
  h('li',{key:'A'},'A'),
  h('li',{key:'B'},'B'),
  h('li',{key:'C'},'C'),
  h('li',{key:'D'},'D')
])
console.log(vnode1)
patch(container,vnode1)

const vnode2 = h('ul',{},[
  h('li',{key:'A'},'A'),
  h('li',{key:'E'},'E'),
  h('li',{key:'B'},'B'),
  h('li',{key:'C'},'C'),
  h('li',{key:'D'},'D'),
])

btn.addEventListener('click',()=>{
  // 点击按钮，将vnode1变为vnode2
  patch(vnode1,vnode2)
})