import connection from "../../services/db";

export default function handler(req, res) {
    try {
        const { name, email, password, phone } = req.body;

        if (!name || !email || !password || !phone) {
            throw new Error('Por favor, forneça todos os campos necessários.');
        }

        const sql = `INSERT INTO usuarios (name, email, password, phone) VALUES (?, ?, ?, ?)`;

        connection.query(sql, [name, email, password, phone], (error, results, fields) => {
            if (error) {
                throw new Error('Erro ao cadastrar usuário: ' + error.message);
            }

            res.status(201).json({ id: results.insertId });
        });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}
