// 1. HTML 페이지에 기본 테이블 구조를 만든다.
/*
  <table id="dynamicTable">
  </table>
*/

// 2. 자바스크립트로 데이터를 준비한다.
const data = [
    {name: "John", age: 25, job: "Engineer"},
    {name: "Jane", age: 28, job: "Designer"},
    {name: "Doe", age: 22, job: "Intern"}
  ];
  
  // 3. 데이터를 기반으로 동적으로 테이블을 만드는 함수를 작성한다.
  function generateTable(data) {
    const table = document.getElementById("dynamicTable");
  
    // 테이블 헤더 생성
    const thead = document.createElement("thead");
    const theadRow = document.createElement("tr");
  
    for (let key in data[0]) {
      const th = document.createElement("th");
      th.textContent = key.toUpperCase();
      theadRow.appendChild(th);
    }
    thead.appendChild(theadRow);
    table.appendChild(thead);
  
    // 테이블 본문 생성
    const tbody = document.createElement("tbody");
  
    data.forEach(item => {
      const row = document.createElement("tr");
  
      for (let key in item) {
        const td = document.createElement("td");
        td.textContent = item[key];
        row.appendChild(td);
      }
  
      tbody.appendChild(row);
    });
  
    table.appendChild(tbody);
  }
  
  // 4. 페이지 로드 시 함수 실행
  window.onload = function() {
    generateTable(data);
  };
  
  /*
      도식화:
  
      data -------------------> [ {name, age, job}, ...]
                    |
                    |
      generateTable() ---------> <table>
                                    <thead>
                                       <tr>
                                          <th>...</th>...
                                       </tr>
                                    </thead>
                                    <tbody>
                                       <tr>
                                          <td>...</td>...
                                       </tr>...
                                    </tbody>
                                 </table>
  
      위의 도식화는 'data'를 받아 'generateTable()' 함수를 통해 동적 테이블을 생성하는 과정을 나타냅니다.
  */
  
