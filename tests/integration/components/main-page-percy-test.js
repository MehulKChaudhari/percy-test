import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';
import { hbs } from 'ember-cli-htmlbars';
import percySnapshot from '@percy/ember';

module('Integration | Component | MainPage Percy snapshots', function (hooks) {
  setupRenderingTest(hooks);

  test('Percy snapshot', async function (assert) {
    await render(hbs`<MainPage />`);

    await percySnapshot(assert);

    assert.ok(true);
  });

  test('MainPage component renders', async function (assert) {
    await render(hbs`<MainPage />`);

    assert.dom('.main-page').exists('Main page component is rendered');
  });
});
