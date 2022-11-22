"use strict";
// hiện trạng thái setting của người dùng hiện tại
pageSizeInput.value = user.pageSize;
categoryInput.value = user.category;
// thêm sự kiện cho nút Save Settings
submitBtn.addEventListener("click", function () {
    for (let i = 0; i < userArr.length; i++) {
        // kiểm tra trong mọi instance
        // nếu có userName nào bằng với userName của người dùng hiện tại
        if (userArr[i].userName == user.userName) {
            // thì sẽ gán giá trị pageSize, category của người dùng đó trong local bằng với giá trị người dùng đã nhập
            userArr[i].pageSize = pageSizeInput.value;
            userArr[i].category = categoryInput.value;
            // sau đó thì lưu lại vào bộ nhớ local
            saveToStorage(userArr);
            saveUserToStorage(userArr[i]);
        }
    }
});
