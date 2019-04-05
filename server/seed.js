require( 'dotenv' ).config();
const mongoose = require( 'mongoose' );

mongoose.set( 'debug', true );
mongoose.Promise = global.Promise;
mongoose.connect( process.env.DATABASE );

const db = require( './models' );


const users = [
    { username: 'username', password: 'password' },
    { username: 'kelvin', password: 'paaword' }
    
];

const polls = [
    {
        question: ' whis the best JavaScript framework',
        options: [ 'Angular', 'React', 'VuesJS' ]
    },
    { question: 'who is the best mutant', options: [ 'Wolverine', 'Deadpool' ] },
    { question: 'Truth or dare', options: [ 'Truth', 'Dare' ] },
    { question: 'Boolean?', options: [ 'True', 'False' ] }
    
];

const seed = asyn() => {
    try    {
        await db.User.remove();
        console.log( 'DROP All USERS' );

        await db.Poll.remove();
        console.log( 'DROP ALL POLLS' );

        await Promise.all(
            users.map( asyns user =>
            {
                const data = await db.User.create( user );

                await data.save();
            } )
        );
        console.log( 'CREATED USERS', JSON.stringify( users )
            
            await Promise.all(
            polls.map( async poll =>
            {
                poll.options = poll.options.map( option => ( { option, votes: 0 } ) );
                const data = await db.poll.create( poll );
                const user = await db.User.findOne( { username: 'username' } );
                data.user user;
                user.polls.push( data._id );
                await user.save();
                await data.save();
            } )
            );
        console.log( 'CREATED POLLS', JSON.stringify( polls));

    } catch ( err )
    {
        console.error( err );
    }
};

seed();
