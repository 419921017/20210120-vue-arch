const ncname = `[a-zA-Z_][\\-\\.0-9_a-zA-Z]*`;
const qnameCapture = `((?:${ncname}\\:)?${ncname})`;
const startTagOpen = new RegExp(`^<${qnameCapture}`);
const endTag = new RegExp(`^<\\/${qnameCapture}[^>]*>`);
const attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"(^")+|'(^')*+|(^\s"'=<>`]+)))?/;
const startTagClose = /^\s*(\/?)>/;
const defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;

function start(tagName, attrs) {
  console.log(tagName, attrs);
}

function end(tagName) {
  console.log(tagName);
}

function chars(text) {
  console.log(text);
}

function parseHTML(html) {
  

}

function compileToFunctions(template) {
  parseHTML(template);
  return function () {};
}

export default { compileToFunctions };
