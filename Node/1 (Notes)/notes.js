
const fs = require('fs')

const addNote = (title, body) =>{

    console.log("-TITLE: " + title)
    console.log("-BODY: " + body)

    const notes = loadNotes()

    const duplicateNotes = notes.filter((note) => note.title == title)
    const duplicateNote = notes.find((note) => note.title == title)


if (duplicateNotes.length == 0) {
    notes.push({
        title: title,
        body: body
    })

    saveNotes(notes)
    console.log('NEW NOTE ADDED')
}
else{
    console.log('NEW NOTE NOT ADDED')

}
}


const removeNote = (title) => {
    console.log("REMOVE: " , title)
    const notes = loadNotes()

    const newNotes = notes.filter((note) => {
        return note.title != title
    })

    if(notes.length > newNotes.length){
        saveNotes(newNotes)
        console.log('NOTE REMOVED')
    }
    else{
        console.log('NO NOTE FOUND MATCHING THIS TITLE')

    }

}

const listNotes = (showBody = false) => {
    const notes = loadNotes()


    if(notes.length == 0) {
        console.log('EMPTY LIST OF NOTES!!!')
    }
    else{
        notes.forEach(note => {
            if(showBody){
                console.log("TITLE: " + note.title + " BODY: " + note.body)
            }
            else{
                console.log(note.title)
            }
        });
    }

}

const saveNotes = (notes) => {
    notes = JSON.stringify(notes)
    fs.writeFileSync('notes.json' , notes)
}




const loadNotes = () =>{
    try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON);
    }
    catch (e){
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}