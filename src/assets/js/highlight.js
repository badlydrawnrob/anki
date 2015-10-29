// @codekit-prepend "../packages/bower_components/highlightjs/highlight.pack.js";

var blocks = document.querySelectorAll('pre code:not(.hljs)');
Array.prototype.forEach.call(blocks, hljs.highlightBlock);
