function addStudent() {

    let name = document.getElementById("studentName").value;

    if(name !== "") {

        let li = document.createElement("li");
        li.innerText = name;

        document.getElementById("studentList").appendChild(li);

        document.getElementById("studentName").value = "";
    }
}


const searchBox = document.getElementById("searchBox");

searchBox.addEventListener("keyup", function () {

    let searchValue = this.value.toLowerCase();

    let students = document.querySelectorAll("#studentList li");

    students.forEach(function(student) {

        if(student.innerText.toLowerCase().includes(searchValue)) {
            student.style.display = "";
        } else {
            student.style.display = "none";
        }

    });

});
