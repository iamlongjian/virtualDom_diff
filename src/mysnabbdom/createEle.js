// 真正创建节点，将vnode创建为dom,只创建dom，不进行挂载。
export default function createEle(vnode){ 
  let domNode = document.createElement(vnode.sel)
  // 有文本？ or 有子节点
  if(vnode.text != '' && (vnode.children === undefined || vnode.children.length === 0)){
    // 文本
    domNode.innerText = vnode.text
  }else if(Array.isArray(vnode.children) && vnode.children.length > 0){
    // 内部是子节点，需要递归
    for (let i = 0; i < vnode.children.length; i++) {
      // 循环获取虚拟子节点
      const ch = vnode.children[i];
      // 创建出子节点的DOM，调用createEle意味着：创建出DOM了，并且它的ele属性指向了创建出的DOM，但是还没有上树。
      let chDom = createEle(ch)
      // 将子节点上树，最终返回该父级节点。
      domNode.appendChild(chDom)
    }
  }
  // 补充elm属性
  vnode.elm = domNode
  return vnode.elm




















  // 理解版
  // 首先进行元素的创建
  // let domNode = document.createElement(vnode.sel)
  // // 开始判断（有三种情况）
  // // 1. 文本
  // // 2. 多个子节点
  // // 3. h()，单个子节点
  // if(vnode.text !== '' && (vnode.children === undefined || vnode.children.length === 0)){
  //     // 文本
  //     domNode.innerText = vnode.text // 直接改写dom的文本
  // }
  // // 处理完后，需要给vnode加上elm属性
  // vnode.elm = domNode
  // // 最后将新生成的DOM返回
  // return vnode.elm
}