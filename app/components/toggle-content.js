import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class ToggleContentComponent extends Component {
  @tracked showContent = false;
}
