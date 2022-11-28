const input_text = document.querySelector('.text-input')
const surname_input = document.querySelector('.surname-input')
const tell_input = document.querySelector('.tell-input')
const btn = document.querySelector('.add-btn')
const ul = document.querySelector('.list-group-item')

btn.addEventListener("click" , () => {
    if (input_text.value !== "" && tell_input.value !== "" && surname_input.value !== ""){
        const newList = `<li class="list-group-item d-flex justify-content-between align-items-center">
          
          <span class="d-flex align-items-center">
          <div class="circle">${input_text.value[0].toUpperCase()} ${surname_input.value[0].toUpperCase()}</div>
          <input type="checkbox" class="mx-2 checkbox">
          ${"Имя:"}${input_text.value} <br> ${"Фамилия:"} ${surname_input.value} <br>  ${"тел:"}${tell_input.value}
          </span>
          <button class="del-btn btn btn-danger">delete</button>
          </li>`
        ul.innerHTML += newList
    }
})

ul.addEventListener("click", (e) => {
    if (e.target.classList.contains("del-btn")){
        e.target.parentNode.remove()
    }
    if (e.target.classList.contains("checkbox")) {
        e.target.parentNode.classList.toggle("line")
    }
})