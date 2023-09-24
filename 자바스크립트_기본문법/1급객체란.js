// 1. 상세한 개념
// 자바스크립트에서 함수는 1급 객체로 취급됩니다. 이것은 함수가 다른 객체들처럼 특징을 가지고 있음을 의미합니다.
// 이러한 특징들은 다음과 같습니다:
// - 함수를 변수에 할당할 수 있습니다.
// - 함수를 인자로 다른 함수에 전달할 수 있습니다.
// - 함수에서 다른 함수를 반환할 수 있습니다.
// - 함수를 객체의 속성으로 설정할 수 있습니다.

// 2. 개념을 충분히 이해할 수 있는 코드
// 함수를 변수에 할당하는 예제:
const greet = function() {
    console.log("Hello, world!");
  };
  
  greet(); // "Hello, world!"
  
  // 함수를 인자로 다른 함수에 전달하는 예제:
  function callFunction(fn) {
    fn();
  }
  
  callFunction(greet); // "Hello, world!"
  
  // 함수에서 다른 함수를 반환하는 예제:
  function createGreeting(name) {
    return function() {
      console.log("Hello, " + name);
    };
  }
  
  const greetJohn = createGreeting("John");
  greetJohn(); // "Hello, John"
  
  // 함수를 객체의 속성으로 설정하는 예제:
  const obj = {
    method: function() {
      console.log("I am a method inside an object");
    }
  };
  
  obj.method(); // "I am a method inside an object"
  
  // 3. 개발자들이 많이 실수하는 부분 
  // - 함수와 메서드의 차이점을 이해하지 못하는 경우: 메서드는 객체의 속성으로 설정된 함수입니다.
  // - 고차 함수의 사용에서 혼동: 함수를 인자로 받거나 반환하는 고차 함수를 작성할 때, 실수로 함수 실행 결과를 전달하는 경우가 있습니다.
  // - 함수의 스코프와 클로저에 대한 이해 부족: 함수가 선언된 위치에 따라 접근할 수 있는 변수가 달라지며, 클로저를 통해 외부 스코프의 변수를 "기억"할 수 있습니다.
  