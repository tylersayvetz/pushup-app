import Nedb from "nedb-promises";
import config from "config";
import { ExerciseModel } from "./models/models";

import { ExerciseFindOptions } from "./models/types";
import { ExerciseProvider } from "../providers/exercise_provider";

export default class DbExerciseProvider extends ExerciseProvider {
    Exercises: Nedb;

    constructor() {
        super();
        this.Exercises = new Nedb(config.get("db.exercises"));
        this.Exercises.ensureIndex({ fieldName: "code", unique: true });
    }

    async insert(name: string, reps: number, roomCode: string): Promise<ExerciseModel | Error> {
        const found = (await this.Exercises.find({ name, roomCode })) as ExerciseModel[];
        if (found.length !== 0) {
            return new Error("Already an exercise with that name and room");
        }
        const inserted = (await this.Exercises.insert({
            name,
            reps,
            roomCode,
            users: {}
        })) as ExerciseModel;
        return inserted;
    }

    async findAll(options: ExerciseFindOptions): Promise<ExerciseModel[] | Error> {
        const found = (await this.Exercises.find(options)) as ExerciseModel[];
        return found || new Error("error finding exercises");
    }
}
