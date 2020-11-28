import Model from "./Model.js";
import View from "./View.js";

class Controller {
  #model;

  initialize() {
    this.#model = new Model();

    const view = new View(this.#handleIncrementBtnClick);

    this.#model.attach(view);
  }

  #handleIncrementBtnClick = () => {
    this.#model.incrementCounter();
  };
}

new Controller().initialize();
