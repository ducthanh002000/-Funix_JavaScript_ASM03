"use strict";
// tạo object để chứa dữ liệu nhập vào của người dùng
const submitData = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    username: usernameInput.value,
    password: passwordInput.value,
    passwordConfirm: passwordConfirmInput.value,
};
// thêm sự kiện cho nút submit dùng để tạo tài khoản
submitBtn.addEventListener("click", function () {
    // tạo 1 biến check, nếu như có lỗi khi ấn submit thì biến check sẽ đổi thành false
    let check = true;
    submitData.firstName = firstNameInput.value;
    submitData.lastName = lastNameInput.value;
    submitData.username = usernameInput.value;
    submitData.password = passwordInput.value;
    submitData.passwordConfirm = passwordConfirmInput.value;
    console.log(submitData);
    // nếu như người dùng không nhập hết dữ liệu thì sẽ hiện thông báo
    if (
        !submitData.firstName ||
        !submitData.lastName ||
        !submitData.username ||
        !submitData.password ||
        !submitData.passwordConfirm
    ) {
        alert("Xin hãy điền đủ mọi thông tin!!!");
        check = false;
    }
    for (let i = 0; i < userArr.length; i++) {
        // tìm trong bộ nhớ local, chứa các giá trị về thông tin người dùng
        //nếu userName nhập vào mà trùng với thông tin người dùng được lưu trong bộ nhớ thì sẽ hiên thông báo
        if (submitData.username == userArr[i].userName) {
            alert("Username bị trùng, vui lòng chọn lại");
            check = false;
        }
    }
    // hiện thông báo khi Password và Password confirm không giống nhau
    if (submitData.password != submitData.passwordConfirm) {
        alert("Password và Password confirm không giống nhau, vui lòng nhập lại");
        check = false;
    }
    // hiện thông báo khi Password không dài hơn 8 kí tự
    if (submitData.password.length <= 8) {
        alert("Password phải dài hơn 8 kí tự");
        check = false;
    }
    if (check) {
        // khi dữ liệu người dùng hợp lệ thì sẽ lưu vào bộ nhớ local thông qua cách khởi tạo instance bằng class
        // khởi tạo class ở file User.js
        // bao gồm firstName, lastName, username, passWord, pageSize, category
        const user = new User(
            `${submitData.firstName}`,
            `${submitData.lastName}`,
            `${submitData.username}`,
            `${submitData.password}`,
            "",
            ""
            // hai giá trị khởi tạo ban đầu của pageSize, category là rỗng
            // vậy nên người dùng phải cài đặt ( tức là vào page setting) ngay khi login lần đầu để xem được tin tức
        );
        // user được tạo sẽ được đưa vào userArr, là mảng chứa các instance người dùng thông qua phương thức push()
        // userArr được khởi tạo bên storage.js
        userArr.push(user);
        //sau khi userArr được cập nhật sẽ được lưu vào bộ nhớ local thông qua hàm saveToStorage()
        // saveToStorage() được khởi tạo bên storage.js
        saveToStorage(userArr);
        // sau khi người dùng tạo tài khoản thành công thì sẽ dẫn đến trang login
        window.location.href = "../pages/login.html";
    }
});
