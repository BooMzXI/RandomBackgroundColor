const colors = ['green', "red", "rgba(133,122,200)","#f15025"]
const btn = document.querySelector('button')
const color = document.getElementById('color')

btn.addEventListener('click',() => {
    const randomNumber = rand();
    console.log(rand())
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})
function rand() {
   return Math.floor(Math.random() * colors.length);
}