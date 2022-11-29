const input_text = document.querySelector('.text-input')
const surname_input = document.querySelector('.surname-input')
const tell_input = document.querySelector('.tell-input')
const btn = document.querySelector('.add-btn')
const ul = document.querySelector('.list-group-item')

btn.addEventListener("click" , () => {
    addToDo()
})
input_text && surname_input && tell_input.addEventListener("keydown",(e) => {
    if (e.key === "Enter"){
        addToDo()
    }
})

function addToDo(){
    if (input_text.value !== "" && tell_input.value !== "" && surname_input.value !== ""){
        const newList = `<li class="list-group-item d-flex justify-content-between align-items-center">
          
          <span class="d-flex align-items-center">
          <div class="circle" style="background: ${randomColor()}">  ${input_text.value[0].toUpperCase()} ${surname_input.value[0].toUpperCase()}</div>
          <input type="checkbox" class="mx-2 checkbox">
          ${"Имя:"}${input_text.value} <br> ${"Фамилия:"} ${surname_input.value} <br>  ${"тел:"}${tell_input.value}
          </span>
          <button class="del-btn btn btn-danger">delete</button>
          </li>`
        ul.innerHTML += newList
    }
    input_text.value = ""
    surname_input.value = ""
    tell_input.value = ""
}

function randomColor(){
    let result = ""
    for (let i = 0; i < 6 ; i++){
        let randomNum = Math.floor((Math.random()*10))
        result +=  randomNum
    }
    return "#" + result
}

// console.log(randomColor())


ul.addEventListener("click", (e) => {
    if (e.target.classList.contains("del-btn")){
        e.target.parentNode.remove()
    }
    if (e.target.classList.contains("checkbox")) {
        if(!e.target.parentNode.classList.contains("line")) {
            e.target.parentNode.classList.add("line")
        }else {
            e.target.parentNode.classList.remove("line")
        }
    }
})