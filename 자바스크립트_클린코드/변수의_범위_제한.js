// 변수의 범위를 제한하기 위한 방법을 이해하기 위한 코드 예시

// 1. 전역 변수는 피하는 것이 좋다.
// 전역 변수는 어디서든 접근이 가능하기 때문에 예상치 못한 오류를 유발할 수 있다.
// 이런 변수는 코드 전체에서 사용되기 때문에 관리가 어렵다.

// 나쁜 예:
globalVar = "I am a global variable"; // var 키워드 없이 선언된 변수는 전역 변수가 된다.

// 좋은 예:
let globalLimitVar = "I am a variable with limited global scope"; // let으로 선언하면 블록 수준의 범위를 가진다.

// 2. 가능하면 const를 사용하라.
// const는 한 번 값이 할당되면 변경될 수 없다. 
// 이렇게 해서 변수가 예상치 못한 변경으로부터 보호될 수 있다.

const PI = 3.141592; // 이 값은 절대로 변경되지 않는다.

// 3. let을 사용하여 변수의 범위를 제한하라.
// let은 블록 수준의 범위를 가지기 때문에, for 루프나 if 문 내에서 변수를 선언할 때 특히 유용하다.

// 나쁜 예:
for (var i = 0; i < 5; i++) {
    // ... do something ...
}
// 여기서 i는 여전히 접근 가능하다.

// 좋은 예:
for (let j = 0; j < 5; j++) {
    // ... do something ...
}
// 여기서 j는 접근 불가능하다.

// 결론: 가능한 한 변수의 범위를 제한하여 코드의 예측 가능성을 높이고 오류를 최소화하자. 
// let과 const는 이 목적에 매우 유용한 도구이다.
