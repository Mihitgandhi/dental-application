// const { viewport } = require('@popperjs/core');
const express = require('express');
const cors = require('cors');
const log = console.log;
const app = express();
const path = require('path');

const PORT = process.env.PORT || 8080;

app.use(cors({origin:"*"}));

app.use(express.urlencoded({
    extended: false
}));

app.use(express.json());

app.post('/email', (req,res) => {
    console.log('Data:', req.body);
    res.json({message: 'Message Received'})
});

app.get('/', (req,res) => {
    // res.sendFile(path.join(__dirname, 'src/app/components/book-appoinment', 'book-appoinment.component.html'));
    res.send('I am Server')});

app.listen(PORT, () => log('Server is starting on PORT, ', PORT));