// 1. 상세한 개념
// - 이벤트 위임은 이벤트 리스너를 개별 요소에 직접 부착하는 대신, 하나의 공통 조상 요소에 이벤트 리스너를 부착하는 기법입니다.
// - 이 방법을 사용하면 메모리 사용량을 줄이고, 동적으로 추가된 요소에 대해서도 자동으로 이벤트 핸들러가 작동합니다.
// - 이벤트가 발생하면, 이벤트가 버블링 단계에서 조상 요소의 이벤트 핸들러에 도달하게 되며, 이 때 이벤트 핸들러 내에서 event.target을 사용하여 실제로 이벤트가 발생한 요소를 찾아냅니다.

// 2. 개념을 충분히 이해할수 있는 코드
document.addEventListener('DOMContentLoaded', () => {
    const ulElement = document.createElement('ul');
    ulElement.innerHTML = '<li>Item 1</li><li>Item 2</li><li>Item 3</li>';
    document.body.appendChild(ulElement);
  
    ulElement.addEventListener('click', (event) => {
      if (event.target.tagName === 'LI') {
        alert(`You clicked on ${event.target.textContent}`);
      }
    });
  });
  
  // 3. 개발자들이 많이 실수하는 부분 
  // - 이벤트 위임을 사용할 때, 이벤트 핸들러 내에서 발생한 요소를 정확히 식별하는 것이 중요합니다. 잘못된 요소를 식별하면 예상치 않은 동작이 발생할 수 있습니다.
  // - 이벤트 위임 기법은 이벤트 버블링을 사용하는 이벤트에만 작동합니다. 일부 이벤트(예: focus, blur)는 버블링 단계에서 전파되지 않으므로 이벤트 위임이 작동하지 않습니다.
  // - 조상 요소에서 이벤트를 핸들링할 때, 필요에 따라 event.stopPropagation()을 사용하여 이벤트 전파를 중단해야 할 수도 있습니다.
  