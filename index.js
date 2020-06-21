const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
var responseTime = require("response-time");

const http = require("http");

const app = express();

app.use(logger("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 8000;
let totalRequests = 0; // total incoming requests
app.set("average-response-time", 0);
app.use(
  responseTime(function(req, res, time) {
    totalRequests++; // increment on each incoming request
    let avgResponseTime = parseFloat(app.get("average-response-time"));
    let newAvg = (time + avgResponseTime) / totalRequests; // new average response time
    app.set("average-response-time", newAvg.toFixed(2)); // set to contain the new average response time value
    console.log(
      "average server response time is now " + app.get("average-response-time")
    ); // console to verify, now available globally in `app`
  })
);

require("./routes/users")(app);
require("./routes/stats")(app);

app.set("port", port);
const server = http.createServer(app);
server.listen(port, () => {
  console.log("listening on port " + port);
});
