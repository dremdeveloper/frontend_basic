// 항목 추가 함수
function addItem() {
    // 테이블 본문과 새 항목 입력 상자의 값을 가져옵니다.
    var tableBody = document.getElementById('tableBody');
    var newItem = document.getElementById('newItem').value;

    // 새 행과 셀을 생성합니다.
    var newRow = document.createElement('tr');
    var newCell = document.createElement('td');
    newCell.textContent = newItem;

    // 셀을 행에 추가하고, 행을 테이블 본문에 추가합니다.
    newRow.appendChild(newCell);
    tableBody.appendChild(newRow);

    // 입력 상자의 내용을 지웁니다.
    document.getElementById('newItem').value = '';
}
