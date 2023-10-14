// 전역 변수로 설정된 알람 시간
let alarmTime = null;

// 알람 설정 함수
function setAlarm() {
    const timeInput = document.getElementById('alarmTime');
    const message = document.getElementById('message');
    alarmTime = new Date();
    alarmTime.setHours(timeInput.value.split(':')[0]);
    alarmTime.setMinutes(timeInput.value.split(':')[1]);
    alarmTime.setSeconds(0, 0);
    message.textContent = `알람이 ${timeInput.value}에 설정되었습니다.`;
    
    checkAlarm();  // 알람 확인 함수 호출
}

// 알람 확인 함수
function checkAlarm() {
    const message = document.getElementById('message');
    setInterval(() => {
        const now = new Date();
        // 현재 시간과 알람 시간이 일치할 때 알람 메시지 표시
        if (alarmTime && now.getHours() === alarmTime.getHours() && 
            now.getMinutes() === alarmTime.getMinutes() && 
            now.getSeconds() === alarmTime.getSeconds()) {
            alert("알람 시간입니다!");
            message.textContent = `알람이 울렸습니다.`;
            alarmTime = null;  // 알람 시간 초기화
        }
    }, 1000);
}
