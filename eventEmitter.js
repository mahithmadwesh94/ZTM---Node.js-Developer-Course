const EventEmiiter = require('events');
const celebrity = new EventEmiiter();

//Observer 1 fan
celebrity.on('race win',function(){
    console.log('Congratulations! You are the best!');
})

//Observer 1 competitor
celebrity.on('race win',function(){
    console.log('Boo! I Could have done better!');
})

celebrity.on('race',function(result){
    if(result === 'lost'){
        console.log('No Worries!, Everyday is not a sunday');
    }
});

process.on('exit',function(code){
    console.log(`Process ended with code ${code}`);
})

celebrity.emit('race win');
celebrity.emit('race','lost');