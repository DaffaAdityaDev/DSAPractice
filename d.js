function countChange(money, coins) {
    // your implementation here
    let dp = new Array(money + 1).fill(0);
    dp[0] = 1;

    for (let i = 0; i < coins.length; i++) {
        for (let j = coins[i]; j <= money; j++) {
            dp[j] += dp[j - coins[i]];
        }
    }
    

    return dp[money];
}

console.log(countChange(4, [1,2]) === 3)