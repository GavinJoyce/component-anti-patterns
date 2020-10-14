import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class Backtracking3Component extends Component {
  @tracked count = 10;
  @tracked timesGetterHasRan = 0;

  get countDoubled() {
    // we should never mutate state in a getter / computed property
    this.timesGetterHasRan++;

    return this.count * 2;
  }
}
