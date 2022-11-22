"use strict";
// khởi tạo hàm hiện todo list
const renderTableTodoList = function (taskArr) {
    // xóa bảng todo list
    todoTable.innerHTML = "";
    for (let i = 0; i < taskArr.length; i++) {
        // kiểm tra trang mảng taskArr ( chứa thông tin các task của mỗi người dùng), được khởi tạo bên file storage.js
        // nếu owner của các task bằng với userName của người dùng hiện tại
        // thì sẽ in những task đó ra
        if (taskArr[i].owner == user.userName) {
            todoTable.insertAdjacentHTML(
                "beforeend",
                `
                <li class="${taskArr[i].isDone == true ? `checked` : ``}" onclick="checkTask('${
                    taskArr[i].task
                }')" id="task-row">
                    ${taskArr[i].task}<span onclick="deleteTask('${
                    taskArr[i].task
                }')" class="close">×</span>
                </li>
                `
            );
        }
    }
};
// hiện những task của người dùng hiện tại
renderTableTodoList(taskArr);
// thêm sự kiện cho nút add
addBtn.addEventListener("click", function () {
    // nếu người dùng có nhập thông tin thì sẽ thực hiện
    // còn không sẽ hiện thông báo
    if (taskInput.value) {
        const task = new Task(`${taskInput.value}`, `${user.userName}`, false);
        // cập nhật mảng taskArr rồi lưu vào local
        // sau đó in lại bảng todo list
        taskArr.push(task);
        saveTaskArrToStorage(taskArr);
        renderTableTodoList(taskArr);
        taskInput.value = "";
    } else alert("Vui lòng nhập task");
});
// thêm sự kiện check cho task
function checkTask(task) {
    for (let i = 0; i < taskArr.length; i++) {
        // kiểm tra trong mảng taskArr có tên giống với giá trị truyền vào không?
        // nếu có thì cập nhật mảng taskArr rồi lưu vào bộ nhớ local và in lại
        if (taskArr[i].task == task) {
            taskArr[i].isDone = taskArr[i].isDone ? false : true;
            saveTaskArrToStorage(taskArr);
            renderTableTodoList(taskArr);
        }
    }
}
// thêm sự kiện delete cho task
function deleteTask(task) {
    // hiện thông báo xác nhận
    if (confirm(`Bạn có muốn xóa ${task}`))
        for (let i = 0; i < taskArr.length; i++) {
            // kiểm tra trong mảng taskArr có tên giống với giá trị truyền vào không?
            // giá trị truyền vào được lấy ở thuộc tính onclick trong html
            // nếu có thì cập nhật mảng taskArr rồi lưu vào bộ nhớ local và in lại
            if (taskArr[i].task == task) {
                taskArr.splice(i, 1);
                saveTaskArrToStorage(taskArr);
                renderTableTodoList(taskArr);
            }
        }
}
