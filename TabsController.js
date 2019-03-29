class TabsController {
  constructor(element) {
    this.ele = element;
    this.init();
  }
  init() {
    Array.prototype.forEach.call(this.ele.querySelector(".tab-bar"), i => {
      classList.remove("active");
    });
    this.ele
      .querySelector(".tab-bar")
      .childNodes[0].classList.addClassf("active");
  }
}
