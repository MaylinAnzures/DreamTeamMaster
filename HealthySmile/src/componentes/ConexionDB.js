// Utilizar node src/ConexionDB.js 
import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import emailjs from '@emailjs/nodejs';

const app = express();
const PORT = 3000;
const SERVICE_ID_EMAILJS = "my_gmail_TechnoInc";
const TEMPLANTE_ID_EMAILJS = "template_c52gglm";
const PUBLIC_KEY_EMAILJS = "FSzB2scbpugQQbPwH";
const PRIVATE_KEY_EMAILJS = "9VchJYI9FxZyEEr6k5DI7"; 

// Middleware para parsear JSON y permitir CORS
app.use(express.json());
app.use(cors());

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

const pool = mysql.createPool({
    connectionLimit: 5, 
    host: 'bjf9zqyloqdblun4rwfj-mysql.services.clever-cloud.com',
    user: 'u1ma7b61o7vlgxwr',
    password: 'TowNJ6Zzb2PJd8f5AYU9',
    database: 'bjf9zqyloqdblun4rwfj'
});


function ejecutarConsulta(SQL_QUERY, parametros, res, opciones = {}) {
    console.log("🟢 Ejecutando consulta con los siguientes parámetros:");
    console.log("🔹 SQL_QUERY:", SQL_QUERY);
    console.log("🔹 parametros:", parametros);
    console.log("🔹 opciones:", opciones);

    pool.getConnection((err, connection) => {
        if (err) {
            console.error('❌ Error al obtener conexión del pool:', err);
            res.status(500).json({ error: 'Error en la conexión con la base de datos' });
            return;
        }

        connection.query(SQL_QUERY, parametros, (err, results) => {
            connection.release(); // Liberar la conexión

            if (err) {
                console.error('❌ Error al ejecutar el procedimiento:', err);
                res.status(500).json({ error: 'Error al ejecutar la consulta' });
                return;
            }

            console.log("🟢 Resultado de la consulta:", results);

            // Verificar si el resultado es de tipo RowDataPacket
            const esRowDataPacket = Array.isArray(results) && results.length > 0 && typeof results[0] === 'object' && results[0] !== null;

            // Si es RowDataPacket y se espera devolver datos, se formatean
            if (esRowDataPacket) {
                if (opciones.devuelveDatos) {
                    if (results.length === 0) {
                        console.warn("⚠️ No se encontraron resultados para la consulta.");
                        res.status(404).json({ message: opciones.mensajeError || 'No se encontraron resultados' });
                    } else {
                        // Solo formatear si se proporciona una función de formateo
                        const datosFinales = opciones.formatearResultados
                            ? opciones.formatearResultados(results)
                            : results;
                        console.log("✅ Datos devueltos:", datosFinales);
                        res.status(200).json(datosFinales);
                    }
                }
            } else {
                // Si no es RowDataPacket, se maneja como una consulta normal
                console.log("✅ Operación completada con éxito:", opciones.mensajeExito);
                res.status(201).json({ message: opciones.mensajeExito, data: results });
            }
        });
    });
}



//Ya funciona
app.post('/api/enviarCorreoVerificacion', async (req, res) => {
    const { user_name, user_email, password, verification_code } = req.body;

    const templateParams = {
        user_name,
        user_email,
        password,
        verification_code,
    };

    try {
        await emailjs.send(
            SERVICE_ID_EMAILJS,  
            TEMPLANTE_ID_EMAILJS,     
            templateParams,
            {
                publicKey: PUBLIC_KEY_EMAILJS,
                privateKey: PRIVATE_KEY_EMAILJS,}     
        );
        console.log("Correo enviado exitosamente");
        res.status(200).json({ message: "Correo enviado exitosamente" });
    } catch (error) {
        console.error("Error al enviar el correo:", error);
        res.status(500).json({ error: "No se pudo enviar el correo" });
    }
});


//Crear Paciente
app.post('/api/crearPaciente', (req, res) => {
    const { nomUser, correoUser, contrasenaUser } = req.body;

    const SQL_QUERY = 'CALL procedimiento_Crear_Paciente(?, ?, ?)';
    const parametros = [nomUser, correoUser, contrasenaUser];

    ejecutarConsulta(SQL_QUERY, parametros, res, {
        devuelveDatos: true,
        mensajeError: "Error al crear usuario",
        mensajeExito: "Usuario creado exitosamente",
        formatearResultados: (results) => {
            const idUsuario = results[0][0].idUsuario;
            return { message: "Usuario creado exitosamente", idUsuario };
        }
    });
});



