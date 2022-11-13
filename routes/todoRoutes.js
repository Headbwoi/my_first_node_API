const express = require("express")
const router = express.Router()
const todoController = require("../controllers/todoController")

router
  .get("/todos", todoController.getAllTodos)
  .get("/todos/:id", todoController.getTodo, todoController.getOneTodo)
  .post("/todos", todoController.createTodo)
  .put("/todos/:id", todoController.getTodo, todoController.editTodo)
  .delete("/todos/:id", todoController.getTodo, todoController.deleteTodo)

module.exports = router
