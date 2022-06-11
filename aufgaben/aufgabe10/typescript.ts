// neues Element hinzufügen

document.getElementById("add").addEventListener("click", newelement);

var list = document.querySelector <HTMLUListElement> (".liste");


function newelement(): void {

  var li = document.createElement("li");

  var label = document.createElement("label");

  var iconTrash = document.createElement("i");
  var iconChecked = document.createElement("i");

  li.addEventListener("click", abhaken);
  iconTrash.addEventListener("click", loeschen);


  iconTrash.innerHTML = '<i class="fa-solid fa-trash"> </i>';
  iconChecked.innerHTML = '<i class="fa-solid fa-check"> </i>';
  iconTrash.classList.add("muell");
  iconChecked.setAttribute("id", "check");
  iconChecked.classList.add('hidden');
  //iconChecked.hidden = true;
  
  var inputValue: HTMLInputElement = <HTMLInputElement>document.getElementById("input");
  label.append(iconChecked, inputValue.value, iconTrash);
  
  li.append(label);
  list.append(li); 





// Gesamte Aufgaben ausgeben

gesamteaufgaben.innerHTML = list.getElementsByTagName("li").length.toString(); 


}   // funktion newElement zuende


var gesamteaufgaben = document.querySelector("#gesamt-aufgaben");







// Element löschen

document.querySelector(".muell").addEventListener("click", loeschen);

function loeschen() {
  console.log("delete");
  this.parentElement.parentElement.remove();
 
  gesamteaufgaben.innerHTML = list.getElementsByTagName("li").length.toString();

}
// Element abhaken



function abhaken(){
  console.log("check");
  console.log(this.children);
  this.children[0].classList.toggle('hidden');
}
