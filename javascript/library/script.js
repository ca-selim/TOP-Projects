const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read){
    myLibrary.push(new Book(title, author, pages, read));
}

function displayBooks(arr){
    shelf.innerHTML = "";
    arr.forEach((book) => {
        const card = document.createElement("div");
        card.classList.add("book-card");
        card.setAttribute("data-id", book.id)

        card.innerHTML = `
            <div id="filler">Picture</div>
            <div id="bookcardContent">
                <div>
                    <h1>${book.title}</h1>
                </div>
                <div id="bookcardAuthor">
                    <div>
                        <p>by <em>${book.author}</em></p><br>
                    </div>
                        <div id="bookcardPages">
                            <p>Pages: ${book.pages}</p>
                            <label for="read-${book.id}">Read:</label>
                            <select id="read-${book.id}" class="read-dropdown">
                                <option value="Yes" ${book.read === "Yes" ? "selected" : ""}>Yes</option>
                                <option value="No" ${book.read === "No" ? "selected" : ""}>No</option>
                            </select>
                        </div>
                </div>
            </div>
            <div class="bookcardDelete"><button title="Delete card"><i class="fa-regular fa-trash-can"></i></button></div>
        `;

        shelf.appendChild(card);
    })

    shelf.appendChild(addButton);
}


shelf.addEventListener("click", (e) => {
    const deleteButton = e.target.closest(".bookcardDelete");
    if(deleteButton){
        const card = deleteButton.closest(".book-card");
        const id = card.getAttribute("data-id");
        const index = myLibrary.findIndex(book => book.id === id);

        myLibrary.splice(index, 1);
        displayBooks(myLibrary);
    }
    const readButton = e.target.closest(".read-dropdown");
    if(readButton){
        const card = readButton.closest(".book-card");
        const id = card.getAttribute("data-id");
        const index = myLibrary.findIndex(book => book.id === id);

        const item = myLibrary[index];
        item.read = readButton.value;
    }
})


const addButton = document.querySelector("#addButton");
const closeButton = document.querySelector("#closeButton");
const Dialog = document.querySelector("dialog");
const submitButton = document.querySelector("#submitButton");
const bookForm = document.querySelector("#addBookForm");


bookForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.querySelector("#title").value
    const author = document.querySelector("#author").value
    const pages = document.querySelector("#pages").value
    const read = document.querySelector("#agreeYes").checked ? "Yes" : "No";

    addBookToLibrary(title, author, pages, read);
    displayBooks(myLibrary);
    console.log(myLibrary);
})

addButton.addEventListener("click", () => {
    Dialog.showModal();
})

closeButton.addEventListener("click", () => {
    Dialog.close();
})

addBookToLibrary("The Brothers Karamazov", "Fyodor Dostoevsky", 1056, "Yes");
addBookToLibrary("Dune", "Frank Herbert", 704, "Yes");
addBookToLibrary("Odyssey", "Homer", 541, "No");

displayBooks(myLibrary);

console.log(myLibrary);
