import express from "express";
import { getPacientes, addPaciente, updatePaciente, deletePaciente } from "../controllers/pacientesController.js"

const router = express.Router() 

router.get("/", getPacientes)

router.post("/", addPaciente)

router.put("/:id", updatePaciente)

router.delete("/:id", deletePaciente)

export default router