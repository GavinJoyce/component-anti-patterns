import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { task } from 'ember-concurrency-decorators';
import { timeout } from 'ember-concurrency';

export default class AsyncVsTasksComponent extends Component {
  @tracked count = 0;

  @action
  async asyncCounter() {
    for (let i=0; i<10; i++) {
      this.count++;
      console.log('AsyncVsTasksComponent.asyncCounter: ', this.count);
      await timeout(500);
    }
  }

  @task
  *taskCounter() {
    for (let i=0; i<10; i++) {
      this.count++;
      console.log('AsyncVsTasksComponent.taskCounter: ', this.count);
      yield timeout(500);
    }
  }
}
