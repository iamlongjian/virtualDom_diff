import createEle from './createEle'
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
        }else{
            // 四种匹配方式 都没有命中
            console.log("四种都没有命中");
            // 寻找 keyMap 一个映射对象， 就不用每次都遍历old对象了
            if (!keyMap) {
                keyMap = {};
                // 记录oldVnode中的节点出现的key
                // 从oldStartIdx开始到oldEndIdx结束，创建keyMap
                for (let i = oldStartIdx; i <= oldEndIdx; i++) {
                const key = oldCh[i].key;
                if (key !== undefined) {
                    keyMap[key] = i;
                }
                }
            }
            console.log(keyMap);
            // 寻找当前项（newStartIdx）在keyMap中映射的序号
            const idxInOld = keyMap[newStartVnode.key];
            if (idxInOld === undefined) {
                // 如果 idxInOld 是 undefined 说明是全新的项，要插入
                // 被加入的项（就是newStartVnode这项)现不是真正的DOM节点
                parentElm.insertBefore(createElement(newStartVnode), oldStartVnode.elm);
            } else {
                // 说明不是全新的项，要移动
                const elmToMove = oldCh[idxInOld];
                patchVnode(elmToMove, newStartVnode);
                // 把这项设置为undefined，表示我已经处理完这项了
                oldCh[idxInOld] = undefined;
                // 移动，调用insertBefore也可以实现移动。
                parentElm.insertBefore(elmToMove.elm, oldStartVnode.elm);
            }

            // newStartIdx++;
            newStartVnode = newCh[++newStartIdx];
            }
        }
    }

    // 继续看看有没有剩余的，循环结束了，start还是比end小
    if(newStartIdx <= newEndIdx){
        console.log('new还有剩余节点没有处理(有新增的节点)');
        // new还有剩余节点没有处理(有新增的节点)
        const before = newch[newEndIdx+1] == null ? null : newch[newEndIdx+1].elm
        
        for (let index = newStartIdx; index <= newEndIdx; index++) {
            parentElm.insertBefore(createEle(newch[index]),before)            
        }
    }else if(oldStartIdx <= oldEndIdx){
        console.log('old还有剩余节点没有处理(有删除的节点)');
        // old还有剩余节点没有处理(有删除的节点)
        for (let index = oldStartIdx; index <= oldEndIdx; index++) {
            parentElm.removeChild(oldch[index].elm)
        }
    }
}