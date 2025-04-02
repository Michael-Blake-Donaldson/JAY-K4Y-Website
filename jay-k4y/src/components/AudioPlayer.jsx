import { useRef, useState, useEffect } from 'react';
import '../styles/main.scss';
import { FaPlay, FaPause } from 'react-icons/fa';

export default function AudioPlayer({ title, src }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const percent = (audioRef.current.currentTime / audioRef.current.duration) * 100;
    setProgress(percent);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.addEventListener('timeupdate', handleTimeUpdate);
    return () => audio.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);

  return (
    <div className="custom-audio-player">
      <h3>{title}</h3>
      <div className="player-controls">
        <button onClick={togglePlay}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>
      <audio ref={audioRef} src={src} />
    </div>
  );
}
