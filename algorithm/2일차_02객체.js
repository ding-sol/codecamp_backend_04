const Obj = {
    "name" : "철수",
    "age" : 12,
    "school" : {
    "name" : "다람쥐 초등학교"
           }
       }
   
//dot notation
Obj.name //->'철수'
   
// bracket notation
Obj["name"] //-> '철수'
Obj["school"] //-> { name:'다람쥐 초등학교' }
   
let key = "name"
Obj[key] //-> '철수'
// bracket notation : 문자열로 감싸지지 않은 문자가 입력됐을때는 그 문자는 변수로서 동작함. 
// let key = "age"
// Obj[key] -> 12

// 객체 데이터 추가 / 변경
Obj.dog = "똘이"

// 객체 데이터 삭제
delete Obj.dog
delete Obj.school.name


//008. 객체의 선언과 할당
const student = {}
student.name = "철수"
student["name"] = "철수"

let age = "age"
student[age] = 12

console.log(student) //-> { name: '철수', age: 12 }

//009. 객체의 키&값 추가
const student = {
	name: "철수",
	age: 8,
};

const school = {
	name: "다람쥐초등학교",
	teacher: "다람이",
}

student.school = school

혹은

student["school"] = {}
student.school = school