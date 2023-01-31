const express = require('express')
const AppRouter = require('./routes/app.routes')
const IndexRouter = require('./routes/index.routes')
const path = require('path')
const handlebars = require('express-handlebars')
const { Server } = require('socket.io')
require('./config/dbConfig')

const app = express();
const PORT = 8080;


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.engine('handlebars', handlebars.engine())
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'handlebars');


const httpServer = app.listen(PORT, ()=>{
    console.log('Listening on port => ', PORT)
})

const io = new Server(httpServer)


io.on('connection', (socket)=>{
    console.log("new client connected");
    app.set('socket', socket)
    app.set('io', io)
    socket.on('login', user =>{
        socket.emit('welcome', user)
        socket.broadcast.emit('new-user', user)
    })
})

//rutas
app.use("/app", AppRouter); 
app.use("/view", IndexRouter); 