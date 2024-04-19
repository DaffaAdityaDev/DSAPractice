// 295. Find Median from Data Stream
// Hard
// Topics
// Companies
// The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.

// For example, for arr = [2,3,4], the median is 3.
// For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
// Implement the MedianFinder class:

// MedianFinder() initializes the MedianFinder object.
// void addNum(int num) adds the integer num from the data stream to the data structure.
// double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.
 

// Example 1:

// Input
// ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
// [[], [1], [2], [], [3], []]
// Output
// [null, null, null, 1.5, null, 2.0]

// Explanation
// MedianFinder medianFinder = new MedianFinder();
// medianFinder.addNum(1);    // arr = [1]
// medianFinder.addNum(2);    // arr = [1, 2]
// medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
// medianFinder.addNum(3);    // arr[1, 2, 3]
// medianFinder.findMedian(); // return 2.0
 

// Constraints:

// -105 <= num <= 105
// There will be at least one element in the data structure before calling findMedian.
// At most 5 * 104 calls will be made to addNum and findMedian.
 

// Follow up:

// If all integer numbers from the stream are in the range [0, 100], how would you optimize your solution?
// If 99% of all integer numbers from the stream are in the range [0, 100], how would you optimize your solution?


// Import the required priority queue libraries
const { MaxPriorityQueue, MinPriorityQueue } = require('@datastructures-js/priority-queue');

// MedianFinder class definition


class MedianFinder {
    constructor () {
        this.maxHeap = new MaxPriorityQueue();
        this.minHeap = new MinPriorityQueue();
    }

    addNum (num) {
        if (this.maxHeap.isEmpty() || num < this.maxHeap.front().element) {
            this.maxHeap.enqueue(num);
        } else {
            this.minHeap.enqueue(num);
        }

        // Rebalance heaps
        if (this.maxHeap.size() > this.minHeap.size() + 1) {
            this.minHeap.enqueue(this.maxHeap.dequeue().element);
        } else if (this.minHeap.size() > this.maxHeap.size()) {
            this.maxHeap.enqueue(this.minHeap.dequeue().element);
        }
    }

    findMedian () {
        if (this.maxHeap.size() > this.minHeap.size()) {
            return this.maxHeap.front().element;
        } else {
            return (this.maxHeap.front().element + this.minHeap.front().element) / 2;
        }
    }
}

// Test the MedianFinder class
const medianFinder = new MedianFinder();
medianFinder.addNum(1);
medianFinder.addNum(2);
console.log(medianFinder.findMedian()); // Output: 1.5
medianFinder.addNum(3);
console.log(medianFinder.findMedian()); // Output: 2.0

// its works in leetcode

