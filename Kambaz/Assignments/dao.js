// import Database from "../Database/index.js";
import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

export function findAssignmentsForCourse(courseId) {
  // const { assignments } = Database;
  return model.find({ course: courseId });
}

// export function createModule(module) {
//   const newModule = { ...module, _id: uuidv4() };
//   Database.modules = [...Database.modules, newModule];
//   return newModule;
// }

export function addAssignment(assignment){
  const newAssignment = {...assignment, _id: uuidv4()};
  return model.create(newAssignment)
}

export function deleteAssignment(assignmentId) {
  return model.deleteOne({ _id: assignmentId });
}

export function updateAssignment(assignmentId, assignmentUpdates) {
  console.log("Updating assignment with ID:", assignmentUpdates);
  const status = model.updateOne({ _id: assignmentId }, assignmentUpdates);
  console.log("Update status:", status);
  return status;
}

export function getAssignmentById(assignmentId){
  return model.findById({ _id: assignmentId });
}
