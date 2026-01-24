export default function renderTask(task){
    const taskContainer = document.querySelector(".tasksContainer");
    const taskLabel = document.createElement("label");
    taskLabel.classList.add("task");

    const topRow = document.createElement("div");
    topRow.classList.add("top-row");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const titleSpan = document.createElement("span");
    titleSpan.classList.add("title");
    titleSpan.textContent = `${task.title}`;

    topRow.appendChild(checkbox);
    topRow.appendChild(titleSpan);

    const metaRow = document.createElement("div");
    metaRow.classList.add("meta");

    const dueDateSpan = document.createElement("span");
    dueDateSpan.classList.add("due-date");
    dueDateSpan.textContent = `Due: ${task.dueDate}`;

    const prioritySpan = document.createElement("span");
    prioritySpan.classList.add("priority");
    prioritySpan.textContent = `Priority: ${task.priority}`;

    metaRow.appendChild(dueDateSpan);
    metaRow.appendChild(prioritySpan);

    taskLabel.appendChild(topRow);
    taskLabel.appendChild(metaRow);

    taskContainer.appendChild(taskLabel);
}