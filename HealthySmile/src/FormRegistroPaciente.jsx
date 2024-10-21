import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

function FormRegistroPaciente() {
  // Estado para manejar los datos del formulario
  const [formData, setFormData] = useState({
    user_name: '', // Nombre del usuario
    user_email: '', // Correo del usuario
    password: '', // Mensaje que el usuario desea enviar
  });

  // Estado para manejar el código de verificación generado
  const [verificationCode, setVerificationCode] = useState('');

  // Estado para el código ingresado por el usuario
  const [userInputCode, setUserInputCode] = useState('');

  // Estado para verificar si el código es válido
  const [isCodeValid, setIsCodeValid] = useState(false);

  // Estado para manejar el tiempo de expiración del código (3 minutos en segundos)
  // eslint-disable-next-line no-unused-vars
  const [codeExpirationTime, setCodeExpirationTime] = useState(180);

  // Estado para manejar si el formulario está siendo enviado
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Inicializa emailjs con tu usuario
  useEffect(() => {
    emailjs.init("FSzB2scbpugQQbPwH");
  }, []);

  // Maneja los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Actualiza el estado con los nuevos valores
    });
  };

  // Función para generar un código de verificación aleatorio de 6 dígitos
  const generateVerificationCode = () => {
    const codigo = Math.floor(100000 + Math.random() * 900000);
    return codigo.toString();
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
    setIsSubmitting(true); // Marcar como enviando

    const codigoGenerado = generateVerificationCode(); // Generar el código de verificación
    setVerificationCode(codigoGenerado); // Guardar el código generado en el estado
    setIsCodeValid(true); // Marcar el código como válido
    setCodeExpirationTime(180); // Reiniciar el tiempo a 3 minutos

    // Iniciar el temporizador para manejar la expiración del código
    const countdown = setInterval(() => {
      setCodeExpirationTime(prev => {
        if (prev <= 1) {
          clearInterval(countdown); // Limpiar el intervalo si el tiempo llega a 0
          setIsCodeValid(false); // Invalidar el código después de 3 minutos
          return 0;
        }
        return prev - 1; // Decrementar el tiempo restante
      });
    }, 1000);

    try {
      // Preparar los parámetros del correo que se enviará
      const templateParams = {
        user_name: formData.user_name,
        user_email: formData.user_email,
        password: formData.password,
        verification_code: codigoGenerado, // Incluir el código de verificación
      };

      // Enviar el correo con emailjs
      await emailjs.send("my_gmail_TechnoInc", "template_c52gglm", templateParams);
      console.log("Correo enviado exitosamente");

      // Solo resetear el formulario si todo sale bien
      // No resetear aquí para evitar creación de registros vacíos
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    } finally {
      setIsSubmitting(false); // Marcar como no enviando al final
    }
  };

  // Maneja la verificación del código ingresado por el usuario
  const handleVerification = async () => {
    if (!isCodeValid) {
      console.log("El código ha expirado."); // Mensaje si el código ha expirado
      return;
    }

    if (userInputCode === verificationCode) {
      console.log("¡Código verificado correctamente!");

      // Enviar los datos del formulario al backend para crear el usuario
      try {
        const response = await fetch('http://localhost:3000/api/usuarios', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nombre: formData.user_name,
            correo: formData.user_email,
          }),
        });

        if (response.ok) {
          console.log("Usuario creado exitosamente en la base de datos");

          // Resetear el formulario después de enviarlo solo si la creación fue exitosa
          setFormData({
            user_name: '',
            user_email: '',
            password: '',
          });
          setUserInputCode(''); // Limpiar el código de verificación ingresado
        } else {
          console.error("Error al crear el usuario en la base de datos");
        }

      } catch (error) {
        console.error("Error al enviar la solicitud de creación de usuario:", error);
      }

    } else {
      console.log("El código no coincide."); // Mensaje si el código no coincide
    }
  };

  return (
    <div>
      <h1>Registro de usuario</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nombre de usuario:
            <input type="text" name="user_name" value={formData.user_name} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Correo electronico:
            <input type="email" name="user_email" value={formData.user_email} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Contraseña:
            <input type='password' name="password" value={formData.password} onChange={handleChange} required/>
          </label>
        </div>
        <button type="submit" disabled={isSubmitting}>Enviar</button>
      </form>

      {/* Campo para ingresar el código de verificación */}
      <div>
        <label>
          Código de verificación:
          <input
            type="text"
            value={userInputCode}
            onChange={(e) => setUserInputCode(e.target.value)}
            required
          />
        </label>
        <button onClick={handleVerification}>Verificar código</button>
      </div>
    </div>

  );
}

export default FormRegistroPaciente;
