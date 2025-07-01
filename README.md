# 🌤️ Live Weather App

A modern, responsive weather application built with React and Vite that provides real-time weather information for any city worldwide.

![Weather App](https://img.shields.io/badge/React-18+-blue.svg)
![Vite](https://img.shields.io/badge/Vite-5+-green.svg)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3+-blue.svg)

## ✨ Features

- 🔍 **City Search**: Search for weather information by city name
- 🌡️ **Real-time Weather Data**: Current temperature, humidity, wind speed, and more
- 🎨 **Beautiful UI**: Modern glassmorphism design with dark mode
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- ⚡ **Fast Loading**: Built with Vite for lightning-fast development and builds
- 🌐 **Weather Icons**: Dynamic weather icons from OpenWeatherMap
- 📊 **Comprehensive Data**: Temperature, humidity, cloudiness, wind speed, and visibility
- 🔄 **Loading States**: Smooth loading animations and error handling

## 🚀 Tech Stack

- **Frontend**: React 19+ with Hooks
- **Build Tool**: Vite 7+
- **Styling**: Tailwind CSS 4+ with glassmorphism effects
- **API**: OpenWeatherMap API
- **State Management**: React Context API
- **HTTP Client**: Fetch API with Promises/Async-Await

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- OpenWeatherMap API key (free registration at [OpenWeatherMap](https://openweathermap.org/api))

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sharvani-123/Live_Weather_App.git
   cd Live_Weather_App
`bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_WEATHER_API_KEY=your_openweathermap_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the app

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header.jsx          # App header component
│   ├── SearchCity.jsx      # City search form
│   └── WeatherCard.jsx     # Weather display card
├── assets/                 # Static assets
├── App.jsx                 # Main app component
├── main.jsx               # App entry point
└── index.css              # Global styles
```

## 🌐 API Integration

This app uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch weather data:

- **Current Weather Data**: Real-time weather information
- **Units**: Metric system (Celsius, m/s, km)
- **Data Points**: Temperature, humidity, wind speed, cloudiness, visibility

## 🎨 Design Features

- **Glassmorphism UI**: Modern glass-like effects with backdrop blur
- **Dark Theme**: Beautiful gradient background from gray-900 to gray-700
- **Responsive Grid**: 2-column layout for weather details
- **Loading Animations**: Smooth spinner animations during API calls
- **Error States**: User-friendly error messages
- **Weather Icons**: Dynamic icons based on current weather conditions


## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for the weather API
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- [React](https://reactjs.org/) for the frontend framework
- [Vite](https://vitejs.dev/) for the build tool


---
