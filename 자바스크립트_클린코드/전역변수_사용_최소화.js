// 코드 예시 시작

// ❌ 좋지 않은 예:
let username = "John Doe";
let age = 30;

function displayUserInfo() {
    console.log(`이름: ${username}, 나이: ${age}`);
}

displayUserInfo();

/*
- 위의 코드에서 'username'과 'age'는 전역 변수로 선언되어 있다.
- 전역 변수는 어디서든 접근할 수 있기 때문에 예기치 않은 수정이나 오류의 원인이 될 수 있다.
- 특히 큰 프로젝트에서는 여러 코드 사이에서 전역 변수가 변경될 가능성이 높아진다.
*/

// ✅ 좋은 예:
function displayUserInfoBetter() {
    let username = "John Doe";
    let age = 30;

    console.log(`이름: ${username}, 나이: ${age}`);
}

displayUserInfoBetter();

/* 
- 'username'과 'age' 변수는 이제 'displayUserInfoBetter' 함수 내의 지역 변수로 존재한다.
- 이렇게 지역 변수로 선언하면, 함수 외부에서 해당 변수를 직접 수정할 수 없게 되므로 데이터의 안정성이 높아진다.
- 코드가 예측 가능해지며, 유지보수가 쉬워진다.
- 가능한 한 전역 변수 사용을 최소화하고, 필요한 데이터는 함수 내부나 객체 내부에 캡슐화하는 것이 좋다.
*/

// 코드 예시 끝
