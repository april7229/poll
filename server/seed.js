const db = require( './models' );

const users = [
    { username: 'username', password: 'password' },
    { username: 'kelvin', password: 'paaword' }
    
];

const polls = [
    {
        question: ' whis the best JavaScript framework',
        options: ['Angular', 'React', 'VuesJS']
    },
    { question: 'who is the best mutant', options: [ 'Wolverine', 'Deadpool' ] },
    { question: 'Truth or dare', options: [ 'Truth', 'Dare' ] },
    
]
