// 코드 예시 시작

// ❌ 좋지 않은 예:
const maxUsers = 100;
const apiUrl = "https://api.example.com/data";

function checkUsers(usersCount) {
    if (usersCount > maxUsers) {
        console.error("사용자 수가 너무 많습니다.");
    }
}

/*
- 'maxUsers'와 'apiUrl'은 상수이지만, 상수로써의 특별한 명명 규칙을 따르지 않고 있다.
- 이런 방식의 명명은 변수와 혼동될 수 있어, 코드의 가독성을 떨어트릴 수 있다.
*/

// ✅ 좋은 예:
const MAX_USERS = 100;
const API_URL = "https://api.example.com/data";

function checkUsersBetter(usersCount) {
    if (usersCount > MAX_USERS) {
        console.error("사용자 수가 너무 많습니다.");
    }
}

/* 
- 상수 'MAX_USERS'와 'API_URL'은 대문자와 언더스코어를 사용하여 명명되었다.
- 이런 방식으로 명명하면, 상수임을 명확하게 알 수 있으며, 코드의 가독성이 향상된다.
- 다른 개발자들이 코드를 볼 때, 해당 값이 변경되어서는 안 되는 상수임을 쉽게 인식할 수 있다.
- 일반적으로, 상수는 프로그램 실행 중에 변경되어서는 안 되는 값을 의미하므로 대문자와 언더스코어를 사용하여 명명하는 것이 좋다.
*/

// 코드 예시 끝
