"use strict";
// thêm sự kiện cho nút login
submitBtn.addEventListener("click", function () {
    // hiện thông báo nếu người dùng chưa điền đủ thông tin
    if (!usernameInput.value || !passwordInput.value) {
        alert("Chưa nhập Username hoặc Password");
    } else {
        for (let i = 0; i < userArr.length; i++) {
            // kiểm tra các instance trong userArr
            // nếu tên người dùng nhập vào bằng tên người dùng được lưu trong bộ nhớ local
            // và mật khẩu phải trùng với mật khẩu tại tên người dùng đó
            if (
                usernameInput.value == userArr[i].userName &&
                passwordInput.value == userArr[i].passWord
            ) {
                // thì sẽ thực hiện lưu người dùng hiện tạo vào bộ nhớ local
                saveUserToStorage(userArr[i]);
                // sau đó sẽ đưa người dùng về page home tức là index.html
                window.location.href = "../index.html";
                break;
                // sau đó kết thúc vòng lặp để không phải kiểm tra nữa
            }
            // nếu đã kiểm tra đến instance cuối mà không login được thì sẽ hiện thông báo
            if (i == userArr.length - 1) alert("Sai Username hoặc Password");
        }
    }
});
