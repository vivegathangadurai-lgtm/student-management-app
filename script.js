function updateCount() {
    document.getElementById("count").innerText =
        document.getElementById("studentList").children.length;
}

function addStudent() {

    let name = document.getElementById("studentName").value;

    if (name !== "") {

        // Create student list item
        let li = document.createElement("li");

        // Add student name
        li.innerText = name + " ";

        // Create delete button
        let button = document.createElement("button");
        button.innerText = "Delete";

        // Delete student
        button.onclick = function () {
            li.remove();
            updateCount();
        };

        // Add delete button to student item
        li.appendChild(button);

        // Add student to list
        document.getElementById("studentList").appendChild(li);

        // Update total count
        updateCount();

        // Clear input box
        document.getElementById("studentName").value = "";
    }
}
