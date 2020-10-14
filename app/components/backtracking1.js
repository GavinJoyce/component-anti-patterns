import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

class Person {
  @tracked name;
  @tracked age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

export default class Backtracking1Component extends Component {
  @tracked person = new Person("Sophie", 3);
}
