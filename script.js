
let form = document.querySelector('.main_form');
let input = document.querySelector('.add_item');
let groceries = document.querySelector('ul');
let rmvAll = document.querySelector('.removeAll');

form.addEventListener('submit', addGrocery);
groceries.addEventListener('click', removeGrocery);
rmvAll.addEventListener('click', deleteAll);



// Add grocery
function addGrocery(e) {
    if (input.value === ' ' || input.value === ' ') {
        alert('Add a grocery!');
    } 
    else {

        let li = document.createElement('li');
        li.appendChild(document.createTextNode(input.value + " "));
        let link = document.createElement('a');
        link.setAttribute('href', '#'); // for clickability
        link.innerHTML = '->delete'; // click here
        li.appendChild(link); // attach it with x
        groceries.appendChild(li); 

        input.value = ''; // input will be empty again after one submission


    }
    e.preventDefault(); // no refresh after clicking add
}


// Remove Grocery
function removeGrocery(e) {
    if (e.target.hasAttribute("href")) { // when click x it will generate an anchor href in the console. so...
        if (confirm("Are you sure?")) {
            let ele = e.target.parentElement; // remove a along with the parent (grocery name)
            ele.remove();
            
            removeFromLS(ele);
        }
    }
}



function deleteAll(e) {
    groceries.innerHTML = "";

}
