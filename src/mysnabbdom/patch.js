import vNode from './vNode'
import createElement from './createEle';

export default (oldVnode,newVnode)=>{
  // 判断OldVnode是虚拟节点还是DOM节点
  if(oldVnode.sel === '' || oldVnode.sel === undefined){
    // 传入的第一个参数是DOM节点，则包装成虚拟节点
    oldVnode = vNode(oldVnode.tagName.toLowerCase(),{},[],undefined,oldVnode)
  }
  // 判断oldVnode,newVnode是不是同一个节点
  if(oldVnode.key === newVnode.key && oldVnode.sel === newVnode.sel){
      console.log('同一个节点')
      // 判断是不是内存中同一个地址
      if(oldVnode !== newVnode){
        // 判断newVnode有没有text属性
        if(newVnode.text){
          // 判断新老vNode的text是否一致
          if(newVnode.text !== oldVnode.text){
            // 则用新的text替换旧的text
            oldVnode.elm.innerText = newVnode.text
          }
        }else{
          // 意味着newVnode有children属性
          // 判断oldVnode有没有children属性
          if(Array.isArray(oldVnode.children) && oldVnode.children.length > 0){
            // 最复杂的情况
          }else{
            // 意味着oldVnode有text
            // ① 清空text
            oldVnode.elm.innerText = ''
            // ② 将newVnode 的 children挂载到旧节点上
            newVnode.children.forEach(t => {
              oldVnode.elm.appendChild(createElement(t))
            })
          }
        }
      }
  }else{
     let newVnodeElm = createElement(newVnode)
      // 挂载到DOM树
      if(newVnodeElm){
        oldVnode.elm.parentNode.insertBefore(newVnodeElm,oldVnode.elm)
      }
      // 删除老节点
      oldVnode.elm.parentNode.removeChild(oldVnode.elm)
  }
}