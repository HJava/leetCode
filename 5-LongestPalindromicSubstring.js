/**
 * 最佳方案为在每个元素中间插入一个特殊字符，可以将此题转换为奇数对称
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let result = '';
    let length = s.length;
    let isOdd = false;

    if (!s || s.length === 1) {
        return s;
    }

    result = s[0];

    for (let i = 0; i < length; i++) {
        let j = 0.5;
        let front = Math.ceil(i - j);
        let end = Math.ceil(i + j);
        let flag = false;
        while (s[front] && s[end]) {
            let strLength = j * 2 + 1;
            if (s[front] === s[end]) {
                if (strLength > result.length && (!flag || strLength % 2 === (isOdd ? 1 : 0))) {
                    result = s.slice(front, end + 1);
                }
                if (flag) {
                    j += 1;
                } else {
                    j += 0.5;
                }
            } else {
                if (flag) {
                    break;
                } else {
                    flag = true;
                    // 预测结果是奇数还是偶数
                    if (strLength % 2 === 0) {
                        isOdd = true;
                    } else {
                        isOdd = false;
                    }
                    j += 0.5;
                }
            }


            front = Math.ceil(i - j);
            end = Math.ceil(i + j);
        }
    }

    return result;
};

const pa = '"aaabaaaa"';
const param = "abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababa";

console.log(longestPalindrome(pa));