export default class Subject {
  #observers = new Set();

  attach(observer) {
    this.#observers.add(observer);

    this.#notify();
  }

  detach(observer) {
    this.#observers.delete(observer);
  }

  #notify = () => {
    this.#observers.forEach((observer) => {
      observer.update(this);
    });
  };
}
