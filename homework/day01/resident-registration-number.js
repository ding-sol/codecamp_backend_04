// //1. 주민번호 가운데가 ”-”로 구성되어야 합니다. 
//     - 그렇지 않을 경우 에러 메세지를 콘솔에 출력해 주세요.
//         ex) ”에러 발생!!! 형식이 올바르지 않습니다!!!”
function checkHyphen(rrm) {
    if(rrm[6] !== "-") {
        console.log("에러 발생!!! 형식이 올바르지 않습니다!!!")
        return false
    } else {
        return true
    } 
}
        
// 2. 주민번호는 앞 6자리, 뒤 7자리로 구성되어야 합니다.
//     - 그렇지 않을 경우 에러 메세지를 콘솔에 출력해 주세요.        
//         ex) ”에러 발생!!! 개수를 제대로 입력해 주세요!!!”
function checkValidationNumber(rrm){
    const frontnumber = rrm.split("-")[0]
    const backnumber = rrm.split("-")[1]
    if(frontnumber.length !== 6 || backnumber.length !== 7) {
        console.log("에러 발생!!! 개수를 제대로 입력해 주세요!!!")
        return false
    } if(frontnumber.length == 6 && backnumber.length !== 7) {
        return true
    }
}
        
// 3. 뒤 7자리 중, 끝 6자리는 *로 변경해서 콘솔에 출력해 주세요.
function maskingNumber(rrm){
    const nonMasking = rrm.slice(0, 8)
    const result = nonMasking.padEnd(13, '*')
    console.log(result)
}

// 4. 함수는 퍼사드 패턴이 적용되어야 합니다. 
//     - 필요시 새로운 파일도 생성 가능합니다. - 파일명 자유
function customRegistrationNumber(rrm) {
    const hyphen = checkHyphen(rrm)
    if(hyphen === false) {
        return
    } 
    const isValid = checkValidationNumber(rrm)
    if(isValid === false) {
        return
    }
    maskingNumber(rrm)

}

customRegistrationNumber("210510-1010101010101")