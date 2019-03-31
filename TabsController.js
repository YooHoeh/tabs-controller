/**
 *
 *
 */
class TabsController {
  constructor(element) {
    this.nav = element.querySelector(".tab-bar").children;
    this.content = element.querySelector(".tab-content").children;
    this.active = 1; //当前激活的标签
    this.init(); //初始化
    this.bindEvents(); //绑定事件
  }
  init() {
    this.nav[0].classList.add("active");
    this.content[0].classList.add("active");
  }
  bindEvents() {
    //封装foreach方法用来遍历节点
    const forEach = (context, fn) => Array.prototype.forEach.call(context, fn);

    //封装indexOf方法用来判断当前节点在父节点的中的次序
    const indexOf = (context, item) =>
      Array.prototype.indexOf.call(context, item);

    forEach(this.nav, i => {
      i.addEventListener("click", e => {
        forEach(this.nav, i => i.classList.remove("active"));
        forEach(this.content, i => i.classList.remove("active"));
        this.active = indexOf(this.nav, e.target);
        this.nav[this.active].classList.add("active");
        this.content[this.active].classList.add("active");
      });
    });
  }
}
