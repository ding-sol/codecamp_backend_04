console.log("안녕하세요!!")

function getToken(aaa){
    // undefined
    // null

    if(aaa === undefined) {
        console.log("에러 발생!!! 갯수를 제대로 입력해 주세요!!!")
        return
    } else if(aaa <= 0) {
        console.log("에러 발생!!! 갯수가 너무 적습니다!!!")
        return
    } else if(aaa > 10) {
        console.log("에러 발생!!! 갯수가 너무 많습니다!!!")
        return
    }
    // 위 모든 상황에 해당되지 않을 때만 아래처럼 토큰을 만들어서 화면에 출력한다
    // 보다 안전한 코드를 만들 수 있게 되었다! ^ㅇ^
    const result = String(Math.floor(Math.random() * 10 ** aaa)).padStart(aaa,"0")
    console.log(result)
}

getToken(20) 