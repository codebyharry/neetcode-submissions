class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const duplicateCheck = new Set(nums)
        return duplicateCheck.size !== nums.length;
    }
}
