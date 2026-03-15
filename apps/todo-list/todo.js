function addTask() {
    const input = document.getElementById('taskInput');
    const val = input.value;
    if (!val) return;

    const li = document.createElement('li');
    li.innerHTML = `<span>${val}</span><button onclick="this.parentElement.remove()">Done</button>`;
    document.getElementById('taskList').appendChild(li);
    input.value = '';
}