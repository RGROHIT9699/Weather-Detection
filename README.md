# Weather Dashboard

A modern weather dashboard application that provides real-time weather information for cities worldwide. Built with React for the frontend and Node.js/Express for the backend.

## Features

- Real-time weather data for any city
- Dark/Light mode toggle
- Responsive design
- Detailed weather information including:
  - Temperature
  - Weather conditions
  - Humidity
  - Wind speed
  - Pressure
  - Sunrise/Sunset times

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- OpenWeatherMap API key

## Setup Instructions

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd weather-dashboard
```

### 2. Backend Setup
1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the server directory with your OpenWeatherMap API key:
```env
OPENWEATHER_API_KEY=your_api_key_here
```

### 3. Frontend Setup
1. Navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. The client already has a `.env` file configured with:
```env
REACT_APP_API_URL=http://localhost:5000
PORT=3001
```

## Running the Application

### 1. Start the Backend Server
From the server directory:
```bash
npm start
```
The server will run on http://localhost:5000

### 2. Start the Frontend Application
From the client directory:
```bash
npm start
```
The client will run on http://localhost:3001

## Usage

1. Open your browser and navigate to http://localhost:3001
2. Use the theme toggle in the top-right corner to switch between dark and light modes
3. Enter a city name in the search bar to view its weather information
4. The dashboard will display comprehensive weather data for the searched city

## Troubleshooting

If you encounter any issues:

1. Ensure both the server and client are running
2. Verify your OpenWeatherMap API key is correctly set in the server's `.env` file
3. Check that the client's `.env` file has the correct API URL
4. Make sure no other applications are using ports 5000 or 3001

## API Documentation

The application uses the OpenWeatherMap API. For more information about the API, visit:
https://openweathermap.org/api

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
