import Router from "express";
import fitnessController from "./controller.js";

const router = new Router();

router.get("/workouts", async (req, res) => {
    try {
        const workouts = await fitnessController.getAll();
        res.json(workouts);
    } catch (error) {
        res.status(500).send({message: err.message});
    }
});

router.get("/stats", async (req, res) => {
    try {
        const workouts = await fitnessController.getAll();
        res.json(workouts);
    } catch (error) {
        res.status(500).send({message: err.message});
    }
});

router.get("/workouts/range", async (req, res) => {
    try {
        const workouts = await fitnessController.getAll();
        while (workouts.length > 7) {
            workouts.shift();
        };
        res.json(workouts);
    } catch (error) {
        res.status(500).send({message: err.message});
    }
});

// router.get("/notes/:id", async (req, res) => {
//   try {
//     const note = await noteController.show(req.params.id);
//     res.status(201).json(note);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// router.put("notes/:id", async (req, res) => {
//   try {
//     const updateNote = await noteController.update(req.params.id, req.body);
//     res.status(200).json(updateNote);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// router.post("/notes", async (req, res) => {
//   try {
//     const newNote = await noteController.create(req.body);
//     res.status(201).json(newNote);
//   } catch (error) {
//     res.status(400).json(error.message);
//   }
// });

// router.delete("/notes/:id", async (req, res) => {
//   try {
//     await noteController.delete(req.params.id);
//     res.status(204).send();
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// router.delete("/notes", async (req, res) => {
//   try {
//     await noteController.deleteAll();
//     res.status(204).send();
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

export default router;
