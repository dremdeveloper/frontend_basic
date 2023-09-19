// 자바스크립트 클로저 예시 코드

// 1. 상세한 개념
// 클로저(closure)는 내부 함수가 외부 함수의 변수를 참조할 때 발생하는 현상입니다. 
// 내부 함수는 외부 함수의 변수뿐만 아니라, 매개변수에도 접근할 수 있습니다.
// 이러한 특성 때문에, 클로저는 데이터 은닉, 모듈화 등 다양한 프로그래밍 패턴을 가능하게 합니다.

// 2. 개념을 충분히 이해할 수 있는 코드

// 2.1 기본 클로저 예시
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
      console.log('outer variable: ' + outerVariable);
      console.log('inner variable: ' + innerVariable);
    };
  }
  
  const newFunction = outerFunction('outside');
  newFunction('inside'); // 출력: outer variable: outside
                         // 출력: inner variable: inside
  
  // 2.2 데이터 은닉을 위한 클로저 사용
  function createCounter() {
    let count = 0;
    return {
      increment: function() {
        count++;
      },
      getCount: function() {
        return count;
      }
    };
  }
  
  const counter = createCounter();
  counter.increment();
  console.log(counter.getCount()); // 출력: 1
  console.log(counter.count);      // 출력: undefined (count 변수는 외부에서 접근 불가)
  
  // 3. 개발자들이 많이 실수하는 부분 
  
  // 3.1 클로저와 루프: 클로저와 루프를 함께 사용할 때 발생하는 고전적인 실수입니다. 
  for (var i = 0; i < 5; i++) {
    setTimeout(function() {
      console.log(i); // 출력: 5 (5번 출력)
    }, i * 100);
  }
  
  // 위의 문제를 해결하기 위해, 즉시 실행 함수를 사용할 수 있습니다.
  for (var i = 0; i < 5; i++) {
    (function(i) {
      setTimeout(function() {
        console.log(i); // 출력: 0, 1, 2, 3, 
  