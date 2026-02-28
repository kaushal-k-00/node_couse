const fs = require('fs');

fs.writeFile("Output.txt", "Writing File" , (err) => {
  if(err) 
  console.log("Error Occurred")
  else console.log("File Written Succesfully")
})



console.log("You are best.");