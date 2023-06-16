

function substring(s) {
    let arr = []
    const splitStr = s.split('')

    for (let i = 0; i < splitStr.length; i++) {
        let temp = []
        for (let j = i; j < splitStr.length; j++) {
            if (temp.includes(splitStr[j])) {
                break
            } else {
                temp.push(splitStr[j])
            }
        }
        if (temp.length > arr.length) {
            arr = temp
        }
    }



    return arr.length
}



console.log(substring("abcabcbb"));

