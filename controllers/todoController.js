const TodoModel = require("../model/todoModel")

const getAllTodos = async (req, res) => {
  try {
    const todos = await TodoModel.find()
    res.json(todos)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getOneTodo = async (req, res) => {
  // const { title, todo } = res.todo
  res.json(res.todo)
}

const createTodo = async (req, res) => {
  const todo = new TodoModel({
    title: req.body.title,
    todo: req.body.todo,
  })
  try {
    const newTodo = await todo.save()
    res.status(201).json(newTodo)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

const editTodo = async (req, res) => {
  const { title, todo } = req.body
  if (title != null) {
    res.todo.title = title
  }
  if (todo != null) {
    res.todo.todo = todo
  }

  try {
    const updatedTodo = await res.todo.save()
    res.json(updatedTodo)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}
const deleteTodo = async (req, res) => {
  try {
    await res.todo.remove()
    res.json({ message: "Deleted Subscriber" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

async function getTodo(req, res, next) {
  let todo
  try {
    todo = await TodoModel.findById(req.params.id)
    if (todo == null) {
      return res.status(404).json({ message: "cant find subscriber" })
    }
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
  res.todo = todo
  next()
}
module.exports = {
  getAllTodos,
  getOneTodo,
  createTodo,
  editTodo,
  deleteTodo,
  getTodo,
}
