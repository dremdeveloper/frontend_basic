/* 
JavaScript 설명:
1. 사용자의 입력을 가져와서 명함 정보를 업데이트합니다.
2. 명함 div를 보이게 만듭니다.
*/

function generateCard() {
    // 입력 필드에서 값을 가져옵니다.
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    
    // 명함 필드를 업데이트합니다.
    document.getElementById('card-name').textContent = name;
    document.getElementById('card-phone').textContent = phone;
    document.getElementById('card-address').textContent = address;

    // 명함을 표시합니다.
    document.getElementById('card').style.display = 'block';
}
