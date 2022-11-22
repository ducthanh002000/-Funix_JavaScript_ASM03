"use strict";
const firstNameInput = document.getElementById("input-firstname");
const lastNameInput = document.getElementById("input-lastname");
const usernameInput = document.getElementById("input-username");
const passwordInput = document.getElementById("input-password");
const passwordConfirmInput = document.getElementById("input-password-confirm");
const taskInput = document.getElementById("input-task");
const pageSizeInput = document.getElementById("input-page-size");
const categoryInput = document.getElementById("input-category");
//
const loginEl = document.getElementById("login-modal");
const logoutEl = document.getElementById("main-content");
const welcomeEl = document.getElementById("welcome-message");
const newsEl = document.getElementById("news-container");
const pageEl = document.getElementById("page-num");
const todoTable = document.getElementById("todo-list");
//
const submitBtn = document.getElementById("btn-submit");
const logoutBtn = document.getElementById("btn-logout");
const prevBtn = document.getElementById("btn-prev");
const nextBtn = document.getElementById("btn-next");
const addBtn = document.getElementById("btn-add");
const deleteBtn = document.querySelector(".close");
//---------------------------------------------
// khởi tạo localStorage ban đầu cho trình duyệt
//------------------------------------------
// khởi tạo mảng userArr( nơi chứa dữ liệu người dùng)
let userArr = [];
if (JSON.parse(localStorage.getItem("userArr"))) {
    userArr = JSON.parse(localStorage.getItem("userArr"));
}
// khởi tạo user, nơi chứa thông tin người dùng hiện tại
let user;
if (JSON.parse(localStorage.getItem("user"))) {
    user = JSON.parse(localStorage.getItem("user"));
}
// khởi tạo mảng taskArr, nơi chứa các task của mọi người dùng
let taskArr = [];
if (JSON.parse(localStorage.getItem("taskArr"))) {
    taskArr = JSON.parse(localStorage.getItem("taskArr"));
}
// tạo hàm lưu mảng userArr vào bộ nhớ local
const saveToStorage = function (userArr) {
    localStorage.setItem("userArr", JSON.stringify(userArr));
};
// tạo hàm lưu thông tin người dùng hiện tại vào bộ nhớ local
const saveUserToStorage = function (user) {
    localStorage.setItem("user", JSON.stringify(user));
};
// tạo hàm lưu mảng taskArr vào bộ nhớ local
const saveTaskArrToStorage = function (taskArr) {
    localStorage.setItem("taskArr", JSON.stringify(taskArr));
};
