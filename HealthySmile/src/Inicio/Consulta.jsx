import React, { useEffect, useRef } from "react";
import HeaderApp from "../componentes/header";
import FooterApp from "../componentes/footer";
import { Box, Button} from '@mui/material';
import './Consulta.css';
import chatbot from './../assets/chatbot.jpeg';
import dentistaaa from './../assets/dentistaaa.jpg'
import Cabos from './../assets/Cabos.png'
import historial from './../assets/historial.jpg'
import { Link } from "react-router-dom";



const services = [
    { title: 'CHATBOT', image: chatbot, link: '/Chatbot' },
    { title: 'ESPECIALISTA', image: dentistaaa, link: '/ImplementacionChat' },
    { title: 'REAGENDAR CITA', image: Cabos, link: '/reagendar' },
    { title: 'HISTORIAL DENTAL', image: historial, link: '/historial' }
  ];

function Consulta(){
    
    return (
        <>
            <HeaderApp />
            <Box className="appointment-card">
      <Box className="overlay">
        <h2 className="title">
          Consultorio de servicio completo
          </h2>
         <t4 className="subtitle">
          Citas
          </t4>
          <Link to="/consulta" style={{ textDecoration: 'none', alignSelf:'flex-start' }}>
          <Button
      variant="outlined"
      className="button"
      sx={{
        color: 'white', 
        maxWidth: '200px',
        borderColor: 'white', 
        backgroundColor: 'transparent', 
        '&:hover': {
          backgroundColor: 'white', 
          color: 'black', 
          borderColor: 'white', 
        },
        padding: '10px 20px',
        borderRadius: 'solid',
        fontWeight: 'bold',
        textTransform: 'uppercase',
      }}
    >
      PEDIR CONSULTA
    </Button>
    </Link>
      </Box>
    </Box>
    <div className="service-container">
      <h2 className="divsito">Nuestros servicios</h2>
      <div className="service-cards">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
          >
            <div className="card-front" style={{ backgroundImage: `url(${service.image})` }}>
              <div className="overlay2">
                <Button
                  variant="contained"
                  href={service.link}
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    color: 'black',
                    textTransform: 'uppercase',
                    padding: '10px 20px',
                    borderRadius: 'none',  
                    '&:hover': {
                      backgroundColor: '#629aa0',
                      color: 'white',
                    }
                  }}
                >
                  {service.title}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

            <FooterApp />
        </>
    );
};


export default Consulta;
