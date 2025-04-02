import '../styles/main.scss';
import WaveformPlayer from './WaveformPlayer';

export default function Music() {
  return (
    <section className="music-section" data-scroll-section>
      <h2 className="section-title">MUSIC</h2>
      <div className="track-grid">
        <WaveformPlayer
          title="CRUSADER"
          src="/audio/Crusaders.wav"
          cover="/covers/CrusaderCover.jpeg"
        />
        <WaveformPlayer
          title="PRETTY WITCH"
          src="/audio/Pretty-Witch.wav"
          cover="/covers/PRETTYWITCH.png"
        />
        <WaveformPlayer
          title="MAGICAL"
          src="/audio/Magical.mp3"
          cover="/covers/MagicalCover.jpeg"
        />
        <WaveformPlayer
          title="DEVILS WIFE"
          src="/audio/Devil's-Wife.mp3"
          cover="/covers/DevilWifeCover.jpeg"
        />
      </div>
    </section>
  );
}
