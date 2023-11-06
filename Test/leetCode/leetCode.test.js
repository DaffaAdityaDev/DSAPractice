import { 
    twoSum, treeSum, maxProfit, search, 
    maxArea, containsDuplicate, findMin,
    groupAnagrams, lengthOfLongestSubstring,
    longestConsecutive, characterReplacement,
    maxDepth, mergeTwoLists, minWindow, 
    productExceptSelf, reverseList, isSameTree,
    searchMatrix, searchInRotatedSortedArr, 
    topKFrequent, isAnagram, isPalindrome,
    isValid, getConcatenation
} from '../../leetCode/utils.js'


test('twoSum', () => {
    expect(twoSum([2,7,11,15], 9)).toEqual([0, 1])
    expect(twoSum([3,2,4], 6)).toEqual([1, 2])
    expect(twoSum([3,3], 6)).toEqual([0, 1])
})

test('treeSum', () => {
    expect(treeSum([-1,0,1,2,-1,-4])).toEqual([[-1,-1,2],[-1,0,1]])
    expect(treeSum([0,1,1])).toEqual([])
    expect(treeSum([0,0,0])).toEqual([[0,0,0]])
})

test('maxProfit', () => {
    expect(maxProfit([7,1,5,3,6,4])).toEqual(5)
    expect(maxProfit([7,6,4,3,1])).toEqual(0)
})

test('search', () => {
    expect(search([-1,0,3,5,9,12], 9)).toEqual(4)
    expect(search([-1,0,3,5,9,12], 2)).toEqual(-1)
})

test('maxArea', () => {
    expect(maxArea([1,8,6,2,5,4,8,3,7])).toEqual(49)
    expect(maxArea([1,1])).toEqual(1)
    expect(maxArea([4,3,2,1,4])).toEqual(16)
})

test('containsDuplicate', () => {
    expect(containsDuplicate([1,2,3,1])).toEqual(true)
    expect(containsDuplicate([1,2,3,4])).toEqual(false)
    expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2])).toEqual(true)
})

test('findMin', () => {
    expect(findMin([3,4,5,1,2])).toEqual(1)
    expect(findMin([4,5,6,7,0,1,2])).toEqual(0)
    expect(findMin([11,13,15,17])).toEqual(11)
})

test('groupAnagrams', () => {
    expect(groupAnagrams(["eat","tea","tan","ate","nat","bat"])).toEqual([['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']])
    expect(groupAnagrams([""])).toEqual([[""]])
    expect(groupAnagrams(["a"])).toEqual([["a"]])
})

test('lengthOfLongestSubstring', () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toEqual(3)
    expect(lengthOfLongestSubstring("bbbbb")).toEqual(1)
    expect(lengthOfLongestSubstring("pwwkew")).toEqual(3)
    expect(lengthOfLongestSubstring("")).toEqual(0)
})

test('longestConsecutive', () => {
    expect(longestConsecutive([100,4,200,1,3,2])).toEqual(4)
    expect(longestConsecutive([0,3,7,2,5,8,4,6,0,1])).toEqual(9)
    expect(longestConsecutive([1,2,0,1])).toEqual(3)
})

test('characterReplacement', () => {
    expect(characterReplacement("ABAB", 2)).toEqual(4)
    expect(characterReplacement("AABABBA", 1)).toEqual(4)
})

test('maxDepth', () => {
    expect(maxDepth({
        val: 3,
        left: {
            val: 9,
            left: null,
            right: null
        },
        right: {
            val: 20,
            left: {
                val: 15,
                left: null,
                right: null
            },
            right: {
                val: 7,
                left: null,
                right: null
            }
        }
    })).toEqual(3)
    expect(maxDepth({
        val: 1,
        left: null,
        right: {
            val: 2,
            left: null,
            right: null
        }
    })).toEqual(2)
})

