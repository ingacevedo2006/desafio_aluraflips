import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import NuevoVideo from './pages/NuevoVideo';
import './App.css'; // Archivo CSS principal

function App() {
  const [videos, setVideos] = useState([]); // Estado para manejar los videos registrados

  // Función para agregar un nuevo video
  const agregarVideo = (video) => {
    setVideos([...videos, video]);
  };

  // Función para eliminar un video
  const eliminarVideo = (id) => {
    setVideos(videos.filter((video) => video.id !== id));
  };

  // Función para actualizar un video
  const actualizarVideo = (id, videoActualizado) => {
    setVideos(videos.map((video) => (video.id === id ? videoActualizado : video)));
  };

  return (
    <Router>
      <header className="header">
        <div className="logo">LuraFlix</div>
        <nav>
          <Link to="/" className="boton">Home</Link>
          <Link to="/nuevo-video" className="boton">Registrar Video</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home videos={videos} eliminarVideo={eliminarVideo} actualizarVideo={actualizarVideo} />} />
        <Route path="/nuevo-video" element={<NuevoVideo agregarVideo={agregarVideo} />} />
      </Routes>

      <footer className="footer">LuraFlix</footer>
    </Router>
  );
}

export default App;
