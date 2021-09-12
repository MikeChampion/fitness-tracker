import { ObjectId } from "mongodb";
import client from "./loader.js";
import model from "./model.js";

const fitnessConnection = client.db("workoutDB").collection("workouts");

export default {
  getAll() {
    return fitnessConnection.find({}).toArray();
  },

  // create() {
  //   const date = new Date();
  //   return fitnessConnection.insertOne(
  //     {day: date, exercises: [] }
  //   );
  // },

  // update(id, updateNote) {
  //   return fitnessConnection.updateOne(
  //     { _id: ObjectId(id) },
  //     { $set: updateWorkout }
  //   );
  // },
  // show(id) {
  //   return fitnessConnection.findOne(ObjectId(id));
  // },
  // delete(id) {
  //   return fitnessConnection.deleteOne({ _id: ObjectId(id) });
  // },
  // deleteAll() {
  //   return fitnessConnection.deleteMany({});
  // },
};
