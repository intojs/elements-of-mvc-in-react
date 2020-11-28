export default class Model {
  #view;

  #counter = 0;

  attach(view) {
    this.#view = view;
    this.#notify();
  }

  incrementCounter() {
    this.#counter += 1;
    this.#notify();
  }

  #notify = () => {
    if (this.#view) {
      this.#view.update(this.#counter);
    }
  };
}
