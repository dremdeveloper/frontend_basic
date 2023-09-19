// 1. 상세한 개념

// 1.1 보호절(Guard Clause)
// 보호절은 함수나 조건문의 시작부에서 발생할 수 있는 예외 상황을 먼저 검사하여, 
// 나머지 코드가 실행되기 전에 조기에 반환하거나 예외를 발생시키는 코드 패턴입니다.
 
// 1.2 조기반환(Early Return)
// 조기반환은 특정 조건이 충족되면 함수에서 조기에 반환함으로써, 
// 불필요한 코드 실행을 방지하고 코드의 가독성을 높이는 패턴입니다.

// 1.3 모듈 패턴(Module Pattern)
// 모듈 패턴은 코드의 재사용성을 높이고, 글로벌 스코프의 오염을 방지하기 위해 관련된 기능들을 모듈로 묶는 패턴입니다.

// 2. 개념을 충분히 이해할수 있는 코드

// 2.1 보호절 예시
function getPersonInfo(person) {
    if (!person) {
      throw new Error("Person object is required");
    }
    // ...
  }
  
  // 2.2 조기반환 예시
  function findUser(users, userId) {
    if (!users || users.length === 0) {
      return null;
    }
  
    for (let user of users) {
      if (user.id === userId) {
        return user;
      }
    }
    
    return null;
  }
  

  
  // 2.3 모듈 패턴 예시
  const myModule = (function () {
    const privateVariable = 42;
    function privateMethod() {
      console.log('I am private method');
    }
  
    return {
      publicMethod: function () {
        privateMethod();
        console.log(`The value is: ${privateVariable}`);
      }
    };
  })();
  
  myModule.publicMethod(); // Output: I am private method, The value is: 42
  