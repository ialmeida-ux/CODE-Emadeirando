import React from 'react';
import video from './../../../src/assets/videos/EM.webm';

function Video() {
  return (
    <div className="aspect-w-16 aspect-h-16">
      <video
        className="w-full h-full object-cover"
        src={video}
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