//003. 배열의 선언과 할당
const fruits = ["사과", "바나나", "파인애플"]
// 1. 직접 정의하는 방법

// fruits.push("사과")
// fruits.push("바나나")
// fruits.push("파인애플")
// 2. method를 사용하는 방법

// fruits[0] = "사과"
// fruits[1] = "바나나"
// fruits[2] = "파인애플"
// fruits[0] = 123
// 이 방법은 쓰지 말기. 이미 존재하는 데이터를 임의로 수정해버릴수 있기 때문

console.log(fruits)

//004. 배열의 기능
//주어진 fruits 배열에서 마지막 요소를 꺼내 newFruits에 넣어주세요.
const fruits = ["사과", "바나나", "파인애플"]
const newFruits = []

newFruits.push(fruits[fruits.length-1])

console.log(newFruits)
