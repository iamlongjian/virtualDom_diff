import h from './mysnabbdom/h.js'
import patch from './mysnabbdom/patch.js'

// const vNode1 = h('h1',{},'你好')
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
const vNode1 = h('ul',{},[
    h('li',{key:'A'},'A'),
    h('li',{key:'B'},'B'),
    h('li',{key:'C'},'C'),
    h('li',{key:'D'},'D')
])

const container = document.getElementById('container')
patch(container,vNode1)

const vNode2 = h('ul',{},[
    h('li',{key:'A'},'A'),
    h('li',{key:'B'},'B'),
    h('li',{key:'C'},'C'),
    h('li',{key:'D'},'D'),
    h('li',{key:'E'},'E')
])
const btn = document.getElementById('btn')
btn.onclick = function(){
    patch(vNode1,vNode2)
}
