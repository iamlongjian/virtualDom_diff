// 真正创建节点，将vnode创建为dom,插入到pivot这个元素之前
export default (vnode,pivot)=>{ 
  let domNode = document.createElement(vnode.sel)
  // 有文本？ or 有子节点
  if(vnode.text != '' && (vnode.children === undefined || vnode.children.length === 0)){
    // 文本
    domNode.innerHTML = vnode.text
    // 将文本节点，挂载到DOM树
    pivot.parentNode.insertBefore(domNode,pivot)
    console.log(pivot)
  }else if(){
    
  }
}