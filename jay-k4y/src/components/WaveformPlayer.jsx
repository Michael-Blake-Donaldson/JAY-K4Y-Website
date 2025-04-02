import { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import '../styles/main.scss';
import { FaPlay, FaPause } from 'react-icons/fa';
import ColorThief from 'colorthief';

export default function WaveformPlayer({ src, title, cover }) {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [glowColor, setGlowColor] = useState('#a12424');
  const imgRef = useRef(null);

  useEffect(() => {
    if (waveformRef.current) {
      wavesurfer.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: '#7c7c7c',
        progressColor: glowColor,
        height: 80,
        barWidth: 3,
        barRadius: 3,
        responsive: true,
        backend: 'MediaElement',
      });

      wavesurfer.current.load(src);

      wavesurfer.current.on('finish', () => {
        setIsPlaying(false);
      });
    }

    return () => {
      if (wavesurfer.current && wavesurfer.current.destroy) {
        try {
          wavesurfer.current.destroy();
          wavesurfer.current = null;
        } catch (err) {
          console.warn(`Failed to destroy wavesurfer for ${title}:`, err);
        }
      }
    };
  }, [src, glowColor, title]);

  const togglePlay = () => {
    if (!wavesurfer.current) return;
    wavesurfer.current.playPause();
    setIsPlaying(!isPlaying);
  };

  const handleImageLoad = () => {
    const colorThief = new ColorThief();
    try {
      const color = colorThief.getColor(imgRef.current);
      const rgb = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
      setGlowColor(rgb);
      document.documentElement.style.setProperty('--glow', rgb);
    } catch (err) {
      console.warn('Could not extract color:', err);
    }
  };

  return (
    <div className="waveform-player">
      {cover && (
        <img
        ref={imgRef}
        crossOrigin="anonymous"
        src={cover}
        alt={`${title} cover`}
        className={`track-cover ${isPlaying ? 'glow' : ''}`}
        onLoad={handleImageLoad}
        style={isPlaying ? { '--glow': glowColor } : {}}
      />
      )}
      <h3>{title}</h3>
      <div ref={waveformRef} className="waveform" />
      <button className="wave-play" onClick={togglePlay}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
}
