// functionality
// add
// delete
// search

let form=document.getElementById("addForm")
let list=document.getElementById("items")
let filter=document.querySelector("#filter");


form.addEventListener("submit",(e)=>{
    e.preventDefault()
    // console.log("hi")
    let content=document.getElementById("item").value
    if(content==""){
        alert("Empty task can not be added")
    }
    else{
    // console.log(content)
    
    // creating the new list item dyanamically

    let li=document.createElement("li")
    // li.innerText=content
    li.appendChild(document.createTextNode(content))
    li.className="list-group-item"
    document.getElementById("item").value=""
    
    
    // adding the new list item to its parent
    // console.log(li)
    
    
    // creating the delete button dyanamically
    let btn=document.createElement("button")
    btn.innerText="X"
    btn.className="btn btn-danger btn-sm float-right delete"
    
    // adding the button to its parent 
    li.appendChild(btn)
    
    list.appendChild(li)
    savedata();
    }

})
list.addEventListener("click",(e)=>{
    if(e.target.classList.contains("delete")){
        if(confirm("Are you Sure")){
            list.removeChild(e.target.parentElement)
            savedata();
        }
    }
})

// coding the filter part

filter.addEventListener("input",(e)=>{
    
    let lielement=document.getElementsByTagName("li")
   
    Array.from(lielement).forEach((item)=>{
        
        
        if(item.firstChild.textContent.toString().toLowerCase().indexOf(e.target.value.toLowerCase())!==-1){
            item.style.display="block";

        }
        else{
            item.style.display="none";

        }
    })
    

})

function savedata(){
    localStorage.setItem("data",list.innerHTML)
}


function show(){
    list.innerHTML=localStorage.getItem("data");
}
show();





