// 1. 상세한 개념

// 1.1 1차원 배열
// 1차원 배열은 요소들이 한 줄로 나열되어 있는 데이터 구조입니다. 각 요소는 인덱스를 통해 접근할 수 있습니다.

// 1.2 2차원 배열
// 2차원 배열은 배열의 배열이라고 볼 수 있으며, 행렬 형태의 데이터 구조를 가지고 있습니다. 각 요소는 두 개의 인덱스(행과 열)를 통해 접근할 수 있습니다.

// 2. 개념을 충분히 이해할수 있는 코드

// 2.1 1차원 배열 예시
let oneDimensionalArray = [1, 2, 3, 4, 5];
oneDimensionalArray.forEach((item, index) => {
  console.log(`Item at index ${index} is: ${item}`); // 출력 예: Item at index 0 is: 1
});

// 2.2 2차원 배열 예시
let twoDimensionalArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
twoDimensionalArray.forEach((row, rowIndex) => {
  row.forEach((item, colIndex) => {
    console.log(`Item at row ${rowIndex}, column ${colIndex} is: ${item}`); // 출력 예: Item at row 0, column 0 is: 1
  });
});

// 3. 개발자들이 많이 실수하는 부분 

// 3.1 배열 인덱스 오버플로우: 배열의 길이를 초과하는 인덱스에 접근하려고 시도하는 실수입니다.
// 3.2 2차원 배열 초기화: 2차원 배열을 초기화할 때 각 행을 독립적으로 초기화하지 않고, 같은 참조를 가진 행을 여러 개 만드는 실수입니다.
// 3.3 배열 메서드 사용: 배열 메서드(push, pop, shift, unshift 등)를 잘못 사용하여 예상치 못한 결과를 얻는 실수입니다.

