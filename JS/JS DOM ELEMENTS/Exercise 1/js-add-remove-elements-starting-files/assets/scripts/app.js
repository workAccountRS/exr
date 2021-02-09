const headerAddbtn = document.querySelector('header button')
const addModal = document.getElementById("add-modal");
const backDrop = document.getElementById('backdrop')
const cancelbtn = addModal.querySelector('.btn--passive')
const confirmAddBtn = cancelbtn.nextElementSibling
const userInputs = addModal.querySelectorAll('input')
const entryTextSection = document.getElementById('entry-text')

let itemId = 0;

const toogleModal = () => {
  addModal.classList.toggle('visible')
  toogleBackDrop() 
}

const toogleBackDrop = () => {
  backDrop.classList.toggle('visible')
}

const cancelModalHandler = () => {
  if(userInputs[0].value){
  alert('Are you sure?')
  }
  toogleModal()
  clearInputs()
}

const listItems = []

const addItemHandler = () => {
  const titleValue = userInputs[0].value
  const urlValue = userInputs[1].value
  const ratingValue = userInputs[2].value

  if(ratingValue < 1 || ratingValue > 5){
    alert('Enter Values Between 1-5')
    return
  }
  
  // NEW ITEM OBJECT
  const newItem = {
    id: itemId++,
    title: titleValue,
    url: urlValue,
    rating: ratingValue
  }

  listItems.push(newItem)
  

  clearInputs()
  renderNewElement(newItem.id ,newItem.title, newItem.url, newItem.rating)
  updateList()

}

const clearInputs = () => {

  for (const userInput of userInputs){
    userInput.value = ''
  }

}

const updateList = () => {
  if(listItems.length === 0){
    entryTextSection.style.display = 'block'
  }
  else {
  entryTextSection.style.display = 'none' }

}

const renderNewElement = (id, title, url, rating) => {
  const newElement = document.createElement('li') //TO BE APPENDED IN THE LIST
  newElement.classList.add('book-element')
  newElement.innerHTML = `
  <div class='book-element__image'>
  <img src=${url}>
  </div>

  <div class='book-element__info'>
  <h2> ${title} </h2>
  <p> ${rating}/5 </p>
  </div>
  `

  const listRoot = document.getElementById('book-list')
  listRoot.append(newElement)
  newElement.addEventListener('click' , deleteItemHandler.bind(this, id))

}

const deleteItemHandler = (id) => {

let deleteIndex = 0 // TO FIND THE INDEX

for (const item of listItems){  // LOOP THROUGH THE LIST ARRAY
  if (item.id == id) {  // IF THE CLICKED ID WAS FOUND BREAK
    break
  }
  deleteIndex++  // IF THE CLICKED ID WAS NOT FOUND MOVE TO THE NEXT ELEMENT
}

listItems.splice(deleteIndex,1)
const listRoot = document.getElementById('book-list')
listRoot.children[deleteIndex].remove()
updateList()
}


headerAddbtn.addEventListener('click', toogleModal)
backDrop.addEventListener('click', cancelModalHandler)
cancelbtn.addEventListener('click', cancelModalHandler)
confirmAddBtn.addEventListener('click', addItemHandler)