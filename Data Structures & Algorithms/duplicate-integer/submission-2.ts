class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let bool:boolean = false;
        let map = new Map()
        let soretedArr = nums.sort((a,b)=>a-b)
        for(let i =0;i < soretedArr.length; i++){
            if(map.has(soretedArr[i])){
                bool = true
                return bool
            }else{
                map.set(soretedArr[i],i)
            }
        }
        console.log(map)
        return bool
    }
}
