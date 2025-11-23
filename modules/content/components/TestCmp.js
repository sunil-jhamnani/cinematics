async function TaskPage() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const todo = await response.json()
    return todo
}

export default TaskPage