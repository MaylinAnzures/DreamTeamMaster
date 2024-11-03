import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function FormRegistroPaciente() {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    password: '',
  });
  
  const [verificationCode, setVerificationCode] = useState('');
  const [userInputCode, setUserInputCode] = useState('');
  const [isCodeValid, setIsCodeValid] = useState(false);
  const [codeExpirationTime, setCodeExpirationTime] = useState(180);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    emailjs.init("FSzB2scbpugQQbPwH");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const generateVerificationCode = () => Math.floor(100000 + Math.random() * 900000).toString();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const codigoGenerado = generateVerificationCode();
    setVerificationCode(codigoGenerado);
    setIsCodeValid(true);
    setCodeExpirationTime(180);

    const countdown = setInterval(() => {
      setCodeExpirationTime((prev) => {
        if (prev <= 1) {
          clearInterval(countdown);
          setIsCodeValid(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    try {
      const templateParams = {
        user_name: formData.user_name,
        user_email: formData.user_email,
        password: formData.password,
        verification_code: codigoGenerado,
      };

      await emailjs.send("my_gmail_TechnoInc", "template_c52gglm", templateParams);
      console.log("Correo enviado exitosamente");

    } catch (error) {
      console.error("Error al enviar el correo:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVerification = async () => {
    if (!isCodeValid) {
      console.log("El código ha expirado.");
      return;
    }

    if (userInputCode === verificationCode) {
      console.log("¡Código verificado correctamente!");

      try {
        const response = await fetch('http://localhost:3000/api/crearPaciente', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nomUser: formData.user_name,
            correoUser: formData.user_email,
            contrasenaUser: formData.password,
            nivelPermisos: 1, // Ejemplo: establece un nivel de permisos predeterminado
          }),
        });

        if (response.ok) {
          console.log("Paciente creado exitosamente en la base de datos");
          setFormData({ user_name: '', user_email: '', password: '' });
          setUserInputCode('');
        } else {
          console.error("Error al crear el paciente en la base de datos");
        }

      } catch (error) {
        console.error("Error al enviar la solicitud de creación de paciente:", error);
      }
    } else {
      console.log("El código no coincide.");
    }
  };

  return (
    <Card sx={{ minWidth: 200 }}>
      <CardContent>
        <h1>Registro de Paciente</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre de usuario:</label>
            <input type="text" name="user_name" value={formData.user_name} onChange={handleChange} required />
          </div>
          <div>
            <label>Correo electrónico:</label>
            <input type="email" name="user_email" value={formData.user_email} onChange={handleChange} required />
          </div>
          <div>
            <label>Contraseña:</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          <button type="submit" disabled={isSubmitting}>Enviar</button>
        </form>

        <div>
          <label>Código de verificación:</label>
          <input type="text" value={userInputCode} onChange={(e) => setUserInputCode(e.target.value)} required />
          <button onClick={handleVerification}>Verificar código</button>
        </div>
      </CardContent>
    </Card>
  );
}

export default FormRegistroPaciente;
