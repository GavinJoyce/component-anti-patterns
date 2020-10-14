import Component from "@glimmer/component";
import { timeout } from "ember-concurrency";
import { task } from "ember-concurrency-decorators";
import { tracked } from "@glimmer/tracking";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default class DataLoader extends Component {
  @tracked data;
  lower = this.args.lower || 0;
  upper = this.args.upper || 100;
  delay = 500;

  constructor() {
    super(...arguments);

    this.loadData.perform();
  }

  @task *loadData() {
    yield timeout(this.delay);
    this.data = getRandomInt(this.lower, this.upper);
  }
}