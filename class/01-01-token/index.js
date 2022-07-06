console.log("안녕하세요!!")

function getToken(aaa){
    const result = String(Math.floor(Math.random() * 10 ** aaa)).padStart(aaa,"0")
    //.padStart(aaa, "0") : 총 aaa자리로 만들거고 앞에서부터(Start) 빠진 자리엔 "0"을 채워줘
    // 10 ** 3 : 10의 3제곱
    console.log(result)
}

getToken(10) // 10자리 토큰 ()안에 넣는 수에 따라 다양한 자릿수의 토큰을 만들 수 있게 되었다!