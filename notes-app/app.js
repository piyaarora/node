import yargs from 'yargs';

// Customize yargs version
const { argv } = yargs
  .version('1.1.0')
  .command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})
  .command({
    command: 'remove',
    describe: 'Remove a note',
    handler: () => {
      console.log('Removing the note');
    },
  })
  .command({
    command: 'list',
    describe: 'List your notes',
    handler: () => {
      console.log('Listing out all notes');
    },
  })
  .command({
    command: 'read',
    describe: 'Read a note',
    handler: () => {
      console.log('Reading a note');
    },
  });

// console.log(argv);
yargs.parse();