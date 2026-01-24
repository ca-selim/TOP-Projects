import createTaskObject from "./modules/createTaskObject.js";  
import createProject from "./modules/createProject.js"; 
import renderTask from "./modules/renderTask.js";


const projects = [
    {
        name: "Default List",
        tasks: [
            createTaskObject("Sample Task", "This is a sample task description", "2024-12-31", "High"),
        ],
        
    },
]

const addListBtn = document.querySelector("#addListBtn");
const projectForm = document.querySelector("#project-form");
const projectInput = document.querySelector("#project-input");
const completeBtn = document.querySelector(".complete");
const deleteBtn = document.querySelector(".delete");
const list = document.querySelector(".list");
const taskContainer = document.querySelector(".tasksContainer");
const addTaskBtn = document.querySelector("#addTaskBtn");
const taskDetailsForm = document.querySelector("#taskDetails"); 
const saveTaskBtn = document.querySelector("#saveTaskBtn");
const listTitle = document.querySelector(".listTitle");

saveTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const taskNameInput = document.querySelector("#taskName");
    const taskDescriptionInput = document.querySelector("#taskDescription");
    const taskDueDateInput = document.querySelector("#due-date");
    const taskPriorityInput = document.querySelector("#priority");
    const projectName = listTitle.textContent;
    const project = projects.find(proj => proj.name === projectName);

    const title = taskNameInput.value.trim();
    const description = taskDescriptionInput.value.trim();
    const dueDate = taskDueDateInput.value;
    const priority = taskPriorityInput.value;

    if(project){
        if(title && dueDate && priority){
            const newTask = createTaskObject(title, description, dueDate, priority);
            project.tasks.push(newTask);
            renderTask(newTask);
            console.log(projects);
        }
    }
});

addTaskBtn.addEventListener("click", () => {
    taskDetailsForm.classList.remove("hidden");
}); 

list.addEventListener("click", (e) => {
    if (e.target && e.target.matches("li.listItem")) {
        listTitle.textContent = e.target.textContent;
        taskContainer.innerHTML = ""; 
        const projectName = e.target.textContent;
        const project = projects.find(proj => proj.name === projectName);
        if (project) {
            project.tasks.forEach(task => {
                renderTask(task);
            });
        }
    }
});

addListBtn.addEventListener("click", () => {
    projectForm.classList.remove("hidden");
    completeBtn.classList.remove("hidden");
    deleteBtn.classList.remove("hidden");
    projectInput.focus();
});

completeBtn.addEventListener("click", () => {
    const newProject = createProject();
    projects.push(newProject);
})

deleteBtn.addEventListener("click", () => {
    projectInput.value = "";
    projectForm.classList.add("hidden");
    completeBtn.classList.add("hidden");
    deleteBtn.classList.add("hidden");
});

projectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newProject = createProject();
    projects.push(newProject);
});

projectInput.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    projectInput.value = "";
    projectForm.classList.add("hidden");
    completeBtn.classList.add("hidden");
    deleteBtn.classList.add("hidden");
  }
});

