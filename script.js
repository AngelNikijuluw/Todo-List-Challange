let selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        let formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}


function readFormData() {
    let formData = {};
    formData["kegiatan"] = document.getElementById("kegiatan").value;
    formData["keterangan"] = document.getElementById("keterangan").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    let table = document.getElementById("todolist").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.kegiatan;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.keterangan;
    cell3 = newRow.insertCell(2);
		
        cell3.innerHTML = `<button onClick="onEdit(this)"  class="btn btn-warning">Edit</button> <button onClick="onDelete(this)" class="btn btn-danger">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("kegiatan").value = selectedRow.cells[0].innerHTML;
    document.getElementById("keterangan").value = selectedRow.cells[1].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.kegiatan;
    selectedRow.cells[1].innerHTML = formData.keterangan;
}

//Delete the data
function onDelete(td) {
    if (confirm('data akan dihapus')) {
        row = td.parentElement.parentElement;
        document.getElementById('todolist').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("kegiatan").value = '';
    document.getElementById("keterangan").value = '';
    selectedRow = null;
}