// 코드 예시 시작

// ❌ 좋지 않은 예:
function calculateDiscount(price) {
    return price * 0.9; // 10% 할인
}

/*
- 위의 코드에서 '0.9'는 매직 넘버라고 할 수 있다.
- 이 숫자의 의미나 왜 이렇게 사용되었는지 코드만 보고는 알기 어렵다.
- 향후 코드를 수정하거나 유지보수할 때, 이 숫자의 의미를 파악하기 어렵다.
*/

// ✅ 좋은 예:
const DISCOUNT_RATE = 0.9; // 10% 할인률

function calculateDiscountBetter(price) {
    return price * DISCOUNT_RATE;
}

/* 
- '0.9' 대신 'DISCOUNT_RATE'라는 의미 있는 상수를 사용하여 코드의 명확성을 높였다.
- 상수의 이름을 통해 해당 값이 어떤 의미를 가지는지 쉽게 알 수 있다.
- 매직 넘버 대신 의미 있는 상수를 사용하면, 코드의 가독성과 유지보수성이 크게 향상된다.
- 특히, 해당 값이 여러 곳에서 사용될 경우 상수로의 추출은 중요하다.
*/

// 코드 예시 끝
