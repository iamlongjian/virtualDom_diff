import patchVnode from './patchVnode'
// 判断是否同一个虚拟节点
function checkSameVnode(a,b){
    return a.sel === b.sel && a.key === b.key
}
export default function updateChildren(parentElm,oldch,newch){
    // console.log(parentElm);
    // console.log(oldch);
    // console.log(newch);
    
    /*索引*/
    // 旧前
    let oldStartIdx = 0
    // 新前
    let newStartIdx = 0
    // 旧后
    let oldEndIdx = oldch.length - 1
    // 新后
    let newEndIdx = newch.length - 1

    /*节点*/
    // 旧前,旧后节点
    let oldStartVnode = oldch[0]
    let oldEndVnode = oldch[oldEndIdx]
    // 新前,新后节点
    let newStartVnode = newch[0]
    let newEndVnode = newch[newEndIdx]

    // while循环，当满足条件时，一直循环
    while(oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx){
        // 一共四个指针，四种判断
        if(checkSameVnode(oldStartVnode,newStartVnode)){
            // 新前与旧前
            console.log('1、新前与旧前');
            patchVnode(oldStartVnode,newStartVnode)
            // 指针后移并且赋值
            oldStartVnode = oldch[++oldStartIdx]
            newStartVnode = newch[++newStartIdx]
        }else if(checkSameVnode(oldEndVnode,newEndVnode)){
            // 新后与旧后
            console.log('2、新后与旧后');
            patchVnode(oldEndVnode,newEndVnode)
            // 指针后移并且赋值
            oldEndVnode = oldch[--oldEndIdx]
            newEndVnode = newch[--newEndIdx]
        }else if(checkSameVnode(oldStartVnode,newEndVnode)){
            // 新后与旧前
            console.log('3、新后与旧前');
            patchVnode(oldStartVnode,newEndVnode)
            // 插入节点(新后指向的节点引动到旧后 之后)
            parentElm.insertBefore(oldStartVnode.elm,oldEndVnode.elm.nextSibling);
            // 指针后移并且赋值
            oldStartVnode = oldch[++oldStartIdx]
            newEndVnode = newch[--newEndIdx]
        }else if(checkSameVnode(oldEndVnode,newStartVnode)){
            // 新前与旧后
            console.log('4、新前与旧后');
            patchVnode(oldEndVnode,newStartVnode)
            // 插入节点（新前移动到旧前节点 之前）
            parentElm.insertBefore(oldEndVnode.elm,oldStartVnode.elm);
            // 指针后移并且赋值
            oldEndVnode = oldch[--oldEndIdx]
            newStartVnode = newch[++newStartIdx]
        }
        
    }
}