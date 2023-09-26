// 코드 예시 시작

// ❌ 좋지 않은 예:
let users = ["John", "Jane", "Doe"];
for (let i = 0; i < users.length; i++) {
    if (users[i] === "Jane") {
        users.splice(i, 1);  // 배열에서 "Jane"을 제거
    }
    console.log(users[i]);
}

/*
- 위의 코드는 루프 내에서 배열 'users'의 내용을 변경하고 있다.
- 이는 예기치 않은 사이드 이펙트를 발생시킬 수 있으며, 루프의 동작에 혼란을 줄 수 있다.
- 특히, 배열의 길이가 변경되면 i 값과 users.length의 관계가 깨져 원하지 않는 결과가 발생할 수 있다.
*/

// ✅ 좋은 예:
const originalUsers = ["John", "Jane", "Doe"];
let filteredUsers = [];

for (let user of originalUsers) {
    if (user !== "Jane") {
        filteredUsers.push(user);
    }
}

console.log(filteredUsers);

/*
- 여기서는 원본 배열 'originalUsers'를 변경하지 않고, 새로운 배열 'filteredUsers'를 생성하여 원하는 사용자만 추가하였다.
- 이렇게 사이드 이펙트를 최소화하면 코드의 예측 가능성이 높아지고 버그 발생 가능성이 줄어든다.
- 조건문과 루프 내에서의 사이드 이펙트를 최소화하려면, 원본 데이터를 직접 변경하는 대신 새로운 변수나 데이터 구조를 사용하는 것이 좋다.
*/

// 코드 예시 끝
