const dotenv = require('dotenv');
dotenv.config()

const express = require('express');
const session = require('express-session');
const app = express();
const path = require('path');
const cors = require('cors');
const router = require('./database/routes/router');

// Connection to Psostgres
const { Client } = require('pg');
const client = new Client({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
});

client.connect()
.then(() => console.log("Connected to PostgreSQL"))
.catch(err => console.error('Connection error', err.stack));

// End connection to database when app is closed
process.on('exit', () => {
    client.end();
});

const PORT = process.env.PORT;

app.use(express.static(__dirname))
console.log(__dirname);



// Data parser in Post
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

// Middleware
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'client/public')));
app.set('view engine', 'ejs');
app.set('views', 'client/views');

// Client session
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 60 * 60 * 1000, // Durée en millisecondes, ici définie à 1 heure
    },
}));

// Routes
app.use(router);



app.listen(PORT, () => {
    console.log(`ça marche ! Launched on http://localhost:${PORT}`)
});