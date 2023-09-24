// 자바스크립트 문자열 처리 예시코드

// 1. 상세한 개념
// 문자열은 텍스트 데이터를 저장하고 처리하는 데 사용됩니다. 자바스크립트에서는 여러가지 내장 메서드를 제공하여 
// 문자열을 조작하고 정보를 검색할 수 있습니다.

// 2. 개념을 충분히 이해할수 있는 코드
// 2.1 문자열 연결
const str1 = "Hello";
const str2 = "World";
const greeting = str1 + " " + str2;
console.log(greeting); // 출력: Hello World

// 2.2 문자열 길이
const length = greeting.length;
console.log(length); // 출력: 11

// 2.3 문자열 대/소문자 변환
console.log(greeting.toLowerCase()); // 출력: hello world
console.log(greeting.toUpperCase()); // 출력: HELLO WORLD

// 2.4 문자열 일부 추출
console.log(greeting.substring(0, 5)); // 출력: Hello
console.log(greeting.slice(-5)); // 출력: World

// 2.5 문자열 찾기
console.log(greeting.indexOf('World')); // 출력: 6
console.log(greeting.includes('World')); // 출력: true

// 3. 개발자들이 많이 실수하는 부분
// 3.1 문자열과 숫자의 연산: 문자열과 숫자를 함께 연산하면, 자바스크립트는 숫자를 문자열로 자동 변환하여 처리합니다. 
//      이로 인해 예상치 못한 결과가 발생할 수 있습니다.
const unexpectedResult = "123" + 4;
console.log(unexpectedResult); // 출력: 1234 (문자열)

// 3.2 변경 불가능한 문자열: 자바스크립트에서 문자열은 변경할 수 없습니다. 문자열 메서드는 항상 새 문자열을 반환하며 원본 문자열은 변경되지 않습니다.
const originalString = "Hello";
const newString = originalString.replace("H", "J");
console.log(originalString); // 출력: Hello (원본 문자열은 변경되지 않음)
console.log(newString); // 출력: Jello

// 3.3 indexOf 메서드 사용 시 주의: 'indexOf' 메서드는 문자열이 없을 때 -1을 반환합니다. 이를 확인하지 않고 사용하면 버그가 발생할 수 있습니다.
if (greeting.indexOf("World")) {
  console.log("Found"); // 이 코드는 실행되지 않습니다, 왜냐하면 'indexOf'가 0이 아닌 값을 반환하기 때문입니다.
} else {
  console.log("Not Found"); // 출력: Not Found
}
