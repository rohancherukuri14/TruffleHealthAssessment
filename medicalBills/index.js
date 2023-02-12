const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

let bills = [];

app.get("/items", (req, res) => {
  res.json(bills);
});

app.post("/items", (req, res) => {
  let bill = req.body;
  if (
    bill.hasOwnProperty("name") &&
    bill.hasOwnProperty("address") &&
    bill.hasOwnProperty("date") &&
    bill.hasOwnProperty("hospital") &&
    bill.hasOwnProperty("amount")
  ) {
    bills.push(bill);
    res.json(bill);
  } else {
    res.send("Invalid JSON request");
  }
});

app.listen(3000, () => {
  console.log("Medical Bill app listening on port 3000!");
});
