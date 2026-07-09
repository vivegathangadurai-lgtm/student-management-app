function updateCount() {
    document.getElementById("count").innerText =
        document.getElementById("studentList").children.length;
}

function addStudent() {

    let name = document.getElementById("studentName").value;

    if (name !== "") {

        let li = document.createElement("li");
        li.innerText = name;

        document.getElementById("studentList").appendChild(li);

        updateCount();

        document.getElementById("studentName").value = "";
    }
}