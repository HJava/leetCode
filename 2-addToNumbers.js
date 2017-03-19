/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let result = [];
    let result1 = [];
    let result2 = [];
    let tmp = l1;

    do {
        result1.push(tmp.val);
        tmp = tmp.next;
    } while (tmp);

    tmp = l2;
    do {
        result2.push(tmp.val);
        tmp = tmp.next;
    } while (tmp);


    if (result2.length > result1.length) {
        tmp = result1;
        result1 = result2;
        result2 = tmp;
    }

    let count = result1.map((element, key)=> {
        if (result2[key]) {
            return element + result2[key];
        } else {
            return element;
        }
    });

    let flag = false;

    count.forEach((element)=> {
        if (flag) {
            element += 1;
        }

        if (element >= 10) {
            flag = true;

            result.push(element - 10);
        } else {
            flag = false;

            result.push(element);
        }
    });

    if (flag) {
        result.push(1);
    }

    return result;
};


function ListNode({val, next}) {
    this.val = val;
    this.next = next;
}

let a1 = new ListNode({val: 3, next: null});
let a2 = new ListNode({val: 4, next: a1});
let a3 = new ListNode({val: 2, next: a2});

var b1 = new ListNode({val: 4, next: null});
var b2 = new ListNode({val: 6, next: b1});
var b3 = new ListNode({val: 5, next: b2});

console.log(addTwoNumbers(a3, b3));