(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.hyphenationPatternsPi = factory();
  }
}(this, function () {
  var patterns = [], hyphenation = [];
// copyright: Copyright (C) 2018 Wie-Ming Cittānurakkho Bhikkhu
// title: Hyphenation patterns for Pāli
// version: 2018-06-29
// language:
//     name: Pāli
//     tag: pi
// notice: >
//     This file is part of the hyph-utf8 package.
//     See http://www.hyphenation.org/tex for more information.
// authors:
//      -
//          name: Wie-Ming Cittānurakkho Bhikkhu
//          contact: wiemingang:gmail.com
// licence:
//     name: MIT
//     url: https://opensource.org/licenses/MIT
//     text: >
//         Permission is hereby granted, free of charge, to any person
//         obtaining a copy of this software and associated documentation
//         files (the “Software”), to deal in the Software without
//         restriction, including without limitation the rights to use,
//         copy, modify, merge, publish, distribute, sublicense, and/or sell
//         copies of the Software, and to permit persons to whom the
//         Software is furnished to do so, subject to the following
//         conditions:
//
//         The above copyright notice and this permission notice shall be
//         included in all copies or substantial portions of the Software.
//
//         THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
//         EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
//         OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
//         NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
//         HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
//         WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//         FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
//         OTHER DEALINGS IN THE SOFTWARE.
// hyphenmins:
//     typesetting:
//         left: 1
//         right: 2
// changes:
//     - 2018-06-29 Initial release
// source: Generated manually
// ==========================================
var patterns = [//
".n2h2ā3",
".n2t2",
"a1",
"2b3b2",
"3b2h2",
"2b3m2",
"3b2r2",
"3b2y2",
"2c3c2",
"3c2h2",
"2d3d2",
"3d2h2",
"2d3m2",
"3d2r2",
"3d2v2",
"e1",
"2g3d2h2",
"2g3g2",
"3g2h2",
"2g3r2",
"2g3y2",
"2h3m2",
"2h3v2",
"2h3y2",
"i1",
"3j2h2",
"2j3j2",
"3k2h2",
"2k3k2",
"2k3l2",
"3k2r2",
"3k2v2",
"3k2y2",
"2l3l2",
"2l3y2",
"2m3b2",
"2m3h2",
"2m3m2",
"2m3p2",
"2m3y2",
"2n3d2",
"2n1h2",
"2n3n2",
"2n1t2",
"2n3v2",
"o1",
"3p2h2",
"2p3l2",
"2p3p2",
"2s3m2",
"3s2n2",
"2s3s2",
"2s3t2",
"3s2v2",
"3s2y2",
"3t2h2",
"2t3n2",
"2t3r2",
"2t3t2",
"3t2v2",
"3t2y2",
"u1",
"2v3h2",
"3v2y2",
"2y3h2",
"3y2v2",
"2y3y2",
"2ñ3c2",
"2ñ3h2",
"2ñ3j2",
"2ñ3ñ2",
"ā1",
"ī1",
"ū1",
"2ḍ3ḍ2",
"3ḷ2h2",
"2ṁ3",
"2ṁ3n2h2",
"2ṃ3",
"2ṃ3n2h2",
"2ṅ3g2",
"2ṅ3k2",
"2ṇ3h2",
"2ṇ3y2",
"2ṇ3ḍ2",
"2ṇ3ṇ2",
"2ṇ3ṭ2",
"3ṭ2h2",
"2ṭ3ṭ2",
""];

  return {
    patterns: patterns,
    exceptions: hyphenation
  };
}));
