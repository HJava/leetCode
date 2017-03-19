/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let length1 = nums1.length;
    let length2 = nums2.length;
    let length = length1 + length2;

    let front = Math.floor(length / 2) + 1;
    let end = Math.ceil(length / 2) + 1;

    let result = [];
    let index1 = 0;
    let index2 = 0;
    for (let i = 0; i < front; i++) {
        if (index1 > length1 - 1) {
            result.push(nums2[index2++]);
            continue;
        }

        if (index2 > length2 - 1) {
            result.push(nums1[index1++]);
            continue;
        }
        if (nums1[index1] < nums2[index2]) {
            result.push(nums1[index1++]);
        } else {
            result.push(nums2[index2++]);
        }
    }
    if (length % 2 === 1) {
        return result[result.length - 1];
    } else {
        return (result[result.length - 1] + result[result.length - 2]) / 2;
    }
};

nums1 = [1, 2]
nums2 = [3, 4,5]

console.log(findMedianSortedArrays(nums1, nums2))