/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }
    let str1=s.toLowerCase();
    let str2=t.toLowerCase();
    let sortedstr=str1.split("").sort().join('');
    let sortedstr2=str2.split("").sort().join('');
    return sortedstr === sortedstr2;
};
