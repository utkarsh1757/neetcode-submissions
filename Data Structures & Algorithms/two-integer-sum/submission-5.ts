class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = new Map<number,number>()
        for(let num=0; num< nums.length; num++){
            let diff = target - nums[num]
            if(map.has(diff)){
                return [map.get(diff),num]
            }
                map.set(nums[num],num)
        }
    }
}
