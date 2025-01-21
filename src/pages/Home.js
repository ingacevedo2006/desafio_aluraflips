import React from 'react';
import VideoCard from '../components/VideoCard';
import './Home.css';

function Home({ videos, eliminarVideo, actualizarVideo }) {
  return (
    <div className="home">
      <div className="banner">Bienvenido a LuraFlix</div>
      <div className="categorias">
        <h2>Videos por Categoría</h2>
        {['Frontend', 'Backend', 'Innovación', 'Gestión'].map((categoria) => (
          <div key={categoria} className="categoria">
            <h3>{categoria}</h3>
            <div className="videos">
              {videos
                .filter((video) => video.categoria === categoria)
                .map((video) => (
                  <VideoCard
                    key={video.id}
                    video={video}
                    eliminarVideo={eliminarVideo}
                    actualizarVideo={actualizarVideo}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
