//Script By: Roberto Ochoa Cuevas :).

//Get text to change, list and buttons
var inputText = document.getElementById("content-text");
var brekfastButton = document.getElementById("breakfastButton");
var lunchButton = document.getElementById("lunchButton");
var list = document.getElementById('list')

//Content text
var breakfastText = 'breakfast content...'
var lunchText = 'lunch content...'

//Button listeners
brekfastButton.addEventListener('click',function(){
    inputText.textContent = breakfastText;
    displayBreakfastItems();
})

lunchButton.addEventListener('click',function(){
    inputText.textContent = lunchText;
    displayLunchItems()
})

// Función para mostrar elementos de desayuno
function displayBreakfastItems() {
    // Clean the List
    list.innerHTML = '';

    // Add Elements to the list 
    var breakfastItems = ['Hotcakes', 'Waffles', 'Combo#1'];
    var descriptionsB = ['The traditional staple Hotcakes of the house', 'Basic waffles with Nutella', 'A combo with hotcakes and waffles :)']
    //Create Items
    breakfastItems.forEach(function (item, item2) {
        var listItem = document.createElement('li');
        listItem.textContent = item;
        list.appendChild(listItem);

        var pItem = document.createElement('p');
        pItem.textContent = descriptionsB[item2];
        list.appendChild(pItem);
    });
}

// Función para mostrar elementos de Lunch
function displayLunchItems() {
    // Clean the List
    list.innerHTML = '';

    // Add Elements to the list
    var lunchItems = ['Sandwich', 'Pizza', 'Combo#2'];
    var descriptions = ['The traditional staple sandwich of the house', 'Basic pizza with mushrooms', 'A combo with a sandwich and a pizza :)']

    //Create Items
    lunchItems.forEach(function (item,item2) {
        var listItem = document.createElement('li');
        console.log(item);
        listItem.textContent = item;
        list.appendChild(listItem);

        var pItem = document.createElement('p');
        pItem.textContent = descriptions[item2];
        list.appendChild(pItem);
    });
}

