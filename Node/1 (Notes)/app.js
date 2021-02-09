const notes= require("./notes.js");
const yargs = require("yargs");
const { argv } = require("process");

yargs.command({
    command: 'add',
    describe: 'ADD A NEW NOTE!',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
        },
    },
    handler: (argv) => {
        console.log("ADDING A NEW NOTE!!!" , argv.title, argv.body);
        notes.addNote( argv.title, argv.body)
    }

})

yargs.command(
    {
        command: 'remove',
        describe: 'REMOVE A NOTE',
        builder: {
            title: {
                describe: 'TITLE',
                demandOption: true
            }
            
        },
    handler: (argv) => {
            console.log('REMOVING NOTE!!! ' + argv.title)
            notes.removeNote(argv.title)
        }
    
})

yargs.command(
    {
        command: 'list',
        describe: 'LIST ALL',
        builder: {
            showBody: {
                describe: 'SHOW BODY OF NOTE',
            }
            
        },
    handler: (argv) => {
            console.log('LISTING NOTES!!! ')
            notes.listNotes(argv.showBody)
        }
    
})




yargs.parse()
