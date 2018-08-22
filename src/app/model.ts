export class Model {
    user;
    items;

    constructor() {
        this.user = "Мария";
        this.items = [new TodoItem("Купить ботинки", false),
        new TodoItem("Помыть посуду", false),
        new TodoItem("Позвонить в домоуправление", false)
        ]
    }
}

export class TodoItem {
    action;
    done;

    constructor(action, done) {
        this.action = action;
        this.done = done;
    }
}
