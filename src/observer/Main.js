import Subject from "./Subject.js";
import Observer from "./Observer.js";

class Main {
  static initialize() {
    const subject = new Subject();
    const observer = new Observer(subject);

    subject.attach(observer);
  }
}

Main.initialize();
