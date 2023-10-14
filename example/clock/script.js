/* JavaScript의 로직은 아래와 같습니다.
   - 현재 시간을 가져와서 시, 분, 초로 분리합니다.
   - 이를 문자열 형식으로 화면에 출력합니다.
   - 이 로직을 setInterval을 이용하여 매초마다 반복합니다.
*/
function updateClock() {
    // 현재 시간을 가져옵니다.
    const now = new Date();

    // 시, 분, 초를 가져옵니다.
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // 한 자리 숫자인 경우 앞에 0을 추가합니다.
    if(hours < 10) hours = "0" + hours;
    if(minutes < 10) minutes = "0" + minutes;
    if(seconds < 10) seconds = "0" + seconds;

    // 시간을 문자열 형태로 합치고 화면에 표시합니다.
    const timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById('clock').textContent = timeString;
}

// updateClock 함수를 매초마다 호출합니다.
setInterval(updateClock, 1000);
