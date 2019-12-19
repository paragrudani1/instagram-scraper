const express = require('express');
// const scraper = require('./scrapper')
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const scraper = require('./scraper');
const app = express();

mongoose.Promise = global.Promise;


app.use(express.static('public'))
// connect mongoose
mongoose.connect('mongodb+srv://paragpatel:parag901@cluster0-gbj7v.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('MongoDB Connected')
    }).catch(err => {
        console.log(err);
    })


require('./models/value');

// Mongo Model
const UserInput = mongoose.model('userInput')


app.set('view engine', 'ejs');

// body parser middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Home Page
app.get('/', (req, res) => {
    res.render('index')
})


app.post('/', (req, res) => {
    const input = {
        username : req.body.Search
    }
    
    
    new UserInput(input)
    .save()
    .then(userInput => {
        UserInput.find({})
        .then(userinput => {
            scraper
                .ScrapInstagram(userinput[userinput.length - 1].username)
                .then(data => {
                        res.render('response/data', {
                            userinput: userinput,
                            data: data,
                            title: 'Your Results'
                    })
                })
        })
    })
})



app.listen(process.env.PORT || 8000, () => {
    console.log('Server started');
})






