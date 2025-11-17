# Music Trend Aggregator (Simplified Submission)

**Author:** Amit Maurya
**Deadline:** November 20, 2025

---

## 1. Project Overview

This is a **simplified version** of a Multi-Platform Music Trend Aggregator.
It fetches trending songs from **itunes** and displays them on a **React + Tailwind** frontend.
A weekly report JSON file is also generated to show trending tracks.

This simplified version focuses on **functionality demonstration** due to limited time.

---

## 2. Features Implemented

- Backend (Node.js + Express):
  - `/trends` endpoint: fetches itunes top tracks
  - `/health` endpoint: checks server health
  - `report.js`: generates `weekly-report.json`
- Frontend (React + Vite + Tailwind):
  - Displays trending songs in cards (cover, title, artist, link)
  - Responsive layout (desktop + mobile)
- Live deployment:
  - Frontend: Vercel
  - Backend: Render
- Local weekly report generation (`backend/weekly-report.json`)

---

## 3. Architecture

Frontend (React + Tailwind)
|
Fetch data via API
v
Backend (Node.js + Express)
|
Fetch itunes top tracks
v
External API (iTunes Search API)

- Frontend calls backend `/trends` endpoint
- Backend fetches live data from Deezer API
- Weekly report JSON is generated locally using `report.js`

---

## 4. API Guide

### 4.1 GET /trends

- **URL:** `/trends`
- **Method:** GET
- **Response Example:**

```json
{
  "ok": true,
  "tracks": [
    {
      "id": 12345,
      "title": "Song Name",
      "artist": { "name": "Artist Name" },
      "album": { "title": "Album Name", "cover_medium": "https://..." },
      "link": "https://www.deezer.com/track/12345"
    }
  ]
}
```
---
### 4.2 GET /health

**URL:** `/health`
**Method:** GET
**Response Example:**

{ "ok": true, "now": "2025-11-17T10:30:00Z" }

---
### 5 Screenshots

(Add screenshots here for frontend and backend responses)

- Frontend UI showing trending songs
- Backend JSON response from /trends
- Sample weekly-report.json output

---
### 6 Limitations

- Simplified version: Only itunes is used, no Spotify/YouTube/TikTok
- No database or caching (Redis not used)
- No authentication / OAuth implemented
- No cross-platform matching or advanced analytics
- Weekly report is generated manually via node report.js
- No microservices architecture (everything runs in single backend)

---
### 7 Future Improvements

- Add Spotify, YouTube, and TikTok APIs with OAuth
- Store historical data in PostgreSQL + Redis caching
- Add Python microservice for trend analysis
- Implement rising artist detection and viral song predictions
- Generate automated weekly reports on server
- Deploy full microservices architecture with GraphQL
- Add mood-based trend and genre analysis dashboard

8. How to Run Locally

### Backend
```bash
cd backend
npm install
node index.js
```
# Open <http://localhost:5000/trends>

### Generate Weekly Report
```
cd backend
node report.js
# weekly-report.json generated
```
### Frontend
```
cd frontend
npm install
npm run dev
```
# Open <http://localhost:5173>

9. Contact

Author: Amit Maurya
 GitHub: https://github.com/Amit81082


