import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';
import { hbs } from 'ember-cli-htmlbars';
import MainPage from 'percy-test/components/main-page';

module('Integration | Component | MainPage Percy snapshots', function (hooks) {
  setupRenderingTest(hooks);

  test('MainPage component snapshot', async function (assert) {
    await render(hbs`<MainPage />`);
    
    assert.dom('.main-page').exists('Main page component is rendered');
    
    // TODO: Add Percy snapshot when package is properly configured
    // await percySnapshot('MainPage Component');
  });
});
