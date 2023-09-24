// 1. 상세한 개념
// - 함수(Function): 독립적으로 존재하며, 특정 객체에 속하지 않는 코드 블럭입니다. 
//   전역 또는 함수 스코프 내에 선언될 수 있습니다.
// - 메서드(Method): 객체의 속성으로써 존재하는 함수를 의미합니다. 
//   메서드는 그 객체의 속성이나 메서드에 접근할 수 있으며, `this` 키워드를 통해 객체에 접근할 수 있습니다.

// 2. 개념을 충분히 이해할 수 있는 코드
// 함수 예제:
function greet() {
    console.log("Hello, this is a function.");
}

greet(); // "Hello, this is a function."

// 메서드 예제:
const person = {
    name: "John",
    greet: function() {
        console.log(`Hello, my name is ${this.name}, and this is a method.`);
    }
};

person.greet(); // "Hello, my name is John, and this is a method."

// 3. 개발자들이 많이 실수하는 부분 
// - `this` 키워드의 오용: 메서드 내에서 `this` 키워드는 객체 자신을 참조하지만, 
//   일반 함수에서 `this` 키워드는 전역 객체나 undefined를 참조할 수 있습니다.
// - 메서드를 일반 함수처럼 호출하는 실수: 메서드를 객체의 컨텍스트 없이 호출하면, `this`가 예상과 다르게 작동할 수 있습니다.
// - 함수와 메서드의 정의 혼용: 함수와 메서드의 차이점을 명확히 이해하지 않고 혼용하여 사용하는 경우가 있습니다.

