function friend(friends){
    //your code here
    return friends.filter(friend => friend.length === 4)
}


console.log(friend(["Ryan", "Kieran", "Mark"])) // ["Ryan", "Mark"]
