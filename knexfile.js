module.exports = {
    // development database code: 
	development: {
		client: "sqlite3",
	useNullAsDefault: true,
	connection: {
		filename: "./data/goldfish.db3",
	},
	migrations: {
		directory: "./data/migrations",
	},
	seeds: {
		directory: "./data/seeds",
	},
    },
    
// to switch between development and testing run < npx knex migrate:latest --env=development > and
// < npx knex migrate:latest --env=testing >, respectively, in the terminal 

    // testing database code: 
	testing: {
		client: "sqlite3",
	useNullAsDefault: true,
	connection: {
		filename: "./data/goldfish.db3",
	},
	migrations: {
		directory: "./data/migrations",
	},
	seeds: {
		directory: "./data/seeds",
	},
	}
}
