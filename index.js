const btn = document.querySelector(".btn")
const eng = document.querySelector("#eng_col")
const ukr = document.querySelector("#ukr_col")
const hideTop = document.querySelector("#hide-top")
let deleteItem
renderVocabulary()

btn.addEventListener("click", () => {
    localStorage.setItem(document.querySelector('input[name="eng"]').value,
        document.querySelector('input[name="ukr"]').value)
    renderVocabulary()
})

function renderVocabulary() {
    let english = ""
    let ukrainian = ""
    for (let i = 0; i < localStorage.length; i++) {
        english += `<p>${(localStorage.key(i)).toString()}</p>`
        ukrainian += `<p>${localStorage.getItem(localStorage.key(i))} <span class="delete-btn">delete</span></p>`
    }
    eng.innerHTML = english
    ukr.innerHTML = ukrainian
    deleteItem = document.querySelectorAll(".delete-btn")
    AddingEventListeners()
}


function AddingEventListeners() {
    Array.from(deleteItem).forEach(function (element) {
        element.addEventListener('click', (e) => {
            let text = e.currentTarget.parentElement.textContent
            text = text.replace(' delete', '')
            for (let i = 0; i < localStorage.length; i++) {

                if (text === localStorage.getItem(localStorage.key(i))) {
                    localStorage.removeItem(localStorage.key(i))
                }
                localStorage.getItem(localStorage.key(i))
            }
            renderVocabulary()
        });
    });
}

hideTop.addEventListener("click",()=>{
    document.querySelector("#form").classList.toggle("hidden")
    hideTop.textContent = ( document.querySelector("#form").classList.contains("hidden")) ? "open" : "hide"
})