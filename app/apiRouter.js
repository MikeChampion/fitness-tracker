import Router from "express";
import fitnessController from "./controller.js";

const router = new Router();

router.get("/workouts", async (_, res) => {
  try {
    const workout = await fitnessController.index();
    res.json(workout);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/workouts", async (_, res) => {
    try {
      const newWorkout = await fitnessController.create();
      res.status(201).json(newWorkout);
    } catch (error) {
      res.status(400).json(error.message);
    }
});

router.get("/workouts/range", async (_, res) => {
    try {
        const workouts = await fitnessController.show();
        res.json(workouts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.put("/workouts/:id", async (req, res) => {
  try {
    const updatedWorkout = await fitnessController.update(
      req.params.id,
      req.body
    );
    res.status(200).send(updatedWorkout);
  } catch (error) {
    res.status(404).json(error.message);
  }
});

router.delete("/workouts/", async (req, res) => {
  try {
    await fitnessController.deleteAll();
    res.status(204).send();
  } catch (error) {
    res.status(404).json(error.message);
  }
});

export default router;