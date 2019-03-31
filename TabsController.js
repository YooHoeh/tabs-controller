class TabsController {
  constructor(element) {
    this.nav = element.querySelector(".tab-bar").children;
    this.content = element.querySelector(".tab-content").children;
    this.active = 1;
    this.init();
    this.bindEvents();
  }
  init() {
    this.nav[0].classList.add("active");
    this.content[0].classList.add("active");
  }
  bindEvents() {
    const forEach = (context, fn) => Array.prototype.forEach.call(context, fn);
    const indexOf = (context, item) =>
      Array.prototype.indexOf.call(context, item);

    forEach(this.nav, i => {
      i.addEventListener("click", e => {
        forEach(this.nav, i => i.classList.remove("active"));
        forEach(this.content, i => i.classList.remove("active"));
        this.active = indexOf(this.nav, e.target);
        this.nav[this.active].classList.add("active");
        this.content[this.active].classList.add("active");
        console.log(this.active);
      });
    });
  }
}
