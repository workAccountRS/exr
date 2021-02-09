const headerAddbtn = document.querySelector('header button')
const addModal = document.getElementById("add-modal");
const backDrop = document.getElementById('backdrop')
const userInputs = addModal.querySelectorAll('input')

const listItems = [] // TO HOLD THE LIST OF BOOKS

const toogleModal = () => {
  addModal.classList.toggle('visible')
  toogleBackDrop()
}

headerAddbtn.addEventListener('click', toogleModal)


const toogleBackDrop = () => backDrop.classList.toggle('visible')
backDrop.addEventListener('click', toogleModal)


const cancelbtn = addModal.querySelector('.btn--passive')

const cancelModalHandler = () => {
  if(userInputs[0].value){
    alert('Are you sure?')
    }
    toogleModal()
    clearInputs()
}

cancelbtn.addEventListener('click', cancelModalHandler)


const confirmAddBtn = cancelbtn.nextElementSibling //OR ADD AN ID

confirmAddBtn.addEventListener('click', () => {
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
  updateList()
  renderNewElement(newItem.id ,newItem.title, newItem.url, newItem.rating)
  console.log(listItems)
  clearInputs()

})


const clearInputs = () => {

  for (const userInput of userInputs){
    userInput.value = ''
  }

}



const entryTextSection = document.getElementById('entry-text')

const updateList = () => {
  if(listItems.length === 0){
    entryTextSection.style.display = 'block'
  }
  else {
  entryTextSection.style.display = 'none' }
}




const deleteItemHandler = (id) => {


  let deleteIndex = 0 // TO FIND THE INDEX

  

  for (const item of listItems){  // LOOP THROUGH THE LIST ARRAY
    if (item.id == id) {  // IF THE CLICKED ID WAS FOUND BREAK
      break
    }
    deleteIndex++  // IF THE CLICKED ID WAS NOT FOUND MOVE TO THE NEXT ELEMENT
  }
  
  listItems.splice(deleteIndex,1) // REMOVES THE ELEMENT AT 'deleteIndex'
  const listRoot = document.getElementById('book-list')  // GET THE LIST
  listRoot.children[deleteIndex].remove()  // DELETE THE CHILD CORRESPONDING TO THE ARRAY ELEMENT 
  updateList() // IF 0 ELEMENTS 


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

  newElement.addEventListener('click' , deleteItemHandler.bind(this,id))

}


let itemId = 0 //GLOBAL

