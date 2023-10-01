// 자바스크립트에서의 콜백지옥에 대한 예제입니다.

// 1. 콜백(callback)은 함수를 다른 함수의 인자로 전달하는 것을 의미합니다.
// 2. 비동기 작업, 특히 네트워크 요청이나 파일 I/O 같은 작업에서 콜백을 자주 사용합니다.
// 3. 여러 비동기 작업을 연속으로 처리할 때 콜백 함수 안에 다른 콜백 함수를 중첩해서 사용하게 되면 
//    코드의 가독성이 떨어지고, 관리가 힘들어지는 문제가 발생하는데, 이를 '콜백지옥'이라고 부릅니다.

// 가상의 비동기 함수 예시
function firstTask(callback) {
    setTimeout(() => {
        console.log("First task done!");
        callback();
    }, 1000);
}

function secondTask(callback) {
    setTimeout(() => {
        console.log("Second task done!");
        callback();
    }, 1000);
}

function thirdTask(callback) {
    setTimeout(() => {
        console.log("Third task done!");
        callback();
    }, 1000);
}

// 콜백지옥 예시
firstTask(() => {
    secondTask(() => {
        thirdTask(() => {
            console.log("All tasks are done!");
        });
    });
});

/* 
   도식화:

   firstTask
      |
      V
   secondTask
      |
      V
   thirdTask
      |
      V
   "All tasks are done!"

   위의 도식화는 비동기 함수가 호출되는 순서를 나타냅니다. 각 화살표는 이전 함수가 완료되고 나서 
   다음 함수가 호출되는 것을 표현합니다.
*/