//Modificar desde aqui
//Crear Especialista
app.post('/api/crearEspecialista', (req, res) => {
    const { nomUser, correoUser, contrasenaUser, cedulaProfesional, descripcion, especialidad } = req.body;

    // Definir la consulta SQL y los parámetros
    const SQL_QUERY = 'CALL procedimiento_Crear_Especialista(?, ?, ?, ?, ?, ?)';
    const parametros = [nomUser, correoUser, contrasenaUser, cedulaProfesional, descripcion, especialidad];

    // Usar la función ejecutarConsulta para crear el especialista
    ejecutarConsulta(SQL_QUERY, parametros, res, {
        devuelveDatos: true,
        mensajeError: "Error al crear especialista",
        mensajeExito: "Especialista creado exitosamente",
        formatearResultados: (results) => {
            if (results && results[0] && results[0].length > 0) {
                const { idUsuario, idEspecialista } = results[0][0]; 
                return { message: "Especialista creado exitosamente", idUsuario, idEspecialista };
            }
            return { error: "No se pudo obtener el ID del especialista" };
        }
    });
});


//Log In usuarios
app.post('/api/LogInUsuario', (req, res) => {
    const { correoUser, contrasenaUser } = req.body;

    const SQL_QUERY = 'CALL procedimiento_LogIn_Usuario(?, ?)';
    const parametros = [correoUser, contrasenaUser];

    // Usar la función ejecutarConsulta para procesar el inicio de sesión
    ejecutarConsulta(SQL_QUERY, parametros, res, {
        devuelveDatos: true,
        mensajeError: "Usuario no encontrado o credenciales incorrectas",
        mensajeExito: "Inicio de sesión exitoso",
        formatearResultados: (results) => {
            if (results && results[0] && results[0].length > 0) {
                return results[0][0]; // Devuelve el primer registro completo
            }
            return { message: 'Usuario no encontrado o credenciales incorrectas' };
        }
    });
});


//Crear pregunta frecuente (ya funciono)
app.post('/api/crearPregunta', (req, res) => {
    const { pregunta, idUsuario } = req.body;

    const SQL_QUERY = 'CALL procedimiento_Crear_Pregunta_Frecuente(?, ?)';
    const parametros = [idUsuario, pregunta];

    // Usar la función ejecutarConsulta para crear la pregunta
    ejecutarConsulta(SQL_QUERY, parametros, res, {
        devuelveDatos: false, // No esperamos datos en el resultado
        mensajeError: 'Error al crear pregunta frecuente',
        mensajeExito: 'Pregunta frecuente creada exitosamente'
    });
});


// Ruta para obtener preguntas frecuentes (ya funciono)
app.get('/api/obtenerPreguntas', (req, res) => {
    const SQL_QUERY = `
        SELECT 
            idPreguntaFrecuente,
            pregunta, 
            COALESCE(respuesta, 'aún no hay respuesta para esta pregunta') AS respuesta, 
            idUsuario, 
            idEspecialista 
        FROM 
            vista_Preguntas_Frecuentes
    `;

    // Usar la función ejecutarConsulta para obtener las preguntas frecuentes
    ejecutarConsulta(SQL_QUERY, [], res, {
        devuelveDatos: true, // Esperamos devolver los datos de las preguntas
        mensajeError: 'Error al obtener preguntas frecuentes'
    });
});



// Ruta para obtener nombre y cédula profesional de los especialistas (Ya funciono) y este es del inicio de web Xd
app.get('/api/obtenerEspecialistas', (req, res) => {
    const SQL_QUERY = `
        SELECT 
            nomUser AS nombre,
            cedulaProfesional
        FROM 
            ComEspecialistas
    `;

    // Usar la función ejecutarConsulta para obtener los especialistas
    ejecutarConsulta(SQL_QUERY, [], res, {
        devuelveDatos: true, // Esperamos devolver los datos de los especialistas
        mensajeError: 'Error al obtener datos de especialistas'
    });
});




// Ruta para obtener los especialistas para el chat en la versión Android (ya funciono)
app.get('/api/obtenerEspecialistasChatAndroid', (req, res) => {
    console.log("🟢 Solicitud recibida en /api/obtenerEspecialistasChatAndroid");

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

    // Usar la función ejecutarConsulta para obtener los especialistas
    ejecutarConsulta(SQL_QUERY, [], res, {
        devuelveDatos: true,
        mensajeError: "No se encontraron especialistas",
        // El formateo solo se aplica si se especifica en las opciones
        formatearResultados: undefined // Si no se pasa ninguna función de formateo, no se hace nada
    });
});




// Ruta optimizada para obtener la información de múltiples pacientes (Ya funciono)
app.get('/api/obtenerPacientesChatAndroid', (req, res) => {
    console.log("🟢 Solicitud recibida en /api/obtenerPacientesChatAndroid");

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

    // Usar la función ejecutarConsulta para obtener los pacientes
    ejecutarConsulta(SQL_QUERY, idsArray, res, {
        devuelveDatos: true,
        mensajeError: "No se encontraron pacientes",
        formatearResultados: undefined 
    });
});




