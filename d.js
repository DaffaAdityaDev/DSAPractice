function bogoSort(arr) {
  while(!sorted(arr)) {
    arr = _.shuffle(arr);
  }
  
  return arr;
}

function sorted(arr) {
  let sorted = true;
  
  for(let i = 0; i < arr.length -1; i++) {
    if(arr[i + 1] < arr[i]) {
      sorted = false;
    }
  }
  
  return sorted;
}

let arr = []
for(let i = 10; i >= 0; i--) {
  arr.push(i)
}

console.log(bogoSort((_.shuffle(arr))))
