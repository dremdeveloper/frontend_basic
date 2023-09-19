// 1. 상세한 개념
// - 얕은 복사(Shallow Copy): 객체의 최상위 프로퍼티만 복사하는 방법입니다. 
//   이 방법을 사용하면 중첩된 객체의 경우, 복사본과 원본이 동일한 내부 객체를 참조하게 됩니다.
// - 깊은 복사(Deep Copy): 객체의 모든 레벨의 프로퍼티를 복사하는 방법입니다. 
//   이 방법을 사용하면, 복사본과 원본이 완전히 독립적이 됩니다, 중첩된 객체까지 새로운 복사본이 생성됩니다.

// 2. 개념을 충분히 이해할 수 있는 코드
// 얕은 복사 예제:
const shallowOriginal = { name: 'Alice', details: { age: 25 } };
const shallowCopy = { ...shallowOriginal };

shallowCopy.name = 'Bob';
shallowCopy.details.age = 26;

console.log(shallowOriginal.name); // 'Alice'
console.log(shallowOriginal.details.age); // 26

// 깊은 복사 예제:
const deepOriginal = { name: 'Charlie', details: { age: 30 } };
const deepCopy = JSON.parse(JSON.stringify(deepOriginal));

deepCopy.name = 'Dave';
deepCopy.details.age = 31;

console.log(deepOriginal.name); // 'Charlie'
console.log(deepOriginal.details.age); // 30

// 3. 개발자들이 많이 실수하는 부분 
// - 깊은 복사와 얕은 복사의 차이를 인지하지 못하는 경우: 개발자들은 때때로 깊은 복사와 얕은 복사의 차이점을 무시하곤 합니다.
// - 얕은 복사로 중첩된 객체를 복사하는 경우: 얕은 복사를 사용하면 중첩된 객체의 경우, 복사본과 원본이 동일한 내부 객체를 참조하게 됩니다, 이로 인해 버그가 발생할 수 있습니다.
// - JSON 메서드를 사용한 깊은 복사의 한계: JSON.parse와 JSON.stringify를 사용하여 깊은 복사를 수행할 때, 
//   메서드나 순환 참조가 있는 객체 등 일부 데이터 유형이 제대로 복사되지 않을 수 있습니다.

