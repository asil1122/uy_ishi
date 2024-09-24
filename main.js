const width = document.querySelector(".width")
const radius = document.querySelector(".radius")
const height = document.querySelector(".height")
const color = document.querySelector(".color")
const form = document.querySelector(".form")
const box = document.querySelector(".box")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    
    box.style.width = width.value + 'px'
    box.style.height = height.value + 'px'
    box.style.borderRadius = radius.value + 'px'
    box.style.background = color.value
})


const info_form = document.querySelector(".info_form")
const infoinput = document.querySelector(".infoinput")
const btn_btn = document.querySelector(".btn_btn")
const box_2 = document.querySelector(".box_2")
const btn = document.getElementsByClassName("btn")
const actv = document.querySelector(".actv")


const render = (item) => {
    box_2.innerHTML += `
    <p>${item}</p>
    <button class = "btn" data-value = "${item}">send</button>
    `

}

const render_2 = (item) => {
    actv.innerHTML += `
        <p>${item}</p>
    `
}

info_form.addEventListener("submit", (e) => {
    e.preventDefault()

    const item = infoinput.value
    render(item)
    infoinput.value = '' 
})

box_2.addEventListener("click", (e) => {
    const value = e.target.dataset.value

    if(value){
        render_2(value)
    }
})

const seconds = document.querySelector('.second');
const start = document.querySelector(".start_btn");

start.addEventListener("click", () => {
    let time = document.querySelector('.input').value;
    
    const p = document.createElement('p');
    seconds.appendChild(p);
    
    const counter = () => {
        p.textContent = time;

        if (time <= 0) {
            clearTimeout(time)
            p.style.display = "none";
        } else {
            time--; 
             setTimeout(counter, 1000);
        }
    };

    p.style.display = "block";
    counter();
});
