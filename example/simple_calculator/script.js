/* JavaScript의 로직은 아래와 같습니다.
   - 사용자가 "더하기" 버튼을 클릭하면 calculate 함수가 실행됩니다.
   - calculate 함수는 입력필드의 값을 숫자로 변환하고 더합니다.
   - 그리고 결과를 <p> 태그의 텍스트로 설정합니다.
*/

function calculate() {
    // 입력 필드의 값을 가져옵니다.
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    // 두 수를 더합니다.
    const sum = num1 + num2;

    // 결과를 출력합니다.
    document.getElementById('result').textContent = "결과: " + sum;
}
