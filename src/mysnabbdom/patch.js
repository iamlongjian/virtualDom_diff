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