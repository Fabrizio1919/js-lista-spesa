/* Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while. */

// list-items
const listItems = ["Latte", "Acqua", "Pasta", "Coca cola", "Frutta", "Pane", "Uova"];
const shoppingList = document.getElementById("shopping-list");

let i = 0;

// loop
while (i < listItems.length) {
    let item = `<li>${listItems[i]}</li>`
    shoppingList.innerHTML += item;
    i++;  
}
console.log(listItems);

