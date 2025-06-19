import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    _id: String,
    description: String,
    dueDate: String,
    points: String,
    startDate: String,
    title: String,
    course: { type: String, ref: "CourseModel" },
  },
  { collection: "assignments" }
);
export default schema;