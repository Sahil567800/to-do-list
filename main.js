let input = document.getElementById("input")
let add = document.getElementById("add")
let ul = document.getElementById("ul")
let clear = document.getElementById("clear")
add.addEventListener("click",function(){
    if(input.value==""){
        alert("write items")
        return
    }
    let li=document.createElement("li")
    li.innerHTML=input.value
    ul.appendChild(li)
    let del = document.createElement("button")
    del.innerHTML="delete"
    li.appendChild(del)
    del.addEventListener("click",function(){
        li.remove()
    })
    input.value=""
})
clear.addEventListener("click",function(){
    input.value =""
})