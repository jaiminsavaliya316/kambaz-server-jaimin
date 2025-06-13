import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

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

