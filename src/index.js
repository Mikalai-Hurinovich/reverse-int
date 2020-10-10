module.exports = function reverse (n) {
var m = Math.abs(n);
  return (m.toString()).split('').reverse().join('');
}
