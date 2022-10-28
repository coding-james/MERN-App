const router = require("express").Router();
const { caveModel } = require("../cavedb");

router.get('/', (req, res) => res.send("Hello, do you happen to know the way?"));


// Create
router.post("/createCave", (req, res, next) => {
    if (!req.body.cave) return next({ status: 400, message: "Missing cave name" })
    caveModel.create(req.body).then(result => res.status(201).send(result)).catch(err => next(err));
});


// Read All
router.get("/getAllCaves", (req, res) => caveModel.find({}).then(results => res.send(results)).catch(err => next(err)));

// Read a specific cave
router.get("/getCave/:id", (req, res, next) => {
    console.log("ID:", req.params.id);
    if (!req.params.id) return next({ status: 400, message: "Missing ID" })
    caveModel.findById(req.params.id).then(result => res.send(result)).catch(err => next(err));
});


// Update
router.patch("/updateCave/:id", (req, res) => {
    console.log("ID:", req.params.id);
    if (!req.params.id) return next({ status: 400, message: "Missing ID" })
    caveModel.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(result => res.status(202).send(result)).catch(err => next(err)); 
});


//Delete
router.delete("/removeCave/:id", (req, res, next) => {
    const { id } = req.params;
    console.log("ID:", id);
    caveModel.findByIdAndDelete(id).then(result => res.send(result)).catch(err => next(err));
});

router.delete("/removeCave/:id", async (req, res, next)=> {
    const id = req.params.id;
    if(!caveModel.findById(id)) return next({ status:404, message: "There is no cave with this id"});
    caveModel.findByIdAndDelete(id).then(result => res.send(result)).catch(err => next(err));
});

module.exports = router;