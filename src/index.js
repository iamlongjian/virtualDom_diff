import h from './mysnabbdom/h.js'
import patch from './mysnabbdom/patch.js'

const vNode1 = h('h1',{},'你好')
const container = document.getElementById('container')
patch(container,vNode1)
