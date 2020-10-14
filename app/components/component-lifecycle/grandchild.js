import Component from '@glimmer/component';

export default class ComponentLifecycleGrandchildComponent extends Component {
  constructor() {
    super(...arguments);

    console.log('GrandChild.constructor');
  }

  willDestroy() {
    console.log('GrandChild.willDestroy');

    super.willDestroy(...arguments);
  }

  onDidInsertModifier(element) {
    console.log('GrandChild.onDidInsertModifier', element);
  }

  onWillDestroyModifier() {
    console.log('GrandChild.onWillDestroyModifier');
  }
}
