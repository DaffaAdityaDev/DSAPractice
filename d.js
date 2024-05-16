function climbingLeaderboard(ranked, player) {
    // Write your code here
    let uniqueRanked = [... new Set(ranked)]
    let result = []
    let index = uniqueRanked.length - 1
    player.forEach(p => {
        while (index >= 0) {
            if (p >= uniqueRanked[index]) {
                index--
            } else {
                result.push(index + 2)
                break
            }
        }
        if (index < 0) {
            result.push(1)
        }
    })
    return result
}

console.log(climbingLeaderboard([100, 90, 90, 80], [70, 80, 105])) // [4, 3, 1]