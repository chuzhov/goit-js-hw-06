const ulItem = document.querySelector('#categories');

console.log("Number of categories: ", ulItem.children.length);
console.log("") //separator

for (let liItem of ulItem.children) {
    
    console.log('Category: ', liItem.children[0].textContent);
    console.log('Elements in category: ', liItem.children[1].children.length);
    console.log(""); //separator
    
}