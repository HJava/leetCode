/**
 * 若一组中左侧偏移量为remainder，则高度偏移量为numRows-remainder-1
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    let storeArray = [];
    let length = s.length;
    let strArray = s.split('');

    if (numRows === 1) {
        return s;
    }

    for (let i = 0; i < numRows; i++) {
        storeArray.push([]);
    }

    let count = 0;
    while (strArray.length > 0) {
        let remainder = count % (numRows - 1);
        for (let j = 0; j < numRows; j++) {
            if (strArray.length === 0) {
                break;
            }
            if (remainder === 0) {
                storeArray[j].push(strArray.shift());
            } else if (numRows - j - 1 === remainder) {
                storeArray[j].push(strArray.shift());
            }
        }
        count++;
    }

    return storeArray.reduce((prev, array) => {
        return prev + array.join('');
    }, '');
};

console.log(convert("ABC", 2));