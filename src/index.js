import h from './mysnabbdom/h.js'
import patch from './mysnabbdom/patch.js'

const vNode1 = h('h1',{},'你好')
// const vNode1 = h('ul',{},[
//     h('li',{},'A'),
//     h('li',{},[
//         h('ol',{},[
//             h('li',{},'1'),
//             h('li',{},'2'),
//             h('li',{},'3')
//         ])
//     ]),
//     h('li',{},'C')
// ])
const container = document.getElementById('container')
patch(container,vNode1)

const vNode2 = h('section',{},[
    h('h1',{},'hello'),
    h('h1',{},'diff')
])
const btn = document.getElementById('btn')
btn.onclick = function(){
    patch(vNode1,vNode2)
}
