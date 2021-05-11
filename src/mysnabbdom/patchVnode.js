
import createElement from './createEle';
export default function(oldVnode,newVnode){
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
}   