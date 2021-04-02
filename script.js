const list = document.getElementById('list');
const form = document.querySelector('form');
const item = document.getElementById('item');
const button = document.getElementById('button')

//ajouter un rappel
button.addEventListener('click', (e) => {
    e.preventDefault();
    list.innerHTML += `<li>${item.value}</li>`;
    item.value = '';
    storage();
});

//retirer un rappel
list.addEventListener('click', (e) => {
    e.target.remove();
    storage();
})


//stockage des rappels
function  storage(){
    window.localStorage.todoList = list.innerHTML;
}

//vérification et récupération des rappels
function getValues(){
    let storageContent = window.localStorage.todoList;
    if (!storageContent){
        list.innerHTML = '<li>Cliquez sur un todo pour le supprimer</li>'
    }
    else{
        list.innerHTML = storageContent;
    }
}

getValues();