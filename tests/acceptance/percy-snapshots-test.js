import { visit, waitUntil } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';
import percySnapshot from '@percy/ember';

module('Acceptance | Percy snapshots', function (hooks) {
  setupApplicationTest(hooks);

  test('Percy snapshot', async function (assert) {
    await visit('/');

    // Wait for CSS to be fully loaded
    await waitUntil(() => {
      const styles = document.styleSheets;
      return styles.length > 0 && Array.from(styles).every(sheet => {
        try {
          return sheet.cssRules.length > 0;
        } catch (e) {
          return true; // Cross-origin stylesheets throw errors but are loaded
        }
      });
    }, { timeout: 5000 });

    await percySnapshot(assert);

    assert.ok(true);
  });

  test('Dashboard renders correctly', async function (assert) {
    await visit('/');

    assert.dom('.main-page').exists('Main page component is rendered');
  });
});
