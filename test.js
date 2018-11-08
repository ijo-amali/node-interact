const { npm, node } = require("./main")
const colors = require("colors")

var randWords = ["cli", "robotics", "iot", "framework", "react"]
var randWord = randWords[Math.floor(Math.random() * (randWords.length - 1))]
var search = npm.search(randWord).split("\n")

console.log(
    `Npm Search for ${randWord}\n`.green,
    search[1].bgWhite.blue,
    search[2].bgWhite.black,
    "\n\n",
    "Node version:".blue, node.version().blue
)