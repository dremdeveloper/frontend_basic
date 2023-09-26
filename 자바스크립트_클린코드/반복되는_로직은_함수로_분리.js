// 코드 예시 시작

// ❌ 좋지 않은 예:
let user1Age = 25;
let user2Age = 30;
let user3Age = 35;

if (user1Age >= 21) {
    console.log("User1은 성인입니다.");
} else {
    console.log("User1은 미성년자입니다.");
}

if (user2Age >= 21) {
    console.log("User2은 성인입니다.");
} else {
    console.log("User2은 미성년자입니다.");
}

if (user3Age >= 21) {
    console.log("User3은 성인입니다.");
} else {
    console.log("User3은 미성년자입니다.");
}

/* 
- 위의 코드는 중복된 로직을 3번 반복하고 있다.
- 유사한 로직이 반복될 때마다 코드를 복사-붙여넣기하면, 유지보수가 어려워진다.
- 예를 들어, 성인의 나이 기준을 21에서 19로 바꾸려면 3군데를 모두 수정해야 한다.
*/

// ✅ 좋은 예:
function checkAdult(age, userId) {
    if (age >= 21) {
        console.log(`User${userId}은 성인입니다.`);
    } else {
        console.log(`User${userId}은 미성년자입니다.`);
    }
}

checkAdult(user1Age, 1);
checkAdult(user2Age, 2);
checkAdult(user3Age, 3);

/* 
- 중복된 로직을 'checkAdult' 함수로 분리하였다.
- 이렇게 함수로 로직을 분리하면, 로직을 재사용할 수 있고, 코드의 중복을 줄일 수 있다.
- 또한, 로직 변경 시 함수 내부만 수정하면 되므로 유지보수가 편리하다.
*/

// 코드 예시 끝
