class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        if (nums.length === 0) return 0;

        let k = 0; // Points to the last unique element found
        
        for (let i = 1; i < nums.length; i++) {
            // If we find a new unique element
            if (nums[i] !== nums[k]) {
                k++;
                nums[k] = nums[i]; // Place it at the next unique position
            }
        }
        
        return k + 1; // Since k is 0-indexed, the total count is k + 1
    }
}