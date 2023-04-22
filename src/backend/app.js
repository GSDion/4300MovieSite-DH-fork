const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello world!'));
app.get('/', (req, res) => res.send('Hello World!'));
const port = process.env.PORT || 8082;
//app.listen(port, () => console.log(`Server running on port
//${port}`));
const users = require("./routes/api/users");
app.use('/api/users', users);

const mongoose = require('mongoose');
const cors = require('cors');
const items = require('./routes/api/items');
app. use('/api/items',items);
// Connect Database
app.use(cors({ origin: true, credentials: true}));

app.use(express.json({extended: false}));

//app.get('/', (req, res) => res.send('Hello World!'));

const conn_str = 'mongodb+srv://dh67149:mI0UNYi19IlRaHMo@cluster0.o8nso8o.mongodb.net/?retryWrites=true&w=majority';

mongoose.set('strictQuery', false);
mongoose.connect(conn_str, {
    useUnifiedTopology : true,
    useNewURLParser : true
})
.then(() => {
    app.listen(port)
    console.log(`MongoDB Connect Suceeded...`)
})
.catch(err => {
    console.log(`Erro in DB Connection ${err}`);
})
