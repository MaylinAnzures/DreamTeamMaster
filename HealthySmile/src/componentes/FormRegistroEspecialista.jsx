import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useUserContext } from './UserContext'; // Asegúrate de que la ruta sea correcta
import { useNavigate } from 'react-router-dom';
import './FormRegistroPaciente.css';

function FormRegistroEspecialista() {
  const { setCodigoDeVerificacion, setUsuarioLogueado, setContrasena, 
    setCorreo, setCedulaProfesional, setTipoUsuario,setNivelPermisos } = useUserContext();
  
  const [userData, setUserData] = useState({
    user_name: '',
    user_email: '',
    password: '',
    cedulaProfesional: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    emailjs.init("FSzB2scbpugQQbPwH"); // Inicializa emailJS con tu clave de usuario
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const generateVerificationCode = () => Math.floor(100000 + Math.random() * 900000).toString();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const codigoGenerado = generateVerificationCode();
    
    // Establecer el código de verificación y los datos en el contexto
    setCodigoDeVerificacion(codigoGenerado);
    setUsuarioLogueado(userData.user_name);
    setContrasena(userData.password); 
    setCorreo(userData.user_email);
    setCedulaProfesional(userData.cedulaProfesional);
    setTipoUsuario("Especialista");
    setNivelPermisos(2);

    const templateParams = {
      user_name: userData.user_name,
      user_email: userData.user_email,
      password: userData.password,
      verification_code: codigoGenerado,
    };

    try {
      await emailjs.send("my_gmail_TechnoInc", "template_c52gglm", templateParams);
      console.log("Correo enviado exitosamente");
      navigate('/Verificacion'); // Redirige a la página de verificación

    } catch (error) {
      console.error("Error al enviar el correo:", error);
      alert("No se pudo enviar el correo. Intenta nuevamente."); // Mensaje de error
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className='card allY' id="cardEspecialista">
      <CardContent className='cardContent'>
        <h1>Registro de Especialista</h1>
        <form onSubmit={handleSubmit} className='form'>
          <div className='inputGroup'>
            <div className='inputGroup-2'>
              <label>Nombre</label>
              <input 
                placeholder='Ingresa tu nombre completo' 
                className='inputField' 
                type="text" 
                name="user_name" 
                value={userData.user_name} 
                onChange={handleChange} 
                required 
              />
            </div>     
            <div className='inputGroup-2'>
              <label>Correo electrónico</label>
              <input 
                placeholder='Ingresa un email válido' 
                className='inputField' 
                type="email" 
                name="user_email" 
                value={userData.user_email} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className='inputGroup-2'>
              <label>Contraseña</label>
              <input 
                placeholder='Ingresa una contraseña' 
                className='inputField' 
                type="password" 
                name="password" 
                value={userData.password} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className='inputGroup-2'>
              <label>Cédula Profesional</label>
              <input 
                placeholder='Ingresa tu cédula profesional' 
                className='inputField' 
                type="text" 
                name="cedulaProfesional" 
                value={userData.cedulaProfesional} 
                onChange={handleChange} 
                required 
              />
            </div>
          </div>
          <button type="submit" disabled={isSubmitting} className='submitButton'>Registrarse</button>
        </form>
      </CardContent>
    </Card>

  );
}

export default FormRegistroEspecialista;
