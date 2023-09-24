// 1. 상세한 개념
// 자바스크립트에서 레퍼런스 타입은 객체가 메모리에 저장된 위치를 참조하는 타입을 의미합니다. 
// 이와 대조적으로, 원시 타입(문자열, 숫자, 불리언 등)은 변수에 실제 값을 저장합니다. 
// 레퍼런스 타입의 변수는 메모리 상의 객체 위치를 가리키는 참조값을 저장합니다.
// 따라서 레퍼런스 타입 변수를 다른 변수에 할당하면, 새 변수도 같은 객체를 참조하게 됩니다.

// 2. 개념을 충분히 이해할 수 있는 코드
const obj1 = { name: 'Alice' };
const obj2 = obj1;

console.log(obj1.name); // 'Alice'
console.log(obj2.name); // 'Alice'

obj2.name = 'Bob';

console.log(obj1.name); // 'Bob' - obj1도 영향을 받았음을 확인할 수 있습니다.
console.log(obj2.name); // 'Bob'

// 원시 타입 예시:
let prim1 = 42;
let prim2 = prim1;

prim2 = 43;

console.log(prim1); // 42 - 원시 타입 변수는 값이 복사되어 영향을 받지 않습니다.
console.log(prim2); // 43

// 3. 개발자들이 많이 실수하는 부분
// - 레퍼런스 타입 할당 시 객체 복사의 오해: 레퍼런스 타입을 다른 변수에 할당할 때, 
//   개발자들은 종종 실제 객체가 복사된다고 오해할 수 있습니다.
// - 깊은 복사와 얕은 복사의 차이를 이해하지 못하는 경우: 객체의 복사 방법에는 깊은 복사와 얕은 복사가 있는데, 
//   이 둘의 차이를 이해하지 못하면 예상치 못한 버그가 발생할 수 있습니다.
// - 뮤테이션(mutation)으로 인한 버그: 레퍼런스 타입 변수를 변경(뮤테이션)할 때, 
//   다른 변수들도 영향을 받을 수 있으며, 이러한 부작용으로 인해 버그가 발생할 수 있습니다.

