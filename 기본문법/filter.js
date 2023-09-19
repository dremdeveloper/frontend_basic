// 1. 상세한 개념
// "filter" 함수는 배열의 각 요소를 테스트하고, 테스트를 통과하는 모든 요소로 새 배열을 생성합니다.
// 이 함수는 배열에서 특정 조건을 만족하는 요소만을 추출할 때 사용합니다.

// 2. 개념을 충분히 이해할수 있는 코드
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 짝수만 추출하는 예
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // 출력: [2, 4, 6, 8, 10]

// 5보다 큰 수만 추출하는 예
const greaterThanFive = numbers.filter(num => num > 5);
console.log(greaterThanFive); // 출력: [6, 7, 8, 9, 10]

// 3. 개발자들이 많이 실수하는 부분
// - 콜백 함수가 boolean 값을 반환하지 않는 경우: filter 함수의 콜백 함수는 반드시 boolean 값을 반환해야 합니다. 그렇지 않으면, 필터링이 제대로 작동하지 않을 수 있습니다.
// - 원본 배열 수정: filter 함수를 사용하면서 원본 배열을 수정하는 것은 부작용을 발생시킬 수 있으며, 버그의 원인이 될 수 있습니다.