// Ruta para responder preguntas frecuentes (ya funciono)
app.post('/api/responderPregunta', (req, res) => {
    const { idPreguntaFrecuente, idEspecialista, respuesta } = req.body;
    console.log("Datos recibidos:", idPreguntaFrecuente, idEspecialista, respuesta);

    const SQL_QUERY = 'CALL ResponderPreguntaFrecuente(?, ?, ?)';
    const parametros = [idPreguntaFrecuente, idEspecialista, respuesta];

    const opciones = {
        mensajeExito: 'Respuesta registrada exitosamente'
    };

    ejecutarConsulta(SQL_QUERY, parametros, res, opciones);
});




// Ruta para aumentar el contador de búsquedas de una pregunta frecuente (Aun no se implementa XD)
app.post('/api/aumentarBusquedas', (req, res) => {
    const { idPreguntaFrecuente } = req.body;

    const SQL_QUERY = 'CALL AumentarBusquedas(?)';
    const parametros = [idPreguntaFrecuente];

    const opciones = {
        mensajeExito: 'Contador de búsquedas incrementado exitosamente'
    };

    ejecutarConsulta(SQL_QUERY, parametros, res, opciones);
});



// Ruta para buscar una pregunta frecuente (Busca bien, no devuelve bien los datos)
app.get('/api/buscarPregunta', (req, res) => {
    const { pregunta } = req.query; // Obtener la pregunta del parámetro de la consulta

    const SQL_QUERY = 'CALL procedimiento_Buscar_Pregunta(?)';

    // Ejecutar la consulta utilizando la función ejecutarConsulta
    ejecutarConsulta(SQL_QUERY, [pregunta], res, {
        devuelveDatos: true,
        mensajeError: 'No se encontraron resultados para la pregunta buscada',
        formatearResultados: (results) => {
            // Filtramos solo los resultados que contienen los datos de la pregunta (excluyendo OkPacket)
            const preguntas = results[0] || []; // Asegurarnos de trabajar con el arreglo correcto

            // Si se necesitan formatear los resultados, lo hacemos aquí
            return preguntas.map(preg => {
                return {
                    ...preg,
                    respuesta: preg.respuesta ? preg.respuesta : 'aún no hay respuesta para esta pregunta',
                };
            });
        }
    });
});

// Crear Cita (funciono pero en android no se pq me genera un error xd)
app.post('/api/crearCita', (req, res) => {
    const { fecha, hora, motivo, idUsuario, idEspecialista } = req.body;

    const SQL_QUERY = 'CALL procedimiento_crearCita(?, ?, ?, ?, ?)';

    ejecutarConsulta(SQL_QUERY, [fecha, hora, motivo, idUsuario, idEspecialista], res, {
        devuelveDatos: true,  // Ahora el procedimiento devuelve datos
        mensajeError: 'Error al crear la cita',
        mensajeExito: 'Cita creada exitosamente',
        formatearResultados: undefined,
        procesarResultado: (results) => {
            if (results[0] && results[0].length > 0) {
                const idCita = results[0][0].idCita;
                res.status(201).json({ message: 'Cita creada exitosamente', idCita });
            } else {
                res.status(500).json({ error: 'No se pudo obtener el ID de la cita' });
            }
        }
    });
});

app.get('/api/obtenerCitasPaciente', (req, res) => {
    console.log("Solicitud recibida con:", req.query);
    const { idUsuario } = req.query;

    const SQL_QUERY = 'CALL procedimiento_obtenerCitasPaciente(?)';

    ejecutarConsulta(SQL_QUERY, [idUsuario], res, {
        devuelveDatos: true,
        mensajeError: 'Error al obtener las citas',
        formatearResultados: (results) => {
            const resultado = results[0]; // MySQL devuelve un array con los resultados

            if (resultado.length === 0 || (resultado[0].mensaje && resultado[0].mensaje === 'No existe esa cita')) {
                return { message: 'No existen citas para este paciente' };
            } else {
                // Si se encuentran citas, formatear los datos
                return resultado.map(cita => ({
                    idCita: cita.idCita,
                    motivoCita: cita.motivoCita,
                    fechaCita: cita.fechaCita,
                    idEspecialista: cita.idEspecialista
                }));
            }
        }
    });
});

