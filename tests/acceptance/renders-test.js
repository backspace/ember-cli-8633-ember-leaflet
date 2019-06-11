import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | renders', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting / renders the hello', async function(assert) {
    await visit('/');

    assert.dom('h1').hasText('Hello');
  });
});
