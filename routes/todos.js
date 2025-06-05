"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos = [];
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
    res.status(200).json({ todos });
});
router.delete('/:id', (req, res, next) => {
    const { id } = req.params;
    let index = todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
        todos.splice(index, 1);
        res.status(200).json({ todos });
    }
    else {
        res.status(404).json({ message: "not found " });
    }
});
router.put('/:id', (req, res, next) => {
    const { id } = req.params;
    const { text } = req.body;
    let index = todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
        todos[index].text = text;
        res.status(200).json({ todos });
    }
    else {
        res.status(404).json({ message: "not found " });
    }
});
exports.default = router;
