import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | styles');

test('visiting index does not break styles', function(assert) {
  assert.expect(1);

  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
