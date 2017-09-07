let tap = require('tap');
let tapHTML = require('tap-that-html');
const { ValueViewerSymbol } = require("@runkit/value-viewer");
let through = require('through');
let ssToPromise = require('stream-to-promise');
tap.unpipe(process.stdout);

function test(tests) {
  // Setup
  let tt = through();
  let ss = ssToPromise(tt);
  tap.pipe(tt);

  // Run tests
  for (let name in tests) {
    await tap.test(name, tests[name]);
  }
  tt.end();

  // Format output
  return ss
    .then(data => {
      const str = data.toString();
      return tapHTML(str);
    })
    .then(HTML => {
      return { [ValueViewerSymbol]: { title: 'TAP Viewer', HTML } };
    });
}

module.exports = test;