class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let bool:boolean = false;
        let map = new Map()
        for(let i =0;i < nums.length; i++){
            if(map.has(nums[i])){
                bool = true
                return bool
            }else{
                map.set(nums[i],i)
            }
        }
        console.log(map)
        return bool
    }
}
