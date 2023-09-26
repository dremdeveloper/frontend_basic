// 코드 예시 시작

// ❌ 좋지 않은 예:
function handleUserData(name, age, address) {
    // 이름 검증
    if (!name || name.length < 2) {
        console.error("이름이 유효하지 않습니다.");
        return;
    }

    // 나이 검증
    if (!age || age < 0) {
        console.error("나이가 유효하지 않습니다.");
        return;
    }

    // 주소 검증
    if (!address || address.length < 5) {
        console.error("주소가 유효하지 않습니다.");
        return;
    }

    console.log("모든 데이터가 유효합니다.");
}

/*
- 위 함수는 이름, 나이, 주소를 검증하는 여러 기능을 담고 있다.
- 함수가 너무 많은 일을 하기 때문에 유지보수하기 어렵고, 오류 발생 확률이 높다.
- 특정 기능만을 수정하거나 테스트하려면 전체 함수를 고려해야 한다.
*/

// ✅ 좋은 예:
function isValidName(name) {
    return name && name.length >= 2;
}

function isValidAge(age) {
    return age && age >= 0;
}

function isValidAddress(address) {
    return address && address.length >= 5;
}

function handleUserData(name, age, address) {
    if (!isValidName(name)) {
        console.error("이름이 유효하지 않습니다.");
        return;
    }
    if (!isValidAge(age)) {
        console.error("나이가 유효하지 않습니다.");
        return;
    }
    if (!isValidAddress(address)) {
        console.error("주소가 유효하지 않습니다.");
        return;
    }
    console.log("모든 데이터가 유효합니다.");
}

/* 
- 각 데이터 유효성 검증 로직을 작은 함수로 분리하였다.
- 이렇게 함수를 분리하면 각 함수는 자신의 명확한 역할에만 집중하게 되므로 유지보수가 쉬워진다.
- 또한, 개별 기능별로 테스트가 가능하여 버그 발견이 쉽다.
- 각 함수가 하나의 작고 명확한 역할을 하는 것은 좋은 코드 작성의 핵심 원칙이다.
*/

// 코드 예시 끝
