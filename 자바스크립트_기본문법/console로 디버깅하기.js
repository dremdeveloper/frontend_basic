// `console` 객체를 활용하는 방법

// 1. 기본 로깅
console.log("This is a basic log message.");

// 2. 스타일링이 적용된 로깅
console.log('%c Styled Log!', 'color: blue; font-weight: bold;');

// 3. 경고 메시지
console.warn("This is a warning.");

// 4. 에러 메시지
console.error("This is an error message.");

// 5. 정보 메시지
console.info("This is an informational message.");

// 6. 테이블 형식으로 객체나 배열을 표시
const people = [
    { name: 'John', age: 30 },
    { name: 'Doe', age: 25 }
];
console.table(people);

// 7. 그룹화된 로그 메시지 (collapsible)
console.group('Grouped logs');
console.log("This is log 1 inside the group");
console.log("This is log 2 inside the group");
console.groupEnd();

// 8. 계산 시간을 측정
console.time('Log time');
//... some operations
console.timeEnd('Log time');

// 9. 객체의 속성 검사
const person = { name: "John", age: 30, job: "Developer" };
console.dir(person);

// 10. 조건에 따른 단언(assertion)
console.assert(false, "This will display since the condition is false");
console.assert(true, "This won't display since the condition is true");

// 11. 특정한 카운트에 대한 로그 출력
console.count('counter');
console.count('counter');
console.count('counter');

// 12. 스택 추적 출력
console.trace('Trace this');

// 13. 콘솔 지우기
// console.clear();  // 주의: 이것은 콘솔의 모든 로그를 지웁니다.

/*
    도식화:

    console.log()   ---------------> [ 출력 ]
    console.warn()  ---------------> [ 경고 출력 ]
    console.error() ---------------> [ 에러 출력 ]
    console.info()  ---------------> [ 정보 출력 ]
    console.table() ---------------> [ 테이블 형태 출력 ]
    console.group() ---------------> [ 그룹화된 로그 시작 ]
    console.groupEnd() -----------> [ 그룹화된 로그 종료 ]
    console.time()  ---------------> [ 시간 측정 시작 ]
    console.timeEnd() -----------> [ 시간 측정 종료 및 출력 ]
    console.dir()   ---------------> [ 객체의 속성 출력 ]
    console.assert() -------------> [ 조건에 따른 단언 ]
    console.count() ---------------> [ 카운트 출력 ]
    console.trace() ---------------> [ 스택 추적 출력 ]
    console.clear() ---------------> [ 콘솔 지우기 ]

    위의 도식화는 console의 여러 메서드들이 어떤 출력을 생성하는지 나타냅니다.
*/

