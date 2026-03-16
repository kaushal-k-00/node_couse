const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use((req,res,next) => {
  console.log("First Dummy Middleware", req.url,req.method)
  next();
})

app.use((req,res,next) => {
  console.log("Second Dummy Middleware",req.url,req.method)
  next();
})

// app.use((req,res,next) => {
//   console.log("Third Dummy Middleware",req.url,req.method)
//   res.send("<h1>Welcome to Complete Coding</h1>");
// })

app.get("/",(req,res,next)=>{
  console.log("Handling / for GET", req.url, req.method);
  res.send(`<h1>Welcome to Complete Coding</h1>`)
})

app.get("/contact-us",(req,res,next)=>{
  console.log("Handling /contact-us  for GET", req.url, req.method);
  res.send(`
    <h1>Please fill your details</h1>
    <form action="/contact-us" method="POST">
    <input type="text" name="name" placeholder="Enter your name" />
    <input type="text" name="email" placeholder="Enter your email" />
    <input type="submit" text="submit" />
    </form>
    `)
})

app.post("/contact-us",(req,res,next)=>{
  console.log("First Handling",req.url,req.method,req.body);
  next();
})

app.use(bodyParser.urlencoded());

app.post("/contact-us",(req,res,next) => {
  console.log("Handling /contact-us for POST",req.url,req.method,req.body)
  res.send(`<h1>We will contact you shortly</h1>`)
})

const PORT = 3002;
app.listen(PORT,()=>{
  console.log(`Server is running as http://localhost:${PORT}`)
})
