const io = require('socket.io')(3000, {
    cors: {
        origin: ['http://04f6-103-104-30-135.ngrok.io','http://localhost:5500','https://admin.socket.io/','https://04f6-103-104-30-135.ngrok.io/']
    }
})

const { instrument } = require('@socket.io/admin-ui')

io.on('connection', (socket) => {
    socket.on('typing', text => {
        socket.broadcast.emit('received', text)
    })
})

instrument(io, {auth: false})