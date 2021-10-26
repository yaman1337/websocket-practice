const socket = io("http://localhost:3000")
const textarea = document.querySelector('textarea')

socket.on('connect', (client) => {
    alert(`Connected with id ${client.id}`)
})

socket.on('received', syncedText => {
    sycnText(syncedText)
})

textarea.addEventListener('keydown', typingListener)

function typingListener() {
   socket.emit('typing', textarea.value)
}

function sycnText(newText) {
    textarea.value = text
}
