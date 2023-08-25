import { db } from "../db.js";

export const getPacientes = (_, res) => {
    const q = "SELECT * FROM pacientes";

    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json(data);
    });
};

export const addPaciente= (req, res) => {
    const q =
      "INSERT INTO usuarios(`nome`, `email`, `endereço`, `data_nascimento`) VALUES(?)";
  
    const values = [
      req.body.nome,
      req.body.email,
      req.body.endereço,
      req.body.data_nascimento,
    ];
  
    db.query(q, [values], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário criado com sucesso.");
    });
  };
  
export const updatePaciente = (req, res) => {
    const q =
      "UPDATE usuarios SET `nome` = ?, `email` = ?, `endereço` = ?, `data_nascimento` = ? WHERE `id` = ?";
  
    const values = [
      req.body.nome,
      req.body.email,
      req.body.endereço,
      req.body.data_nascimento,
    ];
  
    db.query(q, [...values, req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário atualizado com sucesso.");
    });
  };
  
export const deletePaciente = (req, res) => {
    const q = "DELETE FROM usuarios WHERE `id` = ?";
  
    db.query(q, [req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário deletado com sucesso.");
    });
  };