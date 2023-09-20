/**
 * Return the nth fibonacci number
 * @param {integer} n
 */
function fibonacci(n) {
    if (n < 0) {
        throw Error("Input should be >= 0");
    } else if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

module.exports = fibonacci;
