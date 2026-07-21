class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        //     const map1 = new Map()
        //     const map2 = new Map()
        //     if (s.length == t.length) {
        //         for (let i = 0; i < s.length; i++) {
        //             map1.set(s[i],(map1.get(s[i]) ||0)+1)
        //             map2.set(t[i],(map2.get(t[i]) ||0)+1)
        //         }
        //         for(let key of map1.keys()){
        //             if(map1.get(key)!== map2.get(key)){
        //                 return false
        //             }
        //         }
        //         return true
        //     }else{
        //         return false
        //     }
        // }
        if (s.length !== t.length) {
            return false
        }
        const map = new Map<String, number>();
        for (let char of s) {
            map.set(char, (map.get(char) || 0) + 1)
        }
        for(let char of t){
            if(!map.has(char)){
                return false
            }
            map.set(char,(map.get(char)-1))
            if(map.get(char) ===0){
                map.delete(char)
            }
        }
        return map.size === 0
    }
}