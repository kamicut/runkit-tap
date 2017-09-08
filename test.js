var tap = require('tap');
var runkitTap = require('./index');

tap.test(async t => {
  var result = await runkitTap({ 'test': f => f.equal(1,1)});
  t.ok(result, 'check non-empty result');
  let symbols = Object.getOwnPropertySymbols(result);
  let runkitSym = symbols.filter((symbol) => {
    return symbol.toString() === 'Symbol(RunKit Simple Value Viewer)';
  });
  t.true(runkitSym.length > 0, 'result has runkit symbol');
});