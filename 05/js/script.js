function min(first, ...rests){
  let output;
  let items;

  if(Array.isArray(first)){
    output = first[0]
    items = first
  }else if(typeof(first) === "Number"){
    output = first
    items = rests
  }

  for(const item of items){
    if(output > item){
      output = item
    }
  }
  return output
}

console.log(min([1,12,33,4,55,2,2,66,7,73,2,1]))


// For Each
const numbers1 = [273, 52, 103, 32, 57]

// index : start => 0
numbers1.forEach(function (value, index, array) {
  console.log(index + ". " + value)  
})


// Map
let numbers2 = [273, 52, 103, 32, 57]

numbers2 = numbers2.map(function (value, index, array) {
  return value * value
})

numbers2.forEach(console.log)


// Filter => 조건문 사용해서 조건에 맞는것만 들고오기.
const numbers3 = [0, 1, 2, 3, 4]

const evenNumbers = numbers3.filter(function (val){
  return val % 2 ==0
})

evenNumbers.forEach(console.log)


// Method Chaining use =>
let numbers = [0,1,2,3,4,5,6,7,8,9]

numbers
  .filter((val) => val % 2 != 0)
  .map((val) => val * val)
  .forEach((val) => {
    console.log(val)
  });


let nums = [273, 25, 75, 52, 103, 32, 57, 24, 76];

  nums
  .filter((val) => val % 2 == 1)
  .filter((val) => val <= 100)
  .filter((val) => val % 5 == 0)
  .forEach((val) => {
    console.log(val)
  });


const array = ['사과', '배', '귤', '바나나'];

array.forEach(function (value, index, array){
  document.write(value);
  document.write('<br>')
})
