import React from 'react';

function Video() {
  return (
    <div className="aspect-w-16 aspect-h-16">
      <video
        className="w-full h-full object-cover"
        src="EM.webm"
        autoPlay
        loop
        muted
        playsInline>
        Seu navegador não suporta este tipo de vídeo.
      </video>
    </div>
  );
}

export default Video;