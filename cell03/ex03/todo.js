const ft_list = document.getElementById("ft_list");
const newBtn = document.getElementById("newBtn");


function loadTodos() {
  const cookie = document.cookie.split("; ").find(row => row.startsWith("todos="));
  if (cookie) {
    const todos = JSON.parse(decodeURIComponent(cookie.split("=")[1]));
    todos.forEach(todo => createTodoDiv(todo));
  }
}


function saveTodos() {
  const todos = Array.from(ft_list.children).map(div => div.textContent);
  document.cookie = `todos=${encodeURIComponent(JSON.stringify(todos))}; path=/; max-age=${60*60*24*365}`;
}


function createTodoDiv(text) {
  const div = document.createElement("div");
  div.textContent = text;
  div.addEventListener("click", () => {
    if (confirm("Do you want to remove this TO DO?")) {
      ft_list.removeChild(div);
      saveTodos();
    }
  });
  ft_list.appendChild(div);
}


newBtn.addEventListener("click", () => {
  const todo = prompt("Enter your new TO DO:");
  if (todo && todo.trim() !== "") {
    createTodoDiv(todo.trim());
    saveTodos();
  }
});


loadTodos();
