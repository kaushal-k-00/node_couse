const fs = require("fs");

const userRequestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body><h1>Enter your details :</h1>");
    res.write('<form action="/submit-details" method="POST">');
    res.write(
      '<input type="text" name="name" placeholder="Enter your name"><br>',
    );
    res.write('<label for="gender">Gender :</label><br>');
    res.write(
      '<input type="radio" name="gender" id="male" value="male"> Male<br>',
    );
    res.write(
      '<input type="radio" name="gender" id="female" value="female"> Female<br>',
    );
    res.write('<button type="submit" value="Submit">Submit</button>');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (
    req.url.toLocaleLowerCase() === "/submit-details" &&
    req.method === "POST"
  ) {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
      const params = new URLSearchParams(fullBody);

      // const bodyObject = {}
      // for(const[key , val] of params.entries()){
      //   bodyObject[key] = val;
      // }

      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);
      fs.writeFileSync("user.txt", JSON.stringify(bodyObject), (error) => {
        console.log("Data written successfully");
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body>Hello This is First Program of NodeJS</body>");
    res.write("</html>");
    res.end();
  }
  // process.exit(); // stop event loop
};

module.exports = userRequestHandler;
