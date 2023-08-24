import express from "express";
import { getPacientes } from "../controllers/pacientesController.js"

const router = express.Router() 

router.get("/", getPacientes)

export default router