const product = {
  "제품명" : "7D 건조 망고",
  "유형" : "당 절임",
  "성분" : "망고, 설탕, 메타중아황산나트륨, 치자황색소",
  "원산지" : "필리핀",
  "가격" : 17800
}

document.write(product.제품명)
document.write(product['가격'])

const pet = {
  "name": "cloud",
  "eat": function(food){
    alert(this.name + "는 " + food + "를 먹습니다.")
  }
}

pet.eat("과자")

const student = {}

student.이름 = "이정민"
student.취미 = "악기"
student.장래희망 = "프로그래머"

console.log(JSON.stringify(student, null, 2))

delete student.장래희망;

console.log(JSON.stringify(student, null, 2))

const test = {
  "a": function() {
    console.log(this)
  },
  "b": () => {
    console.log(this)
  }
}

test.a()
test.b()

Number.prototype.power = function(n=2){
  return this.valueOf() ** n
}

const a = 12
console.log(a.power())