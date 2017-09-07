# ✅ runkit-tap

Test and view output on runkit.com

## Runkit API

`test(tests)` where `tests` is of the form:
```js
{
  'testname': (tap) => {/* tap statements */; tap.end();}
}
```

### For example: 
```js
const test = require('runkit-tap');

// This returns an object that Runkit can render
await test({
  'equality': t => {
      t.equal(1, 1, 'equal');
      t.end();
  }
});
```

## License
[MIT](LICENSE.md) © 2017 Marc Farra