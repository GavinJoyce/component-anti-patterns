import Component from '@glimmer/component';

export default class ComponentLifecycleComponent extends Component {
  constructor() {
    super(...arguments);

    console.log('Parent.constructor');
  }

  willDestroy() {
    console.log('Parent.willDestroy');

    super.willDestroy(...arguments);
  }

  onDidInsertModifier(element) {
    console.log('Parent.onDidInsertModifier', element);
  }

  onWillDestroyModifier() {
    console.log('Parent.onWillDestroyModifier');
  }
}
