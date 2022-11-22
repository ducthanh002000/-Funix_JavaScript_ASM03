"use strict";
class User {
    constructor(firstName, lastName, username, passWord, pageSize, category) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = username;
        this.passWord = passWord;
        this.pageSize = pageSize;
        this.category = category;
    }
}
class Task {
    constructor(task, owner, isDone) {
        this.task = task;
        this.owner = owner;
        this.isDone = isDone;
    }
}
