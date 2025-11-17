// backend/report.js
const axios = require("axios");
const fs = require("fs");
const path = require("path");

async function generateReport() {
  try {
    const API = "https://itunes.apple.com/search?term=top%20hits&entity=song";
    const { data } = await axios.get(API);
    const tracks = data.results || [];

    const report = {
      generated_at: new Date().toISOString(),
      platform: "iTunes Search API",
      top_count: tracks.length,
      top_tracks: tracks.map((t) => ({
        id: t.trackId,
        title: t.trackName,
        artist: t.artistName,
        album: t.collectionName,
        preview: t.previewUrl,
        artwork: t.artworkUrl100,
      })),
    };

    const outPath = path.join(__dirname, "weekly-report.json");
    fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
    console.log("Weekly report generated at", outPath);
  } catch (err) {
    console.error("Failed to generate report:", err.message || err);
  }
}

generateReport();

