// backend/index.js
// Simple Express server that proxies Deezer trending tracks
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/trends", async (req, res) => {
  try {
    // Deezer chart: top tracks globally
    const API = "https://itunes.apple.com/search?term=top%20hits&entity=song";
    const response = await axios.get(API, { timeout: 10000 });
    // data.data is an array of track objects
    res.json({ ok: true, tracks: response.data.results });
  } catch (err) {
    console.error("Error fetching trends:", err.message || err);
    res.status(500).json({ ok: false, error: "Failed to fetch trends" });
  }
});

// Small endpoint to check health
app.get("/health", (req, res) =>
  res.json({ ok: true, now: new Date().toISOString() })
);

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
