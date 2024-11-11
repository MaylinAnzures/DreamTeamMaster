import React, { useEffect, useState } from 'react';
import espe1 from './espe1.png'; // Reemplaza con la ruta de tu imagen de especialista
import './Especialistas.css'; // Asegúrate de tener un archivo CSS para darle estilo

export default function Especialistas() {
    const [especialistas, setEspecialistas] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch para obtener los datos de los especialistas
        fetch('http://localhost:3000/api/obtenerEspecialistas')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al obtener los datos de los especialistas');
                }
                return response.json();
            })
            .then(data => setEspecialistas(data))
            .catch(error => setError(error.message));
    }, []);

    return (
        <div>
            <div className="especialistas-container">
                {error && <p className="error-message">{error}</p>}
                {especialistas.map((especialista, index) => (
                    <div key={index} className="especialista-card">
                        <img src={espe1} alt="Especialista" className="especialistas-img" />
                        <h1>{especialista.nombre}</h1>
                        <h3>Cédula: {especialista.cedulaProfesional}</h3>
                        <p>Especializado en el tratamiento quirúrgico de tumores malignos, con amplia experiencia en procedimientos mínimamente invasivos.</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
