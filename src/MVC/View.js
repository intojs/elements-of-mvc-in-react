export default class View {
  #counterEl;

  #incrementBtnEl;

  constructor(incrementBtnClick) {
    this.#counterEl = document.getElementById("counter");

    this.#incrementBtnEl = document.getElementById("increment-button");
    this.#incrementBtnEl.addEventListener("click", incrementBtnClick);
  }

  update(counter) {
    this.#counterEl.innerHTML = `<div>${counter}</div>`;
  }
}
