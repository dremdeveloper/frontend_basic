// 자바스크립트에서 에러 코드를 관리하는 방법에 대한 예제입니다.

// 1. 상수 객체를 사용하여 에러 코드와 해당 에러 메시지를 관리합니다.
// 2. 이를 통해 코드 전반에 걸쳐 일관성 있게 에러 코드를 참조하고 사용할 수 있습니다.
// 3. 상수 객체는 읽기 전용으로, 재할당이 불가능하게 됩니다.

// 상수 객체를 정의하는 방법:
// const OBJECT_NAME = Object.freeze({
//   KEY: 'VALUE'
// });

// 예시로, 다음과 같이 HTTP 관련 에러 코드를 상수 객체로 관리할 수 있습니다.
const HTTP_ERROR_CODES = Object.freeze({
    // 4xx: 클라이언트 오류
    BAD_REQUEST: { code: 400, message: 'Bad Request' },
    UNAUTHORIZED: { code: 401, message: 'Unauthorized' },
    FORBIDDEN: { code: 403, message: 'Forbidden' },
    NOT_FOUND: { code: 404, message: 'Not Found' },
    // ... 기타 다른 에러 코드 추가 가능
  });
  
  // 위의 상수 객체를 사용하여 특정 에러 코드를 참조하거나 응답을 전송하는 예시:
  function handleHttpRequestError(errorType) {
    if (HTTP_ERROR_CODES[errorType]) {
      console.error(`Error: ${HTTP_ERROR_CODES[errorType].message}`);
      // 실제 웹 응용 프로그램에서는 이곳에서 응답을 전송하게 됩니다.
      // 예: res.status(HTTP_ERROR_CODES[errorType].code).send(HTTP_ERROR_CODES[errorType].message);
    } else {
      console.error('Unknown error type');
    }
  }
  
  // 사용 예시:
  handleHttpRequestError('BAD_REQUEST');  // 출력: "Error: Bad Request"
  
  /* 
     도식화:
     
     HTTP_ERROR_CODES 객체:
     +--------------------------------+
     | HTTP_ERROR_CODES               |
     +--------+-----------------------+
     | BAD_REQUEST    | {400, "Bad Request"}  |
     +--------+-----------------------+
     | UNAUTHORIZED   | {401, "Unauthorized"} |
     +--------+-----------------------+
     | FORBIDDEN      | {403, "Forbidden"}    |
     +--------+-----------------------+
     | NOT_FOUND      | {404, "Not Found"}    |
     +--------------------------------+
  */
  
  