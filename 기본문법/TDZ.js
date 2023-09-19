// 1. 상세한 개념
// - "TDZ(Temporal Dead Zone)"는 변수가 선언되기 전까지의 코드 영역을 나타냅니다. let과 const 키워드로 선언된 변수는 선언 전에 접근할 수 없으며, 이러한 영역을 TDZ라고 합니다. TDZ는 변수가 실제로 선언되기 전까지 존재하며, 변수에 접근하려고 시도하면 오류가 발생합니다.

// 2. 개념을 충분히 이해할수 있는 코드
{
    console.log(myVar); // undefined: var 키워드로 선언된 변수는 호이스팅되어 선언 전에 접근 가능합니다.
    console.log(myLet); // ReferenceError: myLet is not defined - TDZ에 의해 접근 불가능
    console.log(myConst); // ReferenceError: myConst is not defined - TDZ에 의해 접근 불가능
    
    var myVar = "This is a var variable";
    let myLet = "This is a let variable";
    const myConst = "This is a const variable";
  }
  
  // 3. 개발자들이 많이 실수하는 부분 
  // - 개발자들은 종종 let과 const 변수가 선언되기 전에 접근하려고 시도하며, 이로 인해 TDZ 관련 오류가 발생합니다.
  // - var로 선언된 변수와 let, const로 선언된 변수 간의 호이스팅 및 TDZ 동작 차이를 혼동할 수 있습니다. 
  // - 초기화 없이 변수 선언 후 사용하는 경우, undefined 또는 TDZ 오류를 경험할 수 있습니다.
  