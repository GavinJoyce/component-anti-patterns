import Component from '@glimmer/component';

export default class IncrementorComponent extends Component {
  constructor() {
    super(...arguments);

    // we shouldn't invoke actions from component lifecycle hooks
    this.args.incrementCount();
  }
}
