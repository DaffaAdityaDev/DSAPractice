var containsDuplicate = function(arr) {
    let arrSet = new Set(); //0(n) 
    for(let i = 0; i < arr.length; i++) { //0(n)
        if(arrSet.has(arr[i])) {
            return true;
        }
        arrSet.add(arr[i]);
    }
    return false;
};

console.log(containsDuplicate([1,2,3,1])); // true
console.log(containsDuplicate([1,2,3,4])); // false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // true