Dentro da pasta back end, cria um arquivo chamado db.js com o seguinte conteúdo:

import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "crud"
})