test('mergeTwoLists', () => {
    expect(mergeTwoLists({
        val: 1,
        next: {
            val: 2,
            next: {
                val: 4,
                next: null
            }
        }
    }, {
        val: 1,
        next: {
            val: 3,
            next: {
                val: 4,
                next: null
            }
        }
    })).toEqual({
        val: 1,
        next: {
            val: 1,
            next: {
                val: 2,
                next: {
                    val: 3,
                    next: {
                        val: 4,
                        next: {
                            val: 4,
                            next: null
                        }
                    }
                }
            }
        }
    })
})

test('minWindow', () => {
    expect(minWindow("ADOBECODEBANC", "ABC")).toEqual("BANC")
    expect(minWindow("a", "a")).toEqual("a")
    expect(minWindow("a", "aa")).toEqual("")
})

test('productExceptSelf', () => {
    expect(productExceptSelf([1,2,3,4])).toEqual([24,12,8,6])
    expect(productExceptSelf([-1,1,0,-3,3])).toEqual([-0,0,9,-0,0])
    expect(productExceptSelf([1,2,3,4,5,6,7,8,9,10])).toEqual([3628800, 1814400, 1209600, 907200, 725760, 604800, 518400, 453600, 403200, 362880])
})

test('reverseList', () => {
    expect(reverseList({
        val: 1,
        next: {
            val: 2,
            next: {
                val: 3,
                next: {
                    val: 4,
                    next: {
                        val: 5,
                        next: null
                    }
                }
            }
        }
    })).toEqual({
        val: 5,
        next: {
            val: 4,
            next: {
                val: 3,
                next: {
                    val: 2,
                    next: {
                        val: 1,
                        next: null
                    }
                }
            }
        }
    })
})

test('isSameTree', () => {
    expect(isSameTree(
        {
            val: 1,
            left: {
                val: 2,
                left: null,
                right: null
            },
            right: {
                val: 3,
                left: null,
                right: null
            }
        },
        {
            val: 1,
            left: {
                val: 2,
                left: null,
                right: null
            },
            right: {
                val: 3,
                left: null,
                right: null
            }
        }
    )).toEqual(true)
    expect(isSameTree(
        {
            val: 1,
            left: {
                val: 2,
                left: null,
                right: null
            },
            right: null
        },
        {
            val: 1,
            left: null,
            right: {
                val: 2,
                left: null,
                right: null
            }
        }
    )).toEqual(false)
    expect(isSameTree(
        {
            val: 1,
            left: {
                val: 2,
                left: null,
                right: null
            },
            right: null
        },
        {
            val: 1,
            left: null,
            right: {
                val: 2,
                left: null,
                right: null
            }
        }
    )).toEqual(false)
})

test('searchMatrix', () => {
    expect(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)).toEqual(true)
    expect(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)).toEqual(false)
})

test('searchInRotatedSortedArr', () => {
    expect(searchInRotatedSortedArr([4,5,6,7,0,1,2], 0)).toEqual(4)
    expect(searchInRotatedSortedArr([4,5,6,7,0,1,2], 3)).toEqual(-1)
    expect(searchInRotatedSortedArr([1], 0)).toEqual(-1)
})

test('topKFrequent', () => {
    expect(topKFrequent([1,1,1,2,2,3], 2)).toEqual([1,2])
    expect(topKFrequent([1], 1)).toEqual([1])
})

test('isAnagram', () => {
    expect(isAnagram("anagram", "nagaram")).toEqual(true)
    expect(isAnagram("rat", "car")).toEqual(false)
})

test('isPalindrome', () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toEqual(true)
    expect(isPalindrome("race a car")).toEqual(false)
    expect(isPalindrome(" ")).toEqual(true)
})

test('isValid', () => {
    expect(isValid("()")).toEqual(true)
    expect(isValid("()[]{}")).toEqual(true)
    expect(isValid("(]")).toEqual(false)
})


test('getConcatenation', () => {
    expect(getConcatenation([1,2,1])).toEqual([1,2,1,1,2,1])
    expect(getConcatenation([1,3,2,1])).toEqual([1,3,2,1,1,3,2,1])
})

