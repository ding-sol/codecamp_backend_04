console.log("안녕하세요!!")

function createTokenOfPhone(myphone){
    // 1. 핸드폰번호 자릿수 맞는지 확인하기
    if(myphone.length !== 10 && myphone.length !==11) {  //!== : 다르면 // && : 그리고(앤드앤드 연산자)
        console.log("에러 발생!!! 핸드폰 번호를 제대로 입력해 주세요!!!")
        return
    } // 요런식으로 해당하는 조건이 아닌(다른) 경우 먼저 return 해서 쳐내버리는것을 early exit 패턴이라고 함 (리팩토링 패턴중의 하나)
      // 이렇게 early exit을 하면 코드가 갱장히 간결해짐
        
    // 2. 핸드폰 토큰 6자리 만들기
    const aaa = 6
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
    const result = String(Math.floor(Math.random() * 10 ** aaa)).padStart(aaa,"0")
    console.log(result)

    // 3. 핸드폰번호에 토큰 전송하기
    console.log(myphone + "번호로 인증번호" + result + "을 전송합니다!!!")
}

createTokenOfPhone("01012345678") 