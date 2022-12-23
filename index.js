//
const express = require('express')
const path = require('path')

//realtime reload server changes
require('dotenv').config()

//app de express
const app = express()

//node server
const server = require('http').createServer(app)
module.exports.io = require('socket.io')(server)
//mensajes io
require('./sockets/socket')

//path publico => ex: public/home
const publicPath = path.resolve(__dirname,'public')
server.listen(process.env.PORT,(err)=>{
   if(err) throw new Error(err)
   console.log('Servidor corriendo en puerto:', process.env.PORT)
})

app.use(express.static(publicPath))