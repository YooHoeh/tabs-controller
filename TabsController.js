class TabsController {
  constructor(element) {
    this.ele = element;
  }
  init() {
    this.ele.querySelector(".tab-bar").array.forEach(i => {
      classList.remove("active");
    });
    this.ele.querySelector(".tab-bar").childNodes[0].classList.add("active");
  }
}
