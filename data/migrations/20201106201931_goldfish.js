exports.up = async function(knex) {
	await knex.schema.createTable("goldfish", (table) => {
		table.increments()
		table.text("breed").notNullable().unique()
	})
}

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists("goldfish")
}