import React, { useState, useEffect } from 'react';
import { Button, Box, Typography } from '@mui/material';
import HeaderApp from '../componentes/header';
import FooterApp from '../componentes/footer';
import { useNavigate } from 'react-router-dom';
import './Diagnostico.css';

const questions = [
  "¿Sientes dolor en alguno de tus dientes al consumir alimentos fríos o calientes?",
  "¿Has notado manchas oscuras o blanquecinas en alguno de tus dientes?",
  "¿Sientes dolor o sensibilidad al masticar ciertos alimentos?",
  "¿Tienes dificultad para limpiar algunos dientes debido a la forma en que están ubicados?",
  "¿Hace más de un año que no visitas al dentista?"
];

const DiagnosisChatbot = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); 
  const [userAnswers, setUserAnswers] = useState([]); 
  const [diagnosis, setDiagnosis] = useState(null); 
  const [showOptions, setShowOptions] = useState(true);
  const navigate = useNavigate();

  const handleAnswer = (answer) => {
    setUserAnswers((prevAnswers) => [...prevAnswers, answer]);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1); 
    } else {
      const generatedDiagnosis = getDiagnosis([...userAnswers, answer]);
      setDiagnosis(generatedDiagnosis);
      setShowOptions(false); 
    }
  };

  const getDiagnosis = (answers) => {
    const yesCount = answers.filter(answer => answer === "Sí").length;
    if (yesCount >= 3) {
      return "Podrías estar experimentando síntomas de caries dental. Te recomendamos visitar a un dentista para una evaluación completa y tratamiento adecuado.";
    } else if (yesCount === 1 || yesCount === 2) {
      return "Podrías tener algunos síntomas de sensibilidad dental. Te sugerimos prestar atención a estos síntomas y considerar una visita al dentista si persisten.";
    } else {
      return "Parece que no tienes síntomas de caries o sensibilidad dental importantes en este momento. Mantén una buena higiene dental y visita al dentista regularmente para prevención.";
    }
  };

  useEffect(() => {
    if (diagnosis) {
      const timer = setTimeout(() => {
        navigate('/Home');
      }, 2000); 

      return () => clearTimeout(timer); // Limpia el temporizador al desmontar
    }
  }, [diagnosis, navigate]);


  return (
    <>
      <HeaderApp/>
      <Box className="fondo">
        <div className='textote'>
      <h1>¡Bienvenid@!</h1>
      </div>
        <Box sx={{ maxWidth: 600, mx: 'auto', p: 2, border: '4px solid #ddd', borderRadius: 2 }}>
          {diagnosis ? (
            <Typography variant="h6" align="center" gutterBottom>
              {diagnosis}
            </Typography>
          ) : (
            <>
              <Typography variant="h6" align="center" gutterBottom>
                {questions[currentQuestionIndex]}
              </Typography>
              {showOptions && (
                <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 2 }}>
                  <Button variant="contained" onClick={() => handleAnswer("Sí")}>Sí</Button>
                  <Button variant="contained" color="secondary" onClick={() => handleAnswer("No")}>No</Button>
                </Box>
              )}
            </>
          )}
        </Box>
      </Box>
      <FooterApp/>
    </>
  );
};

export default DiagnosisChatbot;
