// core module
const path = require('path')

//Local Module
const rootDir = require('./utils/pathUtils')

const express = require('express');
const bodyParser = require('body-parser');
const contactRouter = require('./routes/contactRouter');
const homeRouter = require('./routes/homeRouter');


const app = express();

app.use(bodyParser.urlencoded());
app.use(homeRouter);
app.use(contactRouter)

app.use((req,res,next)=>{
    res.sendFile(path.join(rootDir, 'views','404.html'));
})

const PORT = 3002;
app.listen(PORT,()=>{
  console.log(`Server is running as http://localhost:${PORT}`)
})
