const express = require("express")
const Goldfish = require("./goldfish-model")

const router = express.Router()

router.get("/", async (req, res, next) => {
	try {
		res.json(await Goldfish.find())
	} catch(err) {
		next(err)
	}
})

router.get("/:id", async (req, res, next) => {
	try {
		const goldfish = await Goldfish.findById(req.params.id)
		if (!goldfish) {
			return res.status(404).json({
				message: "Goldfish not found",
			})
		}

		res.json(goldfish)
	} catch {
		next(err)
	}
})

router.post("/", async (req, res, next) => {
	try {
		const goldfish = await Goldfish.create(req.body)
		res.status(201).json(goldfish)
	} catch (err) {
		next(err)
	}
})

router.delete('/:id', async (req, res, next) => {
    const { id } = req.params;

    try {
        const goldfish = await Goldfish.remove(id)
        res.status(204).json({ message: `${goldfish} deleted`})
    } catch (err) {
        next(err)
    }
})

module.exports = router