module.exports = function reverse (n) {
    if (Number.isInteger(n)) {
        if (n<0) {
            n *= -1;
        }
        let a = n.toString().split('').reverse().join('');
        return parseInt(a);
    }
}
