

let count = 0;
let incrm = document.querySelector("#incrm");
let rest = document.querySelector("#rest");
let display = document.querySelector("#display");

display.innerHTML = localStorage.getItem("saveN");

incrm.addEventListener("click", ()=>{
    
    ++count;
    display.innerHTML = count;

   // Set Item
   localStorage.setItem("saveN", count );
   // Retrieve
   display.innerHTML = localStorage.getItem("saveN");
})
   

rest.addEventListener("click", ()=>{
    
    count = 0;
    display.innerHTML = count;

})






let paragraph = document.getElementById("output");
paragraph.innerHTML = localStorage.getItem("save");
const print = ()=> {
let { value } = document.getElementById("text");
console.log(value)
paragraph.innerText = value;

    // Set Item
    localStorage.setItem("save", value );
    // Retrieve
    paragraph.innerHTML = localStorage.getItem("save");

}


 
