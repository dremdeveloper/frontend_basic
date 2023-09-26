// 코드 예시 시작

// ❌ 좋지 않은 예:
let d = new Date();
let el = document.getElementById("user-info");
let arr = ["apple", "banana", "cherry"];

/* 
- 위의 변수명들은 알아보기 힘들다.
- 'd'는 날짜를 나타내는 것인지, 다른 데이터를 나타내는 것인지 알기 힘들다.
- 'el'은 어떤 HTML 엘리먼트를 참조하는지, 그 역할이 무엇인지 알 수 없다.
- 'arr'는 어떤 데이터의 배열인지 알기 어렵다.
*/

// ✅ 좋은 예:
let currentDate = new Date();
let userInfoElement = document.getElementById("user-info");
let fruitList = ["apple", "banana", "cherry"];

/* 
- 'currentDate'는 현재의 날짜를 나타낸다는 것을 명확하게 알려준다.
- 'userInfoElement'는 사용자 정보를 나타내는 HTML 엘리먼트임을 분명하게 해준다.
- 'fruitList'는 과일의 목록임을 명확하게 표현한다.
- 이렇게 명료하고 구체적인 변수명을 사용하면, 코드를 처음 보는 사람도 빠르게 이해할 수 있다.
*/

// 코드 예시 끝
