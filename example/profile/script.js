    function openLink(url) {
        if (confirm("아래 링크로 페이지를 이동하시겠습니까?\n" + url)) {
            window.location.href = url;
        }
    }