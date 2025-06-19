import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

export function addEnrollment(userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
  return true;
}

export function deleteEnrollment(userId, courseId){
  const { enrollments } = Database;
  console.log('data = ', userId, courseId)
  Database.enrollments = enrollments.filter((ed) => !(ed.course === courseId && ed.user === userId))
  return true;
}

export function getAllEnrollments(){
  return Database.enrollments;
}

export async function findCoursesForUser(userId) {
 const enrollments = await model.find({ user: userId }).populate("course");
 return enrollments.map((enrollment) => enrollment.course);
}

export async function findUsersForCourse(courseId) {
 const enrollments = await model.find({ course: courseId }).populate("user");
 return enrollments.map((enrollment) => enrollment.user);
}
export function enrollUserInCourse(user, course) {
 const newEnrollment = { user, course, _id: `${user}-${course}` };
 return model.create(newEnrollment);
}
export function unenrollUserFromCourse(user, course) {
 return model.deleteOne({ user, course });
}
