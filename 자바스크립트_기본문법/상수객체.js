// 1. 상세한 개념
// - "상수 객체"란 const 키워드를 사용하여 선언된 객체를 의미합니다. 
//   이러한 객체의 참조(즉, 변수 자체)는 변경할 수 없지만, 객체의 속성은 변경할 수 있습니다.
// - 이러한 성질 때문에 객체의 불변성을 유지하려면 추가적인 조치가 필요합니다.

// 2. 개념을 충분히 이해할수 있는 코드
const constantObject = { name: "Alice" };
console.log(constantObject); // 출력: { name: 'Alice' }

// constantObject = { name: "Bob" }; // TypeError: Assignment to constant variable (참조 변경 불가)
constantObject.name = "Bob"; // 속성 변경 가능
console.log(constantObject); // 출력: { name: 'Bob' }

// 3. 개발자들이 많이 실수하는 부분 
// - 상수 객체를 선언할 때, 그 참조를 변경할 수 없다고 착각하여 객체 내부의 속성도 변경할 수 없다고 착각하는 경우가 많습니다.
// - 객체의 불변성을 유지하려면 Object.freeze() 등의 메서드를 사용하여 객체를 깊게 동결해야 하며, 이러한 부분을 놓치기 쉽습니다.
// - 상수 객체 선언 후에도 속성 추가/삭제가 가능하다는 것을 간과하여, 의도치 않은 객체 변형이 발생할 수 있습니다.
