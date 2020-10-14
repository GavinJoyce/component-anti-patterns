import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class NeedlessConstructorComponent extends Component {
  @tracked count;

  // this constructor isn't needed, we can initialise the value inline (see the commented out component below)
  constructor() {
    super(...arguments);

    this.count = 999;
  }
}

// export default class NeedlessConstructorComponent extends Component {
//   @tracked count = 999;
// }

