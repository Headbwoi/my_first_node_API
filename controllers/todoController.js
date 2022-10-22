const getAllTodos = (req, res) => {
  res.status(200).send("todos")
}

const createTodo = (req, res) => {
  const { todo, id } = req.body
  res.status(201).json({ todo: todo, id })
}

const editTodo = (req, res) => {
  const { id, todo } = req.body
  res.json({ todo, id })
}
const deleteTodo = (req, res) => {
  const { id, todo } = req.body
  res.status(200).send(`${todo} with ${id} successfully deleted`)
}

module.exports = { getAllTodos, createTodo, editTodo, deleteTodo }
