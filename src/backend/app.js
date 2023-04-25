const express = require('express');
const bodyParser = require('body-parser')
const app = express();

// Port 8082 for back-end server, Port 3000 for front-end
const port = process.env.PORT || 8082;

//cors HAS to be before any app.get calls
const cors = require('cors');
app.use(cors({ origin: true, credentials: true}));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
  });
app.use(bodyParser.json())

// Displayed on browser
app.get('/', (req, res) => res.send('Hello world!'));

//app.listen(port, () => console.log(`Server running on port
//${port}`));
const users = require("./routes/api/users");
app.use('/api/users', users);
const mongoose = require('mongoose');
const items = require('./routes/api/items');
app.use('/api/items',items);

// Connect to Database
app.use(express.json({extended: false}));
const conn_str = 'mongodb+srv://dh67149:mI0UNYi19IlRaHMo@cluster0.o8nso8o.mongodb.net/?retryWrites=true&w=majority';
mongoose.set('strictQuery', false);
mongoose.connect(conn_str, {
    useUnifiedTopology : true,
    useNewUrlParser : true
})
.then(() => {
    app.listen(port)
    console.log(`MongoDB Connect Suceeded...`)
})
.catch(err => {
    console.log(`Erro in DB Connection ${err}`);
})

