// 함수형 프로그래밍(Functional Programming)은 프로그래밍 패러다임 중 하나로, 
// 순수 함수(pure functions)와 불변성(immutability), 고차 함수(higher-order functions) 등의 
// 개념을 중심으로 프로그램을 작성하는 방법입니다. 이 방법은 코드의 예측 가능성과 유지보수성을 
// 향상시킬 수 있습니다.

// 1. 상세한 개념
// - 순수 함수 (Pure Functions): 같은 입력에 대해 항상 같은 출력을 반환하고, 외부 상태를 변경하지 않는 함수입니다.
// - 불변성 (Immutability): 데이터의 상태를 직접 변경하지 않고, 새로운 데이터를 생성하여 반환합니다.
// - 고차 함수 (Higher-Order Functions): 함수를 인자로 받거나 함수를 반환하는 함수입니다.

// 2. 개념을 충분히 이해할 수 있는 코드
const numbers = [1, 2, 3, 4, 5];

// 순수 함수 예제: 입력이 동일하면 출력도 동일합니다.
const square = (number) => number * number;

// 불변성 예제: 배열의 상태를 직접 변경하지 않고, map 메서드를 통해 새 배열을 반환합니다.
const squaredNumbers = numbers.map(square);

console.log(squaredNumbers); // [1, 4, 9, 16, 25]

// 고차 함수 예제: filter는 고차 함수입니다. 함수를 인자로 받아 새로운 배열을 반환합니다.
const isEven = (number) => number % 2 === 0;
const evenNumbers = numbers.filter(isEven);

console.log(evenNumbers); // [2, 4]

// 3. 개발자들이 많이 실수하는 부분
// - 부수 효과(Side Effects)를 가지는 함수 사용: 순수 함수를 사용함으로써 방지할 수 있습니다.
// - 불변성을 깨트리는 코드 작성: 불변성을 유지하면서 코드를 작성하는 연습이 필요합니다.
// - 고차 함수의 잘못된 사용: 고차 함수를 올바르게 사용하여 코드의 재사용성과 가독성을 향상시킵니다.

