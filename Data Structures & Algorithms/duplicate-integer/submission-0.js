class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const checkDuplicate = new Set(nums);
        return checkDuplicate.size !== nums.length;
    }
}
