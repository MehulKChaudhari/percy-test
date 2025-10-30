import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';
import { hbs } from 'ember-cli-htmlbars';
import { snapshot } from '@percy/ember';
import MainPage from 'percy-test/components/main-page';

module('Integration | Component | MainPage Percy snapshots', function (hooks) {
  setupRenderingTest(hooks);

  test('MainPage component snapshot', async function (assert) {
    await render(hbs`<MainPage />`);

    assert.dom('.main-page').exists('Main page component is rendered');

    await snapshot('MainPage Component');
  });
});
