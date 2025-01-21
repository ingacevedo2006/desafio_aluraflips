import React from 'react';
import './VideoCard.css';

function VideoCard({ video, eliminarVideo, actualizarVideo }) {
  return (
    <div className="video-card">
      <img src={video.imagen} alt={video.titulo} />
      <h4>{video.titulo}</h4>
      <p>{video.descripcion}</p>
      <div className="acciones">
        <button onClick={() => eliminarVideo(video.id)}>Eliminar</button>
        <button onClick={() => actualizarVideo(video.id, { ...video, titulo: 'Nuevo Título' })}>Editar</button>
      </div>
    </div>
  );
}

export default VideoCard;
