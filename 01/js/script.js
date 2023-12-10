const loginForm = document.getElementById('login-form');

document.addEventListener("submit", (e)=>{
    e.preventDefault();

    const userID = loginForm.username.value;
    const userPW = loginForm.password.value;

    if (userID == '' || userPW == ''){
        alert('ID, PW를 입력해 주세요.');
    } else{
        if(userID == 'test' && userPW == '1234'){
            alert('정답');
        }else{
            alert('오답');
        }
    }
})