const EventEmitter = require('events')
const emitter = new EventEmitter()

// what is class
// class: Human(blueprint)
// object:john(actualobject)

// Register a Listener
emitter.on("messageLogged",function(args){
    console.log("Listener Called",args)
})



// Raise Event
emitter.emit('messageLogged', {id:1, url:"https://myurl"});
// Event fire after 2000 millisecond
setTimeout(() =>{
    emitter.emit('messageLogged', {id:2, from:"setTimeout"});
},2000)
