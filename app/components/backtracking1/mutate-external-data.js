import Component from '@glimmer/component';

export default class Backtracking1MutateExternalDataComponent extends Component {
  constructor() {
    super(...arguments);

    // this will cause a "backtracking re-render" error
    // we shouldn't mutate external data in component lifecycle hooks (eg. mutate an external tracked value, create or update a model, call an action)
    this.args.person.name = "Alex";
  }
}
