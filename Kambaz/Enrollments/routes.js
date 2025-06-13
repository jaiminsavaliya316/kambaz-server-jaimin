import * as enrollmentDao from "./dao.js";
export default function EnrollmentRoutes(app) {
  const createEnrollment = (req, res) => {
    const status = enrollmentDao.addEnrollment(req.body.user, req.body.course);
    res.send(status);
   };
  const deletEnrollment = (req, res) => {
    const {user, course} = req.query;
    const status = enrollmentDao.deleteEnrollment(user, course);
    res.send(status);
   };

  const getEnrollment = (req, res) => {
    const status = enrollmentDao.getAllEnrollments();
    res.send(status);
   };

  app.get("/api/enrollment", getEnrollment);
  app.post("/api/enrollment", createEnrollment);
  app.delete("/api/enrollment", deletEnrollment);
}
