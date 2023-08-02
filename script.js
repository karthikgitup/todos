
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var rollno = document.getElementById("rollno");
var tblcont = document.getElementById("table-container");
var arr = [];
var editIndex = -1;

function addUser() {
    if (editIndex === -1) {
        var obj = {
            firstname: fname.value,
            lastname: lname.value,
            rollnumber: rollno.value
        };
        arr.push(obj);
    } else {
        arr[editIndex].firstname = fname.value;
        arr[editIndex].lastname = lname.value;
        arr[editIndex].rollnumber = rollno.value;
        editIndex = -1;
    }

    renderTable();
    fname.value = "";
    lname.value = "";
    rollno.value = "";
}

function removeTodo(index) {
    if (index > -1 && index < arr.length) {
        arr.splice(index, 1);
        renderTable(); 
    }
}

function editRow(index) {
    if (index > -1 && index < arr.length) {
        editIndex = index;
        fname.value = arr[index].firstname;
        lname.value = arr[index].lastname;
        rollno.value = arr[index].rollnumber;
    }
}

function renderTable() {
    if (arr.length > 0) {
        const table = `
            <table>
                <thead>
                    <tr><th>FirstName</th><th>LastName</th><th>RollNo</th><th>Action</th></tr>
                </thead>
                <tbody>
                    ${arr.map((val, index) => `<tr><td>${val.firstname}</td><td>${val.lastname}</td><td>${val.rollnumber}</td><td><i class="fa-solid fa-trash-can-arrow-up" onclick="removeTodo(${index})"></i> <i  class="fa-solid fa-pen-to-square" onclick="editRow(${index})"></i></td></tr>`)
                    }
                </tbody>
            </table>
        `;
        tblcont.innerHTML = table;
    } else {
        tblcont.innerHTML = ""; 
    }
}
