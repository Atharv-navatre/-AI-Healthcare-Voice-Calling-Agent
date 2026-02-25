import express from "express";
import { bookAppointment } from "../controllers/appointment.controller.js";

const router = express.Router();

router.post("/book", bookAppointment);

export default router;