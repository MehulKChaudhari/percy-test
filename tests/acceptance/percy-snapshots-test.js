import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';
import { snapshot } from '@percy/ember';

module('Acceptance | Percy snapshots', function (hooks) {
  setupApplicationTest(hooks);

  test('Dashboard snapshot', async function (assert) {
    await visit('/');

    assert.dom('.main-page').exists('Main page component is rendered');
    await snapshot('Dashboard');
  });
});
