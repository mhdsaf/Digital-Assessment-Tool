// file that starts up our application
const express = require('express');

const path = require('path');

require('./db/dbConnect');

const hbs = require('hbs');

const app = express();

const port = process.env.PORT; // initialization for heroku deployment

const userRouter = require('./routes/user');

//const taskRouter = require('./routes/tasks');

app.use(express.json()); //automatically parses JSON request into javascript object



//define paths for Express Configuration (static, views, partials)
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsDirectoryPath = path.join(__dirname,'../templates/views');
const partialsDirectoryPath = path.join(__dirname, '../templates/partials');

//Setup handlebars engine, cutomizing the views path, and configuring partials directory
app.set('view engine','hbs');
app.set('views',viewsDirectoryPath);
hbs.registerPartials(partialsDirectoryPath);
// Setup static directory
app.use(express.static(publicDirectoryPath))

app.use(userRouter);

//app.use(taskRouter);
// Done with setup

app.get('', async (req,res)=>{
    res.render('registration')
    // send json
    // send html
})
app.listen(3000, ()=>{
    console.log("Server is up on running!");
    console.log(3000)
})
