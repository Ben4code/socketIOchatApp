//Make Client Connection
const socket = io.connect('http://localhost:3000');


//Query dom
let message = document.getElementById('message');
let handle = document.getElementById('handle');
let btn = document.getElementById('send');
let output = document.getElementById('output');
let feedback = document.getElementById('feedback');

//Emit Event
btn.addEventListener('click', ()=>{
    socket.emit('chat', {
        handle: handle.value,
        message: message.value
    });
    message.value = "";
});

//Listen for events from server
socket.on('chat', (data)=>{
    feedback.innerHTML = "";
    output.innerHTML += '<p><strong>' + data.handle + '</strong>: ' + data.message + '</p>'
});


//Listen for 
message.addEventListener('keypress', ()=>{
    socket.emit('typing', handle.value);
});

socket.on('typing', data=>{
    feedback.innerHTML = '<p><em>'+ data + ' is typing... </em></p>'
})