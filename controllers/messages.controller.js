const path = require("path")

function getMessages(req, res) {
    res.sendFile(path.join(__dirname, "..", "files", "testText.txt"))
    // res.send("Hello World!");
}

function postMessages(req, res) {
    console.log("Changing the messages...")
}

module.exports = {
    getMessages,
    postMessages
}