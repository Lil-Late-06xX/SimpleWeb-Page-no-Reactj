let input = document.getElementById("inpt")
let btn = document.getElementById("cmnt")
let ull = document.getElementById("ull")
let dlt = document.getElementById("dlt")


let listinMem = JSON.parse(localStorage.getItem("cmnt"))
let x = []


if(listinMem){
    x = listinMem
    render(x)
}


btn.addEventListener("click",function(){
    
    x.push(input.value)
    localStorage.setItem("cmnt", JSON.stringify(x))
    render(x)
    input.value = ""

})


dlt.addEventListener("click",function(){
    
    localStorage.clear()
    x = []
    render(x)

})



function render(wet){

 let y = ""
 for (let i = 0; i< wet.length ; i++){

    y += `<li>${wet[i]}</li>`


 }

    ull.innerHTML = y


}


