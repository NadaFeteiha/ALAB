import mongoose from "mongoose";


const score = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  }
},
);

const GradesSchema = new mongoose.Schema(
  {
    learner_id: {
      type: Number,
      required: true,
    },
    class_id: {
      type: Number,
      required: true,
    },
    scores: {
      default: [score],
    }
  }
);

export default mongoose.model("Grades", GradesSchema);
