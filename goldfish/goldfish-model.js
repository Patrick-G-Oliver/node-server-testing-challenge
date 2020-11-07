const db = require("../data/config")

function find() {
	return db("goldfish")
}

function findById(id) {
	return db("goldfish").where({ id }).first()
}

async function create(data) {
	const [id] = await db("goldfish").insert(data)
	return findById(id)
}

function remove(id) {
	return db("goldfish").where({ id }).del()
}

module.exports = {
    find,
    findById,
    create,
    remove,
}