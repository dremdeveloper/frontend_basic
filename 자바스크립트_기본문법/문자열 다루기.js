// 자바스크립트 문자열 메서드

// 1. 문자열 길이 얻기
const str = "Hello, World!";
console.log(str.length); // 출력: 13

// 2. 문자열에서 특정 문자열 찾기
const position = str.indexOf("World");
console.log(position); // 출력: 7

// 3. 문자열에서 특정 문자열 뒤쪽부터 찾기
const lastPosition = str.lastIndexOf("o");
console.log(lastPosition); // 출력: 8

// 4. 문자열에서 특정 문자열 포함 여부 확인 (ES6 이후)
const includes = str.includes("Hello");
console.log(includes); // 출력: true

// 5. 문자열 시작하는지 확인
const starts = str.startsWith("Hello");
console.log(starts); // 출력: true

// 6. 문자열 끝나는지 확인
const ends = str.endsWith("!");
console.log(ends); // 출력: true

// 7. 문자열 대체
const replaced = str.replace("World", "JavaScript");
console.log(replaced); // 출력: "Hello, JavaScript!"

// 8. 문자열을 대문자로
const upper = str.toUpperCase();
console.log(upper); // 출력: "HELLO, WORLD!"

// 9. 문자열을 소문자로
const lower = str.toLowerCase();
console.log(lower); // 출력: "hello, world!"

// 10. 문자열 잘라내기
const sliced = str.slice(7, 12);
console.log(sliced); // 출력: "World"

// 11. 문자열 분리하기
const splitted = str.split(", ");
console.log(splitted); // 출력: ["Hello", "World!"]

// 12. 문자열 앞뒤 공백 제거
const trimmed = "   Hello, World!   ".trim();
console.log(trimmed); // 출력: "Hello, World!"

/*
    도식화:

    str.length  ------------------> [ 문자열 길이 ]
    str.indexOf()  ---------------> [ 문자 위치 ]
    str.includes() ---------------> [ 포함 여부 ]
    ...and so on.

    위의 도식화는 문자열 메서드가 어떤 출력을 생성하는지 나타냅니다.
*/

