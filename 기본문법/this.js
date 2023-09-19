// 1. 상세한 개념
// - 'this'는 자바스크립트에서 특별한 키워드로, 현재 컨텍스트(실행 환경)의 객체를 참조합니다. 함수 내에서 'this'의 값은 호출 방법에 따라 달라집니다. 
// - 객체 메서드 내에서 'this'는 그 객체를 참조하며, 단독 함수에서 'this'는 전역 객체 또는 undefined(엄격 모드에서)를 참조합니다.

// 2. 개념을 충분히 이해할수 있는 코드
const person = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`;
  }
};

function showThis() {
  'use strict';
  console.log(this);
}

console.log(person.getFullName()); // "John Doe": 여기에서 'this'는 'person' 객체를 참조합니다.
showThis(); // undefined: 여기에서 'this'는 undefined이며, 'use strict' 모드 때문입니다.

// 3. 개발자들이 많이 실수하는 부분 
// - 'this'의 값은 함수가 호출된 방식에 따라 달라지므로, 특히 콜백 함수나 이벤트 핸들러 내에서 'this'의 값을 예측하기 어려울 수 있습니다.
// - 화살표 함수에서는 'this'가 렉시컬 컨텍스트를 가지므로, 일반 함수와 'this'의 작동 방식이 다릅니다.
// - 개발자들은 종종 'this'의 동작을 잘못 이해하거나 예측하여, 버그가 발생할 수 있습니다.
