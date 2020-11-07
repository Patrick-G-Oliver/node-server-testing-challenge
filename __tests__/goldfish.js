const supertest = require("supertest")
const server = require("../server")
const db = require("../data/config")

// this jest hook runs the seeds before every single test,
// so each one can have fresh start (i.e. a fresh copy of the database from the seeds file)
beforeEach(async () => {
    await db.seed.run()
})

// this is a jest hook that will run after all the tests in this file have run 
afterAll(async () => {
    // close the database connection before the test runner ends, 
    // to prevent any warnings about leaks
    await db.destroy()
})

describe("goldfish integration tests", async () => {
    it("creates a new golfish resource", async () => {
        const res = await supertest(server)
            .post("/goldfish")
            .send({ breed: "shubunkin" })
        expect(res.statusCode).toBe(201)
        expect(res.type).toBe("application/json")
        expect(res.body.breed).toBe("shubunkin")
        // we don't know exactly what the new ID will be, 
        // just make sure something was generated
        expect(res.body.id).toBeDefined()
    })

    it("throws an error if breed info is omitted", async () => {
        const res = await supertest(server)
            .post("/goldfish")
            .send({ breed: null })
        expect(res.statusCode).toBe(500)
    })

    it("deletes a golfish resource chosen by id", async () => {
        const res = await supertest(server)
            .delete("/goldfish/2")
        expect(res.statusCode).toBe(204)
    })

    it("throws an error if id is not found for delete", async () => {
        const res = await supertest(server)
            .delete("/goldfish/100")
        expect(res.statusCode).toBe(404)
    })
})