function getInnerTextById(id) {
    const value = document.getElementById(id).innerText;
    const convertValue = parseInt(value);
    return convertValue;
};
// set inner text by id 
function setInnerTextById(id,value){
    document.getElementById(id).innerText = value;
};
// disable btn
function disable (id){
    document.getElementById(id).disabled = true;
}
// delete btn
function remove(){
    const deleteBtn = document.getElementById('history');
    deleteBtn.remove();
}
// change background
document.getElementById('colors').addEventListener('click',
    function changeBackground() {
        const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
        document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    }
)