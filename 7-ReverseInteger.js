/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let smallThanZero = false;

    if (Math.abs(x) > Math.pow(2, 31) - 1) {
        return 0;
    }

    if (x < 0) {
        smallThanZero = true;
        x = Math.abs(x);
    }

    let result;

    if (smallThanZero) {
        result = 0 - parseInt((x + '').split('').reverse().join(''));
    } else {
        result = parseInt((x + '').split('').reverse().join(''));
    }

    if (Math.abs(result) > Math.pow(2, 31) - 1) {
        return 0;
    } else {
        return result;
    }

};

console.log(reverse(1534236469))