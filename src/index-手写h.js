import h from './mysnabbdom/h.js'

var vnode1 = h('div',{},[
  h('span',{},'嘻嘻'),
  h('span',{},'呵呵'),
  h('span',{},[
    h('p',{},'h1'),
    h('p',{},'h2'),
    h('p',{},'h3')
  ]),
])
var vnode2 = h('div',{},h('span',{},'嘻嘻'))
var vnode3 = h('div',{},'嘻嘻')
console.log(vnode1)
console.log(vnode2)
console.log(vnode3)