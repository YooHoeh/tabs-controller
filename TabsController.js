class TabsController {
  constructor(element) {
    this.nav = element.querySelector(".tab-bar");
    this.content = element.querySelector(".tab-content");
    this.init();
    this.bindEvent();
  }
  init() {
    this.nav.children[0].classList.add("active");
    this.content.children[0].classList.add("active");
  }
  bindEvent() {
    console.log(this.nav.length);
    Array.prototype.forEach.call(this.nav, i => {
      classList.remove("active");
    });
  }
}
