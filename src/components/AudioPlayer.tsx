'use client';

import { Pause, Play } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface AudioPlayerProps {
  src: string;
}

const fallbackDuration = 159;

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds)) {
    return '0:00';
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60)
    .toString()
    .padStart(2, '0');

  return `${minutes}:${remainingSeconds}`;
}

export default function AudioPlayer({
  src,
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    const updateDuration = () => setDuration(audio.duration);
    const updateTime = () => setCurrentTime(audio.currentTime);
    const stopPlaying = () => setIsPlaying(false);

    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('durationchange', updateDuration);
    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('ended', stopPlaying);

    return () => {
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('durationchange', updateDuration);
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('ended', stopPlaying);
    };
  }, []);

  const togglePlayback = async () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (audio.paused) {
      await audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleSeek = (value: string) => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    const nextTime = Number(value);
    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  return (
    <div className="story-audio">
      <audio
        ref={audioRef}
        preload="metadata"
        src={src}
        onLoadedMetadata={(event) =>
          setDuration(event.currentTarget.duration)
        }
        onDurationChange={(event) =>
          setDuration(event.currentTarget.duration)
        }
        onLoadedData={(event) =>
          setDuration(event.currentTarget.duration)
        }
      >
        Tu navegador no admite audio.
      </audio>

      <input
        className="story-audio-progress"
        type="range"
        min="0"
        max={duration || fallbackDuration}
        step="0.1"
        value={Math.min(currentTime, duration || fallbackDuration)}
        onChange={(event) => handleSeek(event.target.value)}
        aria-label="Progreso del audio"
      />

      <div className="story-audio-controls">
        <button
          className="story-audio-play"
          type="button"
          onClick={togglePlayback}
          aria-label={isPlaying ? 'Pausar audio' : 'Reproducir audio'}
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} />}
        </button>

        <span className="story-audio-caption">Escucha el relato</span>

        <span className="story-audio-time">
          {formatTime(currentTime)} /{' '}
          {formatTime(duration || fallbackDuration)}
        </span>
      </div>
    </div>
  );
}
