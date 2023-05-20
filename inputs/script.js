let btn = document.querySelector('.Button_change')
let all_inp = document.querySelectorAll('input')
let inputs = document.querySelectorAll('input#blue')
let h1 = document.querySelectorAll('h1')
let act = document.querySelector('active')
let img = document.querySelectorAll('.img img')
let p = document.querySelectorAll('.pool p')
let a = document.querySelector('#a')
let success = document.querySelector('#Success')
let all = document.querySelector('#all')
let need = document.querySelector('#need')

console.log(a);
btn.onclick = () => {
    inputs.forEach(inp => {
        h1.forEach(red => {
            if (inp.value === '') {
                inp.style.border = '2px solid red'
                inp.parentNode.previousSibling.previousSibling.style.color = 'red'
                inp.nextSibling.nextSibling.firstChild.classList.add('active_err')
            }
            else {
                inp.style.borderColor = 'green'
                inp.parentNode.previousSibling.previousSibling.style.color = 'blue'
                inp.nextSibling.nextSibling.firstChild.classList.remove('active_err')

            }
        })
    })
    let error = document.querySelectorAll('.active_err')
    a.innerHTML = ` Error: ${error.length}/ ${all_inp.length}`
    success.innerHTML = `success: ${success.length} - ${error.length}`
    all.innerHTML = `All: ${all_inp.length}`


}
let form = document.forms.reg

console.log(inputs);

let pattern = {
    name: /^[a-z ,.'-]+$/i,
    email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    number: /^\d+$/,
    phone_number: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
    text:/ab+c/
}


console.log(pattern.number);

function validate(regex, field) {
    if (regex.test(field.value)) {
        field.classList.add('valid')
        field.classList.remove('invalid')
    } else {
        field.classList.add('invalid')
        field.classList.remove('valid')
    }
}
all_inp.forEach(inp => {
    inp.onkeyup = () => {
        validate(pattern[inp.name], inp)
    }
})