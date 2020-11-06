// 1) nodemon install: < npm install nodemon --save -D >
// 2) knex install: < npm install knex --save
// 3) sqlite3 install: < npm install sqlite3 >
// 4) dotenv install: < npm install dotenv -D >
// 5) cross-env install: < npm install --save-dev cross-env >
// 6) set up server in server.js
// 7) set up index.js file to run server on designated port with server.listen
// 8) add < "server": "nodemon index.js", "start": "node index.js" > to package.json (to run serve with < npm run server >
//    command in terminal)

const server = require("./server")

const port = process.env.PORT || 2500

server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`)
})

module.exports = server