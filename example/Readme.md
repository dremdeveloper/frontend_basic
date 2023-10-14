# [알람 프로젝트](https://github.com/dremdeveloper/frontend_basic/tree/main/example/alarm)
- **파일:**
  - [alarm.html](https://github.com/dremdeveloper/frontend_basic/blob/main/example/alarm/alarm.html)
  - [script.js](https://github.com/dremdeveloper/frontend_basic/blob/main/example/alarm/script.js)
  - [style.css](https://github.com/dremdeveloper/frontend_basic/blob/main/example/alarm/style.css)
- **세부내용:**
  - 사용자가 입력한 시간으로 알람을 설정합니다.
  - 설정된 알람 시간과 현재 시간이 일치하면, 알람 메시지를 표시합니다.
  - 알람이 울린 후에는 알람 시간을 초기화하여 알람이 반복되지 않습니다.
  - 알람 시간은 `setInterval`을 이용하여 매초마다 확인합니다.

# [비즈니스 카드 프로젝트](https://github.com/dremdeveloper/frontend_basic/tree/main/example/business_card)
- **파일:**
  - [business_card.html](https://github.com/dremdeveloper/frontend_basic/blob/main/example/business_card/business_card.html)
  - [script.js](https://github.com/dremdeveloper/frontend_basic/blob/main/example/business_card/script.js)
  - [style.css](https://github.com/dremdeveloper/frontend_basic/blob/main/example/business_card/style.css)
- **세부내용:**
  - 사용자의 입력(이름, 전화번호, 주소)을 받아 명함 정보를 업데이트합니다.
  - 명함의 이름, 전화번호, 주소 필드는 사용자의 입력으로 업데이트되며, 명함 div는 화면에 표시됩니다.


# [시계 프로젝트](https://github.com/dremdeveloper/frontend_basic/tree/main/example/clock)
- **파일:**
  - [clock.html](https://github.com/dremdeveloper/frontend_basic/blob/main/example/clock/clock.html)
  - [script.js](https://github.com/dremdeveloper/frontend_basic/blob/main/example/clock/script.js)
  - [style.css](https://github.com/dremdeveloper/frontend_basic/blob/main/example/clock/style.css)
- **세부내용:**
  - 현재 시간을 가져와서 시, 분, 초로 분리하고, 이를 문자열 형식으로 화면에 출력합니다.
  - 한 자리 숫자인 경우 앞에 0을 추가하여 항상 두 자리로 표시합니다.
  - 이 로직은 `setInterval`을 이용하여 매초마다 반복하여 현재 시간을 업데이트합니다.


## 파일 목록

| 파일명(링크) | 세부내용 |
|:---:|:---:|
| [clock.html](https://github.com/dremdeveloper/frontend_basic/blob/main/example/clock/clock.html) | HTML 파일, UI 구조를 담고 있습니다. |
| [script.js](https://github.com/dremdeveloper/frontend_basic/blob/main/example/clock/script.js) | JavaScript 파일, 시계 로직을 담고 있습니다. |
| [style.css](https://github.com/dremdeveloper/frontend_basic/blob/main/example/clock/style.css) | CSS 파일, 스타일 정보를 담고 있습니다. |

# [동적 테이블 프로젝트](https://github.com/dremdeveloper/frontend_basic/tree/main/example/dynamic_table)
- **파일:**
  - [dynamic_table.html](https://github.com/dremdeveloper/frontend_basic/blob/main/example/dynamic_table/dynamic_table.html)
  - [script.js](https://github.com/dremdeveloper/frontend_basic/blob/main/example/dynamic_table/script.js)
  - [style.css](https://github.com/dremdeveloper/frontend_basic/blob/main/example/dynamic_table/style.css)
- **세부내용:**
  - 사용자가 입력 필드에 텍스트를 입력하고 '추가' 버튼을 클릭하면, 입력한 텍스트가 테이블의 새로운 행으로 추가됩니다.
  - JavaScript 코드는 입력 필드에서 값을 가져와서 새로운 테이블 행을 생성하고, 그 행에 새로운 셀을 추가합니다.
  - 새로운 셀의 텍스트 컨텐츠는 사용자가 입력한 텍스트로 설정되고, 테이블의 본문에 새로운 행이 추가됩니다.
  - 마지막으로, 입력 필드의 내용은 지워집니다.


# [프로필 프로젝트](https://github.com/dremdeveloper/frontend_basic/tree/main/example/profile)
- **파일:**
  - [profile.html](https://github.com/dremdeveloper/frontend_basic/blob/main/example/profile/profile.html)
  - [script.js](https://github.com/dremdeveloper/frontend_basic/blob/main/example/profile/script.js)
  - [style.css](https://github.com/dremdeveloper/frontend_basic/blob/main/example/profile/style.css)
- **세부내용:**
  - '세부 정보 토글' 버튼을 클릭하면, 사용자의 상세 정보가 화면에 표시되거나 숨겨집니다.
  - JavaScript 코드는 'details'라는 ID를 가진 엘리먼트를 찾아 그 스타일의 'display' 속성을 'none'과 'block' 사이에서 토글합니다.
  - 이 로직은 사용자의 상세 정보를 보여주거나 숨기는 기능을 수행합니다.


# [간단한 계산기 프로젝트](https://github.com/dremdeveloper/frontend_basic/tree/main/example/simple_calculator)
- **파일:**
  - [simple_calculator.html](https://github.com/dremdeveloper/frontend_basic/blob/main/example/simple_calculator/simple_calculator.html)
  - [script.js](https://github.com/dremdeveloper/frontend_basic/blob/main/example/simple_calculator/script.js)
  - [style.css](https://github.com/dremdeveloper/frontend_basic/blob/main/example/simple_calculator/style.css)
- **세부내용:**
  - 사용자가 두 개의 입력 필드에 숫자를 입력하고 '더하기' 버튼을 클릭하면, 두 숫자의 합이 화면에 표시됩니다.
  - JavaScript 코드는 두 입력 필드의 값을 parseFloat 함수를 사용하여 실수로 변환하고, 두 수를 더한 후 결과를 화면에 표시합니다.
  - 결과는 '결과: [합]' 형식으로 표시됩니다.

