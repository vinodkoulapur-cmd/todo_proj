
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
    let task = inp.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let item = document.createElement("li");
    item.innerText = task;

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");
    delBtn.type = "button";

    item.appendChild(delBtn);

    ul.appendChild(item);

    inp.value = "";
});

ul.addEventListener("click", function (event) {

    if (event.target.classList.contains("delete")) {
        event.target.parentElement.remove();
        console.log("Task deleted");
    }

});

inp.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        btn.click();
    }
});
