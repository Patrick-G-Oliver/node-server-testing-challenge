// 1) nodemon install: < npm install nodemon --save -D >
// 2) knex install: < npm install knex --save
// 3) sqlite3 install: < npm install sqlite3 >
// 4) dotenv install: < npm install dotenv -D >
// 5) cross-env install: < npm install --save-dev cross-env >
// 6) set up server in server.js
// 7) set up index.js file to run server on designated port with server.listen
// 8) add < "server": "nodemon index.js", "start": "node index.js" > to package.json (to run serve with < npm run server >
//    command in terminal)
// 9) set up knex file (knexfile.js) with code for creating a production database and code for creating a testing database
// 10) add a data folder to contain migrations and seeds folders/files
// 11) set up config.js file
// 12) set up migrations folder with: npx knex migrate:make <desired '.db3'-filename> (see filename property in knexfile.js).
// 13) build data table(s) in migrations folder created in step 12
// 14) create .db3 data-table file by running: npx knex migrate:latest (see Step 4 for .db3 file name)
// 15) check out the newly-created .db3 table on TablePlus (SQL connection) (check both 'exports.up' and 'exports.down'
// 			function expressions with < npx knex migrate:latest > & < npx knex migrate:rollback >, respectively).
// 16) set up the goldfish folder with the goldfish-model.js and goldfish-router.js files


// Note that the server (i.e. the server.js file) is separated from the code that runs the server (in index.js) in order to allow for 
// tests to be run on the server without starting a new instance of the API and resulting in an "address (port) in use" error every 
// time a test is run. 
const server = require("./server")

const port = process.env.PORT || 2500

server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`)
})

module.exports = server