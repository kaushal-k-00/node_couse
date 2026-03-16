//core module
const path = require('path');

// External module
const express = require("express");

// Local Module
const userRouter = require("./routes/userRouter")
const hostRouter = require("./routes/hostRouter")
const rootDir = require('./utils/pathUtil') 

const app = express();

app.use(express.urlencoded());
app.use(userRouter);
app.use("/host",hostRouter);

app.use((req,res,next) => {
  res.status(404).sendFile(path.join(rootDir, 'views','404.html'));
})

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
