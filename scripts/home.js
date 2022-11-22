"use strict";
// kiểm tra nếu user tồn tại thì ẩn nút login
// và hiện thông báo xin chào
if (user) {
    loginEl.classList.add("hidden");
    welcomeEl.innerHTML = `Welcome ${user.firstName}
    `;
} else {
    //nếu không thì ẩn nút logout
    logoutEl.classList.add("hidden");
}

// thêm sự kiện cho nút logout
logoutBtn.addEventListener("click", function () {
    user = null;
    saveUserToStorage(user);
    window.location.href = "../pages/login.html";
});
