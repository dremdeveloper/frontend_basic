// 1. 상세한 개념
// - "호이스팅(Hoisting)"은 자바스크립트 엔진이 변수 및 함수 선언을 코드의 최상단으로 '끌어올린다'는 개념입니다. 
//   이 때, 변수의 선언만 올라가고 할당은 올라가지 않습니다. 
// - var 키워드로 선언된 변수와 함수 선언식은 호이스팅이 적용되지만, let과 const 키워드로 선언된 변수는 
//   TDZ(Temporal Dead Zone)의 영향을 받아 호이스팅이 다르게 동작합니다.

// 2. 개념을 충분히 이해할수 있는 코드
function exampleFunction() {
    console.log(myVar); // 출력: undefined (선언은 호이스팅되었지만, 할당은 아직 이루어지지 않았습니다.)
    console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization (TDZ에 있습니다.)
    console.log(myFunction); // 출력: function myFunction (함수 선언은 전체가 호이스팅됩니다.)
  
    var myVar = "var variable";
    let myLet = "let variable";
  
    function myFunction() {
      console.log("Hello, world!");
    }
  }
  
  exampleFunction();
  
  // 3. 개발자들이 많이 실수하는 부분 
  // - var로 선언된 변수의 경우, 선언만 호이스팅되고 초기화는 호이스팅되지 않아 undefined가 출력되는 것을 놓칠 수 있습니다.
  // - let과 const로 선언된 변수가 TDZ에 있을 때 접근하려는 시도, 이로 인해 발생하는 오류를 간과할 수 있습니다.
  // - 함수 표현식과 함수 선언식의 호이스팅 차이를 이해하지 못하고 코드를 작성할 때, 예상치 못한 결과나 오류가 발생할 수 있습니다.
  