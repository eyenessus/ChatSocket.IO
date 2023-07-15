import express, {Express, Request, Response} from 'express';
import http from "http";
import {Server} from 'socket.io';
const app:Express = express();
const server = http.createServer(app);
const io = new Server(server);
app.get('/', (req:Request, res:Response):void => {
    res.sendFile(__dirname + '/page/index.html');
})

io.on('connection', (socket) => {
    console.log('Usuario conectado!');
    socket.on('disconnect', () => {
        console.log('Usuario desconectado!');
    });
    socket.on('chat message', (msg) => {
        console.log('mensagem',msg) ;
        io.emit('chat message', msg);
    })
});





server.listen(3000,():void=>{
    console.log('Servidor esta ouvindo')
})