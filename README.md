# Nexon - AI-Powered Math Tutor Platform

An intelligent math tutoring platform with personalized learning experiences powered by AI.

## Features
- ? AI-powered math tutor (Nexon)
- ?? Interactive visualizations
- ?? Adaptive difficulty
- ?? Progress tracking
- ?? Gamification elements

## Tech Stack
- **Frontend:** React, Vite, TailwindCSS, Framer Motion
- **Backend:** Node.js, Express
- **AI:** Claude API
- **Auth:** Firebase
- **Visualizations:** Recharts, SVG

## Getting Started

### Prerequisites
- Node.js 18+
- Firebase account
- Claude API key

### Installation

1. Clone the repository
```bash
git clone https://github.com/idan19933/clean-project-nexon.git
cd clean-project-nexon
```

2. Install frontend dependencies
```bash
npm install
```

3. Install backend dependencies
```bash
cd server
npm install
cd ..
```

4. Set up environment variables

Create .env in root:
```
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
```

Create server/.env:
```
ANTHROPIC_API_KEY=your_claude_key
PORT=3001
```

5. Run the development servers

Terminal 1 (Frontend):
```bash
npm run dev
```

Terminal 2 (Backend):
```bash
cd server
npm start
```

## Project Structure
```
nexon-clean/
+-- src/
¦   +-- components/ai/MathTutor.jsx  # Main tutor component
¦   +-- pages/Practice.jsx           # Practice interface
¦   +-- config/israeliCurriculum.js  # Curriculum data
+-- server/
    +-- server.js                    # API server
    +-- personalities/?????.json     # AI personality
```

## License
MIT
