// 1. 기본 화살표 함수
const add = (a, b) => a + b;

// 위의 화살표 함수는 다음의 기본 함수와 동일합니다:
// function add(a, b) {
//     return a + b;
// }

console.log(add(2, 3));  // 5

// 2. 하나의 인수만 받는 화살표 함수
const square = x => x * x;

// 위의 화살표 함수는 다음의 기본 함수와 동일합니다:
// function square(x) {
//     return x * x;
// }

console.log(square(4));  // 16

// 3. 인수가 없는 화살표 함수
const greet = () => console.log("Hello!");

// 위의 화살표 함수는 다음의 기본 함수와 동일합니다:
// function greet() {
//     console.log("Hello!");
// }

greet();  // Hello!

// 4. 본문(body)이 여러 줄인 화살표 함수
const multiply = (a, b) => {
    const result = a * b;
    console.log(`${a} multiplied by ${b} equals ${result}`);
    return result;
};

console.log(multiply(3, 4));  // 3 multiplied by 4 equals 12, 12

/*
    도식화:

    (a, b) => a + b
       |
       V
    function(a, b) {
        return a + b;
    }

    위의 도식화는 화살표 함수와 기본 함수 표현의 대응 관계를 나타냅니다.
*/

// 5. `this` 바인딩에 대한 차이점
// 화살표 함수는 자신만의 `this`를 가지지 않습니다.
// 따라서 화살표 함수 내부에서 `this`를 참조하면, 화살표 함수를 둘러싼 외부 함수의 `this`값을 그대로 가져옵니다.

function Timer() {
    this.seconds = 0;
    setInterval(() => this.seconds++, 1000);  // 화살표 함수 사용
}

const timer = new Timer();

setTimeout(() => console.log(timer.seconds), 3100);  // 약 3초 후에 3이 출력됩니다.

// 위의 코드에서 화살표 함수를 사용하므로 setInterval 내부의 `this`는 Timer 객체를 참조합니다.
