/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = [];
    let length = nums.length;

    nums.forEach(function(element, i) {
        for(var j = i+1;j<length;j++){
            if((element + nums[j]) === target) {
                result.push(i, j);
            }
        }

    });

    return result;
};