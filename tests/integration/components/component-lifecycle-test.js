import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | component-lifecycle', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      {{#if this.isVisible}}
        <ComponentLifecycle />
      {{/if}}
    `);

    console.log('---------------Render 1-----------------')

    this.set('isVisible', true);

    console.log('---------------Render 2-----------------')

    this.set('isVisible', false);

    console.log('---------------Render 3-----------------')

    this.set('isVisible', true);

    console.log('---------------End of Test-----------------')

    assert.ok(true);
  });
});
