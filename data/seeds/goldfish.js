
exports.seed = async function(knex) {
  // clears out the table so we can start fresh
  // truncate does more than .del(), like resetting the autoincrement counts
  await knex("goldfish").truncate()
  await knex("goldfish").insert([
    { breed: "oranda"},
    { breed: "ranchu"},
    { breed: "ryukin"},
  ])
};
