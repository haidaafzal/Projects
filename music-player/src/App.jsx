import React, { useState, useRef, useEffect } from "react";

export default function App() {
  // Playlist songs
  const playlist = [
    {
      title: "Surah Yaseen",
      artist: "Quran Recitation",
      src: "https://download.quranicaudio.com/quran/abdullaah_basfar/036.mp3",
      cover: "https://images.pexels.com/photos/3936216/pexels-photo-3936216.jpeg",
    },
    {
      title: "Surah Al-Mulk",
      artist: "Quran Recitation",
      src: "https://download.quranicaudio.com/quran/abdullaah_basfar/067.mp3",
      cover: "https://images.pexels.com/photos/3936216/pexels-photo-3936216.jpeg",
    },
    {
      title: "Surah Ar-Rahman",
      artist: "Quran Recitation",
      src: "https://download.quranicaudio.com/quran/abdullaah_basfar/055.mp3",
      cover: "https://images.pexels.com/photos/3936216/pexels-photo-3936216.jpeg",
    },
  ];

  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [volume, setVolume] = useState(1);

  const audioRef = useRef(null);

  // Format time
  const formatTime = (time) => {
    if (!time || isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    if (isShuffle) {
      shuffleSong();
    } else {
      setCurrentSong((prev) => (prev + 1) % playlist.length);
    }
  };

  const prevSong = () => {
    setCurrentSong((prev) => (prev === 0 ? playlist.length - 1 : prev - 1));
  };

  const shuffleSong = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * playlist.length);
    } while (randomIndex === currentSong);
    setCurrentSong(randomIndex);
  };

  const handleTimeUpdate = () => {
    const current = audioRef.current.currentTime;
    const total = audioRef.current.duration;
    setCurrentTime(current);
    setProgress((current / total) * 100);
  };

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * duration;
    audioRef.current.currentTime = newTime;
  };

  const handleEnded = () => {
    if (isRepeat) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      nextSong();
      setTimeout(() => {
        if (isPlaying) audioRef.current.play();
      }, 200);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentSong]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600">
      <div className="bg-white shadow-2xl rounded-2xl p-6 w-80 text-center">
        {/* Album Art with Thick Golden Border */}
        <div
          className={`w-44 h-44 mx-auto rounded-full p-1 transition-all duration-500 ${
            isPlaying
              ? "ring-8 ring-yellow-400 shadow-[0_0_30px_10px_rgba(250,204,21,0.6)] animate-pulse"
              : "ring-4 ring-gray-300"
          }`}
        >
          <img
            src={playlist[currentSong].cover}
            alt="Album Cover"
            className="w-full h-full rounded-full object-cover"
          />
        </div>

        {/* Song Info */}
        <h2 className="text-lg font-bold mt-4">
          {playlist[currentSong].title}
        </h2>
        <p className="text-gray-500 text-sm">{playlist[currentSong].artist}</p>

        {/* Progress Bar */}
        <div className="mt-4">
          <div
            className="w-full bg-gray-200 h-2 rounded-lg cursor-pointer"
            onClick={handleSeek}
          >
            <div
              className="bg-indigo-500 h-2 rounded-lg"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-6 mt-6">
          <button
            className={`text-2xl ${
              isShuffle ? "text-indigo-500" : "text-gray-600"
            }`}
            onClick={() => setIsShuffle(!isShuffle)}
          >
            🔀
          </button>
          <button
            className="text-gray-600 hover:text-indigo-500 text-2xl"
            onClick={prevSong}
          >
            ⏮️
          </button>
          <button
            className="bg-indigo-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl shadow-lg hover:bg-indigo-600"
            onClick={togglePlay}
          >
            {isPlaying ? "⏸️" : "▶️"}
          </button>
          <button
            className="text-gray-600 hover:text-indigo-500 text-2xl"
            onClick={nextSong}
          >
            ⏭️
          </button>
          <button
            className={`text-2xl ${
              isRepeat ? "text-indigo-500" : "text-gray-600"
            }`}
            onClick={() => setIsRepeat(!isRepeat)}
          >
            🔁
          </button>
        </div>

       {/* Volume Control */}
        <div className="mt-4 flex items-center gap-2">
          <span className="text-gray-500">🔉</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            className="w-full"
          />
          <span className="text-gray-500">🔊</span>
        </div>

       
        {/* Audio Element */}
        <audio
          ref={audioRef}
          src={playlist[currentSong].src}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={() => setDuration(audioRef.current.duration)}
          onEnded={handleEnded}
        ></audio>
      </div>
    </div>
  );
}
