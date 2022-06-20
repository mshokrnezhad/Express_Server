const express = require("express");
const { join } = require("path");
const path = require("path")
const friendsRouter = require("./routers/friends.router");
const messagesRouter = require("./routers/messages.router")

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    const startTime = Date.now();
    next();
    const resTime = Date.now() - startTime;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${resTime}ms`)
})

app.use("/site", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
})