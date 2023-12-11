setTimeout(() => {
  console.log("1초 이후 실행됩니다.");
}, 1 * 1000);

let cnt = 1;
log1s = setInterval(() => {
  console.log("1초 마다 실행됩니다. " + cnt);
  cnt ++;
}, 1 * 1000);


setTimeout(() => {
  console.log("timer out")
  clearInterval(log1s)
}, 5 * 1000);


// 무조건 익명함수가 이김
test = function(){
  console.log('test1')
}

function test(){
  console.log('test2')
}

test()