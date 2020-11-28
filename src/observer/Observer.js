export default class Observer {
  #subject;

  constructor(subject) {
    this.#subject = subject;
  }

  update(changedSubject) {
    if (changedSubject === this.#subject) {
      console.log("Updated");
    }
  }
}
