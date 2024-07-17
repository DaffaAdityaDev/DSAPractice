function search(nums, target) {
    // Your solution here
    let setNumb = new Set(nums);

    if (setNumb.has(target)) {
        return true;
    }
    return false;
}

console.log(search([1, 2, 3, 4, 5], 3)); // true