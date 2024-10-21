import express from 'express';
import mysql from 'mysql';    
import cors from 'cors';  // Para permitir peticiones desde el cliente

const app = express();
const PORT = 3000; // Cambiado a 3000

// Configuración de la conexión a la base de datos MySQL
const dbConnection = mysql.createConnection({
    host: 'bjf9zqyloqdblun4rwfj-mysql.services.clever-cloud.com',
    user: 'u1ma7b61o7vlgxwr',
    password: 'TowNJ6Zzb2PJd8f5AYU9',
    database: 'bjf9zqyloqdblun4rwfj'
});

// Establecer la conexión a la base de datos
dbConnection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos MySQL');
});

// Middleware para parsear JSON
app.use(express.json());
app.use(cors());  // Middleware CORS para permitir peticiones desde el frontend

// Ruta para crear un nuevo usuario
app.post('/api/usuarios', (req, res) => {
    const { nombre, correo } = req.body;

    const SQL_QUERY = 'INSERT INTO Usuarios (nombre, correo) VALUES (?, ?)';
    dbConnection.query(SQL_QUERY, [nombre, correo], (err, result) => {
        if (err) {
            console.error('Error al insertar en la base de datos:', err);
            res.status(500).json({ error: 'Error al crear usuario' });
            return;
        }
        res.status(201).json({ message: 'Usuario creado exitosamente' });
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
