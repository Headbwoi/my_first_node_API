const express = require("express")
const router = express.Router()
const todoController = require("../controllers/todoController")

router
  .get("/todos", todoController.getAllTodos)
  .post("/todos", todoController.createTodo)
  .put("/todos/:id", todoController.editTodo)
  .delete("/todos/:id", todoController.deleteTodo)

module.exports = router
