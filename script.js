const table=document.querySelector("#sampleTable");
function insert_Row() {
    const newRow = table.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    cell1.innerHTML = 'New Cell1';
    cell2.innerHTML = 'New Cell2';
}
