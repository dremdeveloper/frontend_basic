// math.js 라이브러리를 사용하여 문자열로 된 수식을 안전하게 계산하는 방법에 대한 설명과 예제입니다.

// 1. math.js는 수학과 수치 연산을 위한 포괄적인 라이브러리입니다.
// 2. 안전한 문자열 평가를 위해 evaluate 함수를 사용할 수 있습니다.

// math.js 라이브러리의 가져오기
// const math = require('mathjs'); // Node.js에서 사용할 경우
// <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/9.5.0/math.min.js"></script> // 브라우저에서 사용할 경우

function calculateExpression(expression) {
    try {
        return math.evaluate(expression);
    } catch (error) {
        console.error("Invalid expression:", expression);
        return null;
    }
}

// 사용 예시:
const expression = "2 + 3 * 4";
const result = calculateExpression(expression);
console.log(`Result of ${expression} is ${result}`);
