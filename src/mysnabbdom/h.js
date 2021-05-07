import vnode from './vNode'
// 手写一个低配的h函数，生成虚拟dom
// 该函数重载功能较弱
/**
 * 1. h('div',{},'文字')
 * 2. h('div',{},[])
 * 3. h('div',{},h())
 */
export default function(sel,data,c){
  if(arguments.length !== 3){
    throw Error('必须传入三个参数')
  }
  if(typeof c === 'string' || typeof c === 'number'){
    // 文字
    return vnode(sel,data,undefined,c,undefined)
  }else if(Array.isArray(c)){
    // 数组
    let children = []
    for (let i = 0; i < c.length; i++) {
      const element = c[i];
      // h函数执行的结果是对象
      if(typeof element === 'object' && Reflect.has(element,'sel')){
        children.push(element)
      }else{
        throw Error('传入的数组中有不是h函数的成员')
      }
    }
    return vnode(sel,data,children,undefined,undefined)
  }else if(typeof c === 'object' && Reflect.has(c,'sel')){
    // 对象
    return vnode(sel,data,[c],undefined,undefined)
  }else{
    throw Error('必须第三个参数类型错误')
  }
}