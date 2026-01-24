export default function createProject(){
    const projectForm = document.querySelector("#project-form");
    const projectInput = document.querySelector("#project-input");
    const list = document.querySelector(".list");
    const completeBtn = document.querySelector(".complete");
    const deleteBtn = document.querySelector(".delete");
    const listName = projectInput.value.trim();
    if (listName) {
        const newProject = {
            name: listName,
            tasks: [],
        };
        const listItem = document.createElement("li");
        listItem.textContent = listName;
        listItem.classList.add("listItem");
        list.appendChild(listItem);
        projectInput.value = "";
        projectForm.classList.add("hidden");
        completeBtn.classList.add("hidden");
        deleteBtn.classList.add("hidden");
        return newProject;
    }
}