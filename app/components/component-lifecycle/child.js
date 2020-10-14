import Component from '@glimmer/component';

export default class ComponentLifecycleChildComponent extends Component {
  constructor() {
    super(...arguments);

    console.log('Child.constructor');
  }

  willDestroy() {
    console.log('Child.willDestroy');

    super.willDestroy(...arguments);
  }

  onDidInsertModifier(element) {
    console.log('Child.onDidInsertModifier', element);
  }

  onWillDestroyModifier() {
    console.log('Child.onWillDestroyModifier');
  }
}

