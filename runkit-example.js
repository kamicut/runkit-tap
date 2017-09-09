const test = require('runkit-tap');

// This returns an object that Runkit can render
await test({
  'equality': t => {
      t.equal(1, 1, 'equal');
      t.end();
  }
});
