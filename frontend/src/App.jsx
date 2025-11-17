// frontend/src/App.jsx
import { useEffect, useState } from "react";

// Single Song Card Component
function SongCard({ song }) {
  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 border border-gray-100 hover:-translate-y-1">
      <div className="flex flex-row items-center justify-center">
        <img
          src={song.artworkUrl100}
          alt={song.trackName}
          className="w-24 h-24 object-cover rounded-full"
        />
        <div className="ml-4">
          <h3 className="text-lg font-bold text-gray-900">{song.trackName}</h3>
          <p className="text-sm text-gray-500">{song.artistName}</p>
        </div>
      </div>

      <p className="mt-4 text-gray-400 text-xs truncate">
        {song.collectionName}
      </p>

      {song.previewUrl && (
        <a
          href={song.previewUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          ▶ Listen Preview
        </a>
      )}
    </div>
  );
}

export default function App() {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch trending songs from backend
  useEffect(() => {
    async function load() {
      try {
        setLoading(true);

        const BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";

        const res = await fetch(`${BASE}/trends`);
        const json = await res.json();

        if (json?.ok && json.tracks) setTracks(json.tracks);
        else if (Array.isArray(json)) setTracks(json);
      } catch (err) {
        console.error("Failed to load", err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-white">
            Trending Music Explorer
          </h1>

          <p className="mt-2 text-sm sm:text-base text-white">
            Discover global trending tracks — powered by iTunes API
          </p>
        </header>

        {/* Loader */}
        {loading ? (
          <div className="text-center py-20 text-lg text-gray-600 animate-pulse">
            ⏳ Fetching latest music trends...
          </div>
        ) : tracks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {tracks.map((song) => (
              <SongCard key={song.trackId} song={song} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">No songs found.</div>
        )}

        {/* Footer */}
        <footer className="mt-14 text-center text-white text-sm">
          Built as an internship assignment • React + Vite + TailwindCSS
        </footer>
      </div>
    </div>
  );

}
