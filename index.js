const Test = require('tap').Test;
let tapHTML = require('tap-that-html');
const { ValueViewerSymbol } = require("@runkit/value-viewer");
let through = require('through');
let ssToPromise = require('stream-to-promise');

async function test(tests) {
  const tap = new Test();
  // Setup
  let tt = through();
  let ss = ssToPromise(tt);
  tap.pipe(tt);

  for (let name in tests) {
    tap.test(name, tests[name]);
  }
  tt.end();
  tap.end();

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