app.get('/api/obtenerCitasEspecialista', (req, res) => {
    console.log("Solicitud recibida con:", req.query);
    const { idEspecialista } = req.query;

    const SQL_QUERY = 'CALL procedimiento_obtenerCitasEspecialista(?)';

    ejecutarConsulta(SQL_QUERY, [idEspecialista], res, {
        devuelveDatos: true,
        mensajeError: 'Error al obtener las citas del especialista',
        formatearResultados: (results) => {
            const resultado = results[0]; // MySQL devuelve un array con los resultados

            if (resultado.length === 0 || (resultado[0].mensaje && resultado[0].mensaje === 'No existe esa cita')) {
                return { message: 'No existen citas para este especialista' };
            } else {
                // Si se encuentran citas, formatear los datos
                return resultado.map(cita => ({
                    idCita: cita.idCita,
                    motivoCita: cita.motivoCita,
                    fechaCita: cita.fechaCita,
                    idUsuario: cita.idUsuario
                }));
            }
        }
    });
});


//Si funciono
app.post('/api/obtenerCitaPorFecha', (req, res) => {
    console.log("Solicitud recibida con:", req.body);
    const { idUsuario, fecha, hora } = req.body;

    const SQL_QUERY = 'CALL procedimiento_obtenerCitaPorFecha(?, ?, ?)';

    // Ejecutar la consulta utilizando la función ejecutarConsulta
    ejecutarConsulta(SQL_QUERY, [idUsuario, fecha, hora], res, {
        devuelveDatos: true,
        mensajeError: 'Error al obtener la cita',
        formatearResultados: (results) => {
            // Si no se encuentra la cita, devolver un mensaje de error
            const resultado = results[0];
            if (resultado.length === 0 || (resultado[0].mensaje && resultado[0].mensaje === 'No existe esa cita')) {
                return { message: 'No existe esa cita' };
            } else {
                // Si se encuentra la cita, formatear los datos
                const cita = resultado[0]; // Obtener el primer resultado
                return {
                    idCita: cita.idCita,
                    motivoCita: cita.motivoCita,
                    idEspecialista: cita.idEspecialista
                };
            }
        }
    });
});


// Si funciono checar pq en movil me sale error en el toast pero si se hace bn
app.post('/api/modificarCita', (req, res) => {
    console.log("Solicitud recibida con:", req.body);
    const { idCita, nuevaHora, nuevoMotivo, nuevoEspecialista } = req.body;

    const SQL_QUERY = 'CALL procedimiento_modificarCita(?, ?, ?, ?)';

    // Ejecutar la consulta utilizando la función ejecutarConsulta
    ejecutarConsulta(SQL_QUERY, [idCita, nuevaHora, nuevoMotivo, nuevoEspecialista], res, {
        devuelveDatos: true,
        mensajeError: 'Error al modificar la cita',
        formatearResultados: (results) => {
            const resultado = results[0]; // MySQL devuelve un array con los resultados

            if (resultado.length === 0 || (resultado[0].mensaje && resultado[0].mensaje === 'No existe esa cita')) {
                // Si no se encuentra la cita, devolver un mensaje de error
                return { message: 'No existe esa cita' };
            } else {
                // Si la cita se modificó correctamente, devolver el mensaje de éxito
                return { message: resultado[0].mensaje };
            }
        }
    });
});


//Si funciono pero igual me sale un toast con error xd
app.post('/api/eliminarCita', (req, res) => {
    console.log("Solicitud recibida con:", req.body);
    const { idCita } = req.body;

    const SQL_QUERY = 'CALL procedimiento_eliminarCita(?)';

    // Ejecutar la consulta utilizando la función ejecutarConsulta
    ejecutarConsulta(SQL_QUERY, [idCita], res, {
        devuelveDatos: true,
        mensajeError: 'Error al eliminar la cita',
        formatearResultados: (results) => {
            const resultado = results[0]; // MySQL devuelve un array con los resultados

            if (resultado.length === 0 || (resultado[0].mensaje && resultado[0].mensaje === 'No existe esa cita')) {
                // Si no se encuentra la cita, devolver un mensaje de error
                return { message: 'No existe esa cita' };
            } else {
                // Si la cita se eliminó correctamente, devolver el mensaje de éxito
                const mensaje = resultado[0].mensaje;
                return { message: mensaje };
            }
        }
    });
});


//Aun no se implementa
app.post('/api/verificarCorreo', (req, res) => {
    const { correoUser } = req.query;

    const SQL_QUERY = 'SELECT * FROM vista_correos WHERE correoUser = ?';

    // Ejecutar la consulta utilizando la función ejecutarConsulta
    ejecutarConsulta(SQL_QUERY, [correoUser], res, {
        devuelveDatos: true,
        mensajeError: 'Error al verificar el correo',
        formatearResultados: (results) => {
            if (results.length > 0) {
                return { mensaje: 'Existe' };
            } else {
                return { mensaje: 'No existe' };
            }
        }
    });
});

