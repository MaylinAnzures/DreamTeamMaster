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

//Modificar desde aqui
//Crear Especialista
app.post('/api/crearEspecialista', (req, res) => {
    const { nomUser, correoUser, contrasenaUser, tipoUser, nivelPermisos, cedulaProfesional, descripcion, especialidad } = req.body;

    const dbConnection = iniciarConexion();

    dbConnection.connect((err) => {
        if (err) {
            console.error('Error al conectar a la base de datos:', err);
            res.status(500).json({ error: 'Error al conectar con la base de datos' });
            return;
        }

        const SQL_QUERY = 'CALL procedimiento_Crear_Especialista(?, ?, ?, ?, ?, ?, ?, ?)';
        dbConnection.query(SQL_QUERY, [nomUser, correoUser, contrasenaUser, tipoUser, nivelPermisos, cedulaProfesional, descripcion, especialidad], (err, result) => {
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

            console.log("Resultados de la base de datos:", results);

            if (!results[0] || results[0].length === 0) {
                res.status(404).json({ message: 'Usuario no encontrado o credenciales incorrectas' });
            } else {
                console.log("Datos enviados al frontend:", results[0][0]);
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

// Ruta para obtener nombre y cédula profesional de los especialistas
app.get('/api/obtenerEspecialistas', (req, res) => {
    const dbConnection = iniciarConexion();

    dbConnection.connect((err) => {
        if (err) {
            console.error('Error al conectar a la base de datos:', err);
            res.status(500).json({ error: 'Error al conectar con la base de datos' });
            return;
        }

        const SQL_QUERY = `
                SELECT 
                    nomUser AS nombre,
                    cedulaProfesional
                FROM 
                    ComEspecialistas
            `;

        dbConnection.query(SQL_QUERY, (err, results) => {
            dbConnection.end(); // Cerrar la conexión después de la consulta

            if (err) {
                console.error('Error al obtener datos desde la vista:', err);
                res.status(500).json({ error: 'Error al obtener datos de especialistas' });
                return;
            }
            res.json(results); // Devolver los resultados en formato JSON
        });
    });
});


// Ruta para obtener los especialistas para el chat en la versión Android
app.get('/api/obtenerEspecialistasChatAndroid', (req, res) => {
    const dbConnection = iniciarConexion();

    dbConnection.connect((err) => {
        if (err) {
            console.error('Error al conectar a la base de datos:', err);
            res.status(500).json({ error: 'Error al conectar con la base de datos' });
            return;
        }

        // Consulta SQL para obtener los especialistas con su especialidad y descripción
        const SQL_QUERY = `
            SELECT 
                e.idEspecialista,
                u.nomUser AS nombre,
                e.especialidad,
                e.descripcion,
                e.cedulaProfesional
            FROM 
                Usuario u
            JOIN 
                Especialista e ON u.idUsuario = e.idUsuario
            WHERE 
                u.tipoUser = 'Especialista'
        `;

        dbConnection.query(SQL_QUERY, (err, results) => {
            dbConnection.end(); // Cerrar la conexión después de la consulta

            if (err) {
                console.error('Error al obtener datos desde la base de datos:', err);
                res.status(500).json({ error: 'Error al obtener datos de especialistas' });
                return;
            }

            // Si no se encuentran resultados, devolver una lista vacía
            if (results.length === 0) {
                return res.status(404).json({ message: 'No se encontraron especialistas' });
            }

            // Devolver los resultados en formato JSON
            console.log("Especialistas encontrados:", results);
            res.json(results);
        });
    });
});


// Ruta optimizada para obtener la información de múltiples pacientes
app.get('/api/obtenerPacientesChatAndroid', (req, res) => {
    const dbConnection = iniciarConexion();

    dbConnection.connect((err) => {
        if (err) {
            console.error('Error al conectar a la base de datos:', err);
            res.status(500).json({ error: 'Error al conectar con la base de datos' });
            return;
        }

        // Obtener los IDs de los pacientes desde el query string (deben enviarse como una lista separada por comas)
        let idsUsuarios = req.query.idsUsuarios;
        if (!idsUsuarios) {
            return res.status(400).json({ error: 'IDs de pacientes no proporcionados' });
        }

        // Convertir el string de IDs a un array
        const idsArray = idsUsuarios.split(',').map(id => parseInt(id.trim()));

        // Construir la consulta con un `IN` para buscar todos los pacientes a la vez
        const SQL_QUERY = `
            SELECT 
                u.idUsuario,
                u.nomUser AS nombre,
                u.correoUser AS correo
            FROM 
                Usuario u
            WHERE 
                u.idUsuario IN (${idsArray.map(() => '?').join(',')})
                AND u.tipoUser = 'Paciente'
        `;

        dbConnection.query(SQL_QUERY, idsArray, (err, results) => {
            dbConnection.end(); // Cerrar la conexión después de la consulta

            if (err) {
                console.error('Error al obtener datos desde la base de datos:', err);
                res.status(500).json({ error: 'Error al obtener datos de los pacientes' });
                return;
            }

            res.json(results); // Enviamos un array con todos los pacientes encontrados
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

// Crear Cita
app.post('/api/crearCita', (req, res) => {
    const { fecha, hora, motivo, idUsuario, idEspecialista } = req.body;

    const dbConnection = iniciarConexion();

    dbConnection.connect((err) => {
        if (err) {
            console.error('Error al conectar a la base de datos:', err);
            res.status(500).json({ error: 'Error al conectar con la base de datos' });
            return;
        }

        const SQL_QUERY = 'CALL procedimiento_crearCita(?, ?, ?, ?, ?)';
        dbConnection.query(SQL_QUERY, [fecha, hora, motivo, idUsuario, idEspecialista], (err, result) => {
            dbConnection.end(); // Cerrar la conexión después de la consulta

            if (err) {
                console.error('Error al ejecutar el procedimiento:', err);
                res.status(500).json({ error: 'Error al crear la cita' });
                return;
            }
            res.status(201).json({ message: 'Cita creada exitosamente' });
        });
    });
});

app.post('/api/obtenerCitaPorFecha', (req, res) => {
    console.log("Solicitud recibida con:", req.body);
    const { idUsuario, fecha, hora } = req.body;

    const dbConnection = iniciarConexion();

    dbConnection.connect((err) => {
        if (err) {
            console.error('Error al conectar a la base de datos:', err);
            res.status(500).json({ error: 'Error al conectar con la base de datos' });
            return;
        }

        const SQL_QUERY = 'CALL procedimiento_obtenerCitaPorFecha(?, ?, ?)';
        dbConnection.query(SQL_QUERY, [idUsuario, fecha, hora], (err, results) => {
            dbConnection.end(); // Cerrar la conexión después de la consulta

            if (err) {
                console.error('Error al ejecutar el procedimiento:', err);
                res.status(500).json({ error: 'Error al obtener la cita' });
                return;
            }

            const resultado = results[0]; // MySQL devuelve un array con los resultados

            if (resultado.length === 0 || (resultado[0].mensaje && resultado[0].mensaje === 'No existe esa cita')) {
                // Si no se encuentra la cita, devuelve un mensaje en un objeto JSON
                res.status(404).json({ message: 'No existe esa cita' });
            } else {
                // Si se encuentra la cita, devolver los datos como un objeto JSON
                const cita = resultado[0]; // Obtener el primer resultado, ya que se espera solo una cita
                const response = {
                    idCita: cita.idCita,
                    motivoCita: cita.motivoCita,
                    idEspecialista: cita.idEspecialista
                };
                res.status(200).json(response); // Devolver como un JSON con un solo objeto
            }
        });
    });
});

app.post('/api/modificarCita', (req, res) => {
    console.log("Solicitud recibida con:", req.body);
    const { idUsuario, fecha, hora, nuevaHora, nuevoMotivo, nuevoEspecialista } = req.body;

    const dbConnection = iniciarConexion();

    dbConnection.connect((err) => {
        if (err) {
            console.error('Error al conectar a la base de datos:', err);
            res.status(500).json({ error: 'Error al conectar con la base de datos' });
            return;
        }

        const SQL_QUERY = 'CALL procedimiento_modificarCita(?, ?, ?, ?, ?, ?)';
        dbConnection.query(SQL_QUERY, [idUsuario, fecha, hora, nuevaHora, nuevoMotivo, nuevoEspecialista], (err, results) => {
            dbConnection.end(); // Cerrar la conexión después de la consulta

            if (err) {
                console.error('Error al ejecutar el procedimiento:', err);
                res.status(500).json({ error: 'Error al modificar la cita' });
                return;
            }

            const resultado = results[0]; // MySQL devuelve un array con los resultados

            if (resultado.length === 0 || (resultado[0].mensaje && resultado[0].mensaje === 'No existe esa cita')) {
                // Si no se encuentra la cita, devolver un mensaje
                res.status(404).json({ message: 'No existe esa cita' });
            } else {
                // Si la cita se modificó correctamente, devolver un mensaje de éxito
                const mensaje = resultado[0].mensaje;
                res.status(200).json({ message: mensaje });
            }
        });
    });
});

app.post('/api/eliminarCita', (req, res) => {
    console.log("Solicitud recibida con:", req.body);
    const { idUsuario, fecha, hora } = req.body;

    const dbConnection = iniciarConexion();

    dbConnection.connect((err) => {
        if (err) {
            console.error('Error al conectar a la base de datos:', err);
            res.status(500).json({ error: 'Error al conectar con la base de datos' });
            return;
        }

        // Llamar al procedimiento para eliminar la cita
        const SQL_QUERY = 'CALL procedimiento_eliminarCita(?, ?, ?)';
        dbConnection.query(SQL_QUERY, [idUsuario, fecha, hora], (err, results) => {
            dbConnection.end(); // Cerrar la conexión después de la consulta

            if (err) {
                console.error('Error al ejecutar el procedimiento:', err);
                res.status(500).json({ error: 'Error al eliminar la cita' });
                return;
            }

            const resultado = results[0]; // MySQL devuelve un array con los resultados

            // Verificar si la cita fue eliminada correctamente o no
            if (resultado.length === 0 || (resultado[0].mensaje && resultado[0].mensaje === 'No existe esa cita')) {
                // Si no se encuentra la cita, devolver un mensaje
                res.status(404).json({ message: 'No existe esa cita' });
            } else {
                // Si la cita se eliminó correctamente, devolver un mensaje de éxito
                const mensaje = resultado[0].mensaje;
                res.status(200).json({ message: mensaje });
            }
        });
    });
});









// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});