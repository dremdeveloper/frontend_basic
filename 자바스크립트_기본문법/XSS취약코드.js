// 1. 상세한 개념
// - XSS(Cross-Site Scripting)는 웹 애플리케이션의 보안 취약점 중 하나로, 공격자가 악성 스크립트를 
//   웹 페이지에 삽입할 수 있게 하는 공격 방법입니다. 
// - 이러한 악성 스크립트는 사용자의 브라우저에서 실행되며, 쿠키, 세션 토큰 등을 탈취하거나 다른 악성 행위를 할 수 있습니다.
// - XSS는 주로 세 가지 유형으로 나누어집니다: 저장형 XSS, 반사형 XSS, DOM 기반 XSS.

// 2. 개념을 충분히 이해할수 있는 코드

// 취약한 코드 예제 1: 사용자 입력을 검증하지 않고 직접 DOM에 삽입
let userComment = "<script>alert('XSS Attack');</script>"; // 악성 코드 포함된 사용자 입력
document.body.innerHTML = userComment; // DOM에 직접 삽입, XSS 공격에 취약

// 보완된 코드 예제 1: 사용자 입력을 이스케이프하여 삽입
userComment = "<script>alert('XSS Attack');</script>";
document.body.textContent = userComment; // textContent를 사용하여 이스케이프 처리

// 취약한 코드 예제 2: URL 파라미터를 검증하지 않고 사용
const userURL = "/?url=javascript:alert('XSS');";
window.location.href = userURL; // 취약한 코드

// 보완된 코드 예제 2: URL 파라미터를 검증하여 사용
const safeURL = new URL(userURL, window.location.origin);
window.location.href = safeURL.href; // 안전한 코드

// 취약한 코드 예제 3: inline event handler에 사용자 입력을 사용
const maliciousInput = "alert('XSS Attack')";
document.body.innerHTML = `<button onclick="${maliciousInput}">Click Me</button>`; // 취약한 코드

// 보완된 코드 예제 3: addEventListener를 사용하여 이벤트 핸들러를 안전하게 연결
const button = document.createElement('button');
button.textContent = "Click Me";
button.addEventListener('click', () => {
    alert('Safe Click Handler');
});
document.body.appendChild(button); // 안전한 코드

// 취약한 코드 예제 4: eval 함수 사용
let userInput = "alert('XSS Attack');";
eval(userInput); // eval 함수를 사용하여 사용자 입력을 직접 실행, XSS 공격에 취약

// 보완된 코드 예제 4: eval 대신 안전한 방법 사용
// 대신 JSON.parse 또는 다른 안전한 방법을 사용하여 사용자 입력을 처리해야 합니다.

// 취약한 코드 예제 5: innerHTML 사용
userInput = "<script>alert('XSS Attack');</script>";
document.body.innerHTML = userInput; // innerHTML을 사용하여 사용자 입력을 직접 DOM에 삽입, XSS 공격에 취약

// 보완된 코드 예제 5: innerHTML 대신 textContent 사용
userInput = "<script>alert('XSS Attack');</script>";
document.body.textContent = userInput; // textContent를 사용하여 XSS 공격을 방지


// 3. 개발자들이 많이 실수하는 부분 
// - 사용자 입력 검증 부재: 사용자 입력을 그대로 사용하면서 검증이나 이스케이프 처리를 하지 않음
// - 오래된 라이브러리나 프레임워크 사용: 보안 업데이트가 이루어지지 않는 오래된 라이브러리나 프레임워크 사용
// - 내부 리소스에 대한 직접적인 참조: 사용자 입력을 통해 내부 리소스에 직접적으로 참조할 수 있게 하는 실수
