// Utilizar node src/ConexionDB.js 
import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

    const app = express();
    const PORT = 3000;

    // Middleware para parsear JSON y permitir CORS
    app.use(express.json());
    app.use(cors());

    // Función para crear una conexión a la base de datos
    function iniciarConexion() {
        return mysql.createConnection({
            host: 'bjf9zqyloqdblun4rwfj-mysql.services.clever-cloud.com',
            user: 'u1ma7b61o7vlgxwr',
            password: 'TowNJ6Zzb2PJd8f5AYU9',
            database: 'bjf9zqyloqdblun4rwfj'
        });
    }

    //Crear Paciente
    app.post('/api/crearPaciente', (req, res) => {
        const { nomUser, correoUser, contrasenaUser, nivelPermisos } = req.body;
    
        const dbConnection = iniciarConexion();
    
        dbConnection.connect((err) => {
            if (err) {
                console.error('Error al conectar a la base de datos:', err);
                res.status(500).json({ error: 'Error al conectar con la base de datos' });
                return;
            }
    
            const SQL_QUERY = 'CALL procedimiento_Crear_Paciente(?, ?, ?, ?)';
            dbConnection.query(SQL_QUERY, [nomUser, correoUser, contrasenaUser, nivelPermisos], (err, result) => {
                dbConnection.end(); // Cerrar la conexión después de la consulta
    
                if (err) {
                    console.error('Error al ejecutar el procedimiento:', err);
                    res.status(500).json({ error: 'Error al crear usuario' });
                    return;
                }
                res.status(201).json({ message: 'Usuario creado exitosamente' });
            });
        });
    });

    //Crear Especialista
    app.post('/api/crearEspecialista', (req, res) => {
        const { nomUser, correoUser, contrasenaUser, tipoUser, nivelPermisos, cedulaProfesional } = req.body;
    
        const dbConnection = iniciarConexion();
    
        dbConnection.connect((err) => {
            if (err) {
                console.error('Error al conectar a la base de datos:', err);
                res.status(500).json({ error: 'Error al conectar con la base de datos' });
                return;
            }
    
            const SQL_QUERY = 'CALL procedimiento_Crear_Especialista(?, ?, ?, ?, ?, ?)';
            dbConnection.query(SQL_QUERY, [nomUser, correoUser, contrasenaUser, tipoUser, nivelPermisos, cedulaProfesional], (err, result) => {
                dbConnection.end(); // Cerrar la conexión después de la consulta
    
                if (err) {
                    console.error('Error al ejecutar el procedimiento:', err);
                    res.status(500).json({ error: 'Error al crear especialista' });
                    return;
                }
                res.status(201).json({ message: 'Especialista creado exitosamente' });
            });
        });
    });    

    //Log In usuarios
    app.post('/api/LogInUsuario', (req, res) => {
        const { correoUser, contrasenaUser } = req.body;
    
        const dbConnection = iniciarConexion();
    
        dbConnection.connect((err) => {
            if (err) {
                console.error('Error al conectar a la base de datos:', err);
                res.status(500).json({ error: 'Error al conectar con la base de datos' });
                return;
            }
    
            const SQL_QUERY = 'CALL procedimiento_LogIn_Usuario(?, ?)';
            dbConnection.query(SQL_QUERY, [correoUser, contrasenaUser], (err, results) => {
                dbConnection.end(); // Cerrar la conexión después de la consulta
    
                if (err) {
                    console.error('Error al ejecutar el procedimiento:', err);
                    res.status(500).json({ error: 'Error al iniciar sesión' });
                    return;
                }
    
                // Verifica si se encontró un usuario
                if (results[0].length === 0) {
                    res.status(404).json({ message: 'Usuario no encontrado o credenciales incorrectas' });
                } else {
                    // Enviar todos los datos del usuario obtenidos
                    res.status(200).json(results[0][0]); // Devuelve el primer registro completo
                }
            });
        });
    });    
    
    //Crear pregunta frecuente
    app.post('/api/crearPregunta', (req, res) => {
        const { pregunta, idUsuario } = req.body;
    
        const dbConnection = iniciarConexion();
    
        dbConnection.connect((err) => {
            if (err) {
                console.error('Error al conectar a la base de datos:', err);
                res.status(500).json({ error: 'Error al conectar con la base de datos' });
                return;
            }
    
            const SQL_QUERY = 'CALL procedimiento_Crear_Pregunta_Frecuente(?, ?)';
            dbConnection.query(SQL_QUERY, [idUsuario, pregunta], (err, result) => {
                dbConnection.end(); // Cerrar la conexión después de la consulta
    
                if (err) {
                    console.error('Error al ejecutar el procedimiento:', err);
                    res.status(500).json({ error: 'Error al crear pregunta frecuente' });
                    return;
                }
                res.status(201).json({ message: 'Pregunta frecuente creada exitosamente' });
            });
        });
    });

    // Ruta para obtener preguntas frecuentes
    app.get('/api/obtenerPreguntas', (req, res) => {
        const dbConnection = iniciarConexion();

        dbConnection.connect((err) => {
            if (err) {
                console.error('Error al conectar a la base de datos:', err);
                res.status(500).json({ error: 'Error al conectar con la base de datos' });
                return;
            }

            const SQL_QUERY = `
                SELECT 
                    pregunta, 
                    COALESCE(respuesta, 'aún no hay respuesta para esta pregunta') AS respuesta, 
                    nombreUsuario, 
                    nombreEspecialista 
                FROM 
                    vista_Preguntas_Frecuentes
            `;

            dbConnection.query(SQL_QUERY, (err, results) => {
                dbConnection.end(); // Cerrar la conexión después de la consulta

                if (err) {
                    console.error('Error al obtener datos desde la vista:', err);
                    res.status(500).json({ error: 'Error al obtener preguntas frecuentes' });
                    return;
                }
                res.json(results);
            });
        });
    });

    
        // Ruta para responder preguntas frecuentes
    app.post('/api/responderPregunta', (req, res) => {
        const { idPreguntaFrecuente, idEspecialista, respuesta } = req.body;

        const dbConnection = iniciarConexion();

        dbConnection.connect((err) => {
            if (err) {
                console.error('Error al conectar a la base de datos:', err);
                res.status(500).json({ error: 'Error al conectar con la base de datos' });
                return;
            }

            const SQL_QUERY = 'CALL ResponderPreguntaFrecuente(?, ?, ?)';
            dbConnection.query(SQL_QUERY, [idPreguntaFrecuente, idEspecialista, respuesta], (err, result) => {
                dbConnection.end(); // Cerrar la conexión después de la consulta

                if (err) {
                    console.error('Error al ejecutar el procedimiento:', err);
                    res.status(500).json({ error: 'Error al responder la pregunta frecuente' });
                    return;
                }

                // Si la respuesta se actualizó correctamente
                res.status(200).json({ message: 'Respuesta registrada exitosamente' });
            });
        });
    });


        // Ruta para aumentar el contador de búsquedas de una pregunta frecuente
    app.post('/api/aumentarBusquedas', (req, res) => {
        const { idPreguntaFrecuente } = req.body;

        const dbConnection = iniciarConexion();

        dbConnection.connect((err) => {
            if (err) {
                console.error('Error al conectar a la base de datos:', err);
                res.status(500).json({ error: 'Error al conectar con la base de datos' });
                return;
            }

            const SQL_QUERY = 'CALL AumentarBusquedas(?)';
            dbConnection.query(SQL_QUERY, [idPreguntaFrecuente], (err, result) => {
                dbConnection.end(); // Cerrar la conexión después de la consulta

                if (err) {
                    console.error('Error al ejecutar el procedimiento:', err);
                    res.status(500).json({ error: 'Error al aumentar el contador de búsquedas' });
                    return;
                }

                // Respuesta exitosa
                res.status(200).json({ message: 'Contador de búsquedas incrementado exitosamente' });
            });
        });
    });

    // Ruta para buscar una pregunta frecuente
    app.get('/api/buscarPregunta', (req, res) => {
        const { pregunta } = req.query; // Obtener la pregunta del parámetro de la consulta
        const dbConnection = iniciarConexion();

        dbConnection.connect((err) => {
            if (err) {
                console.error('Error al conectar a la base de datos:', err);
                res.status(500).json({ error: 'Error al conectar con la base de datos' });
                return;
            }

            // Llamar al procedimiento almacenado
            const SQL_QUERY = `CALL procedimiento_Buscar_Pregunta(?)`;

            dbConnection.query(SQL_QUERY, [pregunta], (err, results) => {
                dbConnection.end(); // Cerrar la conexión después de la consulta

                if (err) {
                    console.error('Error al obtener datos desde el procedimiento:', err);
                    res.status(500).json({ error: 'Error al buscar la pregunta frecuente' });
                    return;
                }

                // results[0] contiene el resultado de la consulta del procedimiento
                const preguntas = results[0].map(preg => {
                    // Cambiar el valor de respuesta si está vacío o es nulo
                    return {
                        ...preg,
                        respuesta: preg.respuesta ? preg.respuesta : 'aún no hay respuesta para esta pregunta',
                    };
                });

                res.json(preguntas);
            });
        });
    });




    // Iniciar el servidor
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
