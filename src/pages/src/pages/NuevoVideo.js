import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NuevoVideo.css';

function NuevoVideo({ agregarVideo }) {
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [imagen, setImagen] = useState('');
  const [enlace, setEnlace] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const navigate = useNavigate();

  const limpiarFormulario = () => {
    setTitulo('');
    setCategoria('');
    setImagen('');
    setEnlace('');
    setDescripcion('');
  };

  const guardarVideo = () => {
    if (titulo && categoria && imagen && enlace) {
      const nuevoVideo = {
        id: Date.now(),
        titulo,
        categoria,
        imagen,
        enlace,
        descripcion,
      };
      agregarVideo(nuevoVideo);
      navigate('/');
    } else {
      alert('Por favor, completa todos los campos');
    }
  };

  return (
    <div className="nuevo-video">
      <h2>Registrar Nuevo Video</h2>
      <form>
        <input type="text" placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        <input type="text" placeholder="Categoría" value={categoria} onChange={(e) => setCategoria(e.target.value)} />
        <input type="text" placeholder="Enlace de Imagen" value={imagen} onChange={(e) => setImagen(e.target.value)} />
        <input type="text" placeholder="Enlace del Video" value={enlace} onChange={(e) => setEnlace(e.target.value)} />
        <textarea placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}></textarea>
        <div className="botones">
          <button type="button" onClick={guardarVideo}>Guardar</button>
          <button type="button" onClick={limpiarFormulario}>Limpiar</button>
        </div>
      </form>
    </div>
  );
}

export default NuevoVideo;
