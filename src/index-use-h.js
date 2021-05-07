import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
} from "snabbdom";


// 创建patch函数
const patch = init([classModule,
  propsModule,
  styleModule,
  eventListenersModule,])

  const container = document.getElementById('container')

// 创建虚拟节点
var myVnode1 = h('a',{props:{href:'http://www.baidu.com',target:'_blank'}},'longer')
var myVnode2 = h('ul',{style:{width:'180px',height:'180px',border:'1px solid blue'}},[
  h('li','哈哈'),
  h('li','哈哈1'),
  h('li','哈哈2'),
])
console.log(myVnode2)


// 虚拟节点挂载到dom树
patch(container,myVnode2)












































// const patch = init([
//   // Init patch function with chosen modules
//   classModule, // makes it easy to toggle classes
//   propsModule, // for setting properties on DOM elements
//   styleModule, // handles styling on elements with support for animations
//   eventListenersModule, // attaches event listeners
// ]);

// const container = document.getElementById("container");

// const vnode = h("div#container.two.classes", { on: { click: ()=>{} } }, [
//   h("span", { style: { fontWeight: "bold" } }, "This is bold"),
//   " and this is just normal text",
//   h("a", { props: { href: "/foo" } }, "I'll take you places!"),
// ]);
// // Patch into empty DOM element – this modifies the DOM as a side effect
// patch(container, vnode);

// const newVnode = h(
//   "div#container.two.classes",
//   { on: { click: ()=>{} } },
//   [
//     h(
//       "span",
//       { style: { fontWeight: "normal", fontStyle: "italic" } },
//       "This is now italic type"
//     ),
//     " and this is still just normal text",
//     h("a", { props: { href: "/bar" } }, "I'll take you places!"),
//   ]
// );
// // Second `patch` invocation
// patch(vnode, newVnode); // Snabbdom efficiently updates the old view to the new state