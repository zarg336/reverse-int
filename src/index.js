module.exports = function reverse(n) {
    n = Math.abs(n).toString().split('').reverse().join('');
    return Number(n);
}
