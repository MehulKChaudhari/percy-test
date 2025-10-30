import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';
// Percy snapshots are handled via @percy/cli on the built site.

module('Acceptance | Percy snapshots', function (hooks) {
  setupApplicationTest(hooks);

  test('Dashboard snapshot', async function (assert) {
    await visit('/');

    assert.dom('.main-page').exists('Main page component is rendered');
    // Snapshot is taken in CI by percy snapshot on the built dist/
  });
});
