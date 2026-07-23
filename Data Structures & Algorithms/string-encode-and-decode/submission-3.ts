class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let result:string = ""
        for(const str of strs){
            result+=str.length+"#"+str
        }
        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     * [a,b,c]
     * 3#a3#b3#c
     * 
     */
    decode(str: string): string[] {
        const result: string[] = [];
        let i = 0;

        while (i < str.length) {
            
            let j = i;
            while (str[j] !== "#") {
                j++;
            }
            const length = parseInt(str.slice(i, j));
            const start = j + 1;
            const end = start + length;

            result.push(str.slice(start, end));
            i = end;
        }

        return result;
    }
}
