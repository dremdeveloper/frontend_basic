// 1. 상세한 개념
// - for 반복문: 특정 코드를 일정 횟수만큼 반복하여 실행하는 제어 구조입니다. 초기화, 조건, 증감이 포함된 형태로 사용됩니다.
// - forEach 반복문: 배열의 각 요소에 대해 주어진 함수를 실행하는 메서드입니다. 배열의 모든 요소에 대해 지정된 작업을 수행합니다.

// 2. 개념을 충분히 이해할 수 있는 코드
// for 반복문 예제:
for(let i = 0; i < 5; i++) {
    console.log(`for loop iteration: ${i}`);
    // 출력: 
    // for loop iteration: 0
    // for loop iteration: 1
    // for loop iteration: 2
    // for loop iteration: 3
    // for loop iteration: 4
  }
  
  // forEach 반복문 예제:
  const array = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
  array.forEach((fruit, idx) => {
    console.log(`forEach iteration - index: ${idx}, value: ${fruit}`);
    // 출력: 
    // forEach iteration - index: 0, value: apple
    // forEach iteration - index: 1, value: banana
    // forEach iteration - index: 2, value: cherry
    // forEach iteration - index: 3, value: date
    // forEach iteration - index: 4, value: elderberry
  });
  
  // 3. 개발자들이 많이 실수하는 부분 
  // - 증감자 설정 누락: for 반복문에서 증감자(i++)를 설정하지 않으면 무한 루프가 발생할 수 있습니다.
  // - 비동기 코드에서의 함정: forEach 반복문 안에서 비동기 코드를 사용할 때, 비동기 코드의 완료 시점을 제어하기 어렵다는 것을 간과할 수 있습니다. 이러한 경우 for...of 루프와 async/await를 사용하는 것이 더 나을 수 있습니다.
  // - 잘못된 조건 설정: for 반복문에서 조건을 잘못 설정하면, 반복문이 의도하지 않은 방식으로 동작하거나 무한 루프가 발생할 수 있습니다.
  