// Note that the server (i.e. the server.js file) is separated from the code that runs the server (in index.js) in order to allow for 
// tests to be run on the server without starting a new instance of the API and resulting in an "address (port) in use" error every 
// time a test is run. 

const express = require("express")
const goldfishRouter = require("./goldfish/goldfish-router")

const server = express()

server.use(express.json())
server.use("/goldfish", goldfishRouter)

server.get("/", (req, res) => {
	res.json({
		message: "Welcome to our API",
	})
})

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server