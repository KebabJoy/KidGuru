//const db = require("./models/")

const cors = require("cors");
const express = require("express") // our express server
const app = express() // generate an app object
const bodyParser = require("body-parser"); // requiring the body-parser
const { get } = require('mongoose');
const mapGamesId = require('./menu');

const PORT = process.env.PORT || 3000 // port that the server is running on => localhost:3000
app.use(bodyParser.json()) // telling the app that we are going to use json to handle incoming payload
app.use(cors());

const MathGuru = require ('./math_guru')
function success(res, payload) {
  return res.status(200).json(payload);
}

app.get("/main_page", async (req, res, next) => {
  try {
    return  success(res, mapGamesId)
  } catch(err) {
    next({ status: 400, message: "failed to get menu" })
  }
})

app.get("/math_guru", async (req, res, next) => {
  try {
    if(req.query.next > 0){
      console.log(MathGuru.genNextTask())
      MathGuru.genNextTask()
    }

    return success(res, MathGuru.genNextTask())
  } catch(err) {
    next({ status: 400, message: "failed to get the game" })
  }
})


app.listen(PORT, () => {
  // listening on port 3000
  console.log(`listening on port ${PORT}`) // print this when the server starts
})