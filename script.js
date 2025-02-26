const table=document.querySelector("#sampleTable");
function insert_Row() {
    //Write your code here
	const newElement=document.createElement("tr");
	newElement.innerHTML=`<td>New Cell1</td><td>New Cell2</td>`
	table.prepend(newElement);
  
  
}
