import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class Backtracking2Component extends Component {
  @tracked count = 0;

  @action
  incrementCount() {
    this.count++;
  }
}
