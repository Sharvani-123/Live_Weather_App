import React from 'react'

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return null

  // Extract data from OpenWeatherMap API response
  const {
    name: location,
    main: { temp, humidity, temp_max, temp_min },
    weather: [{ main: description, icon }],
    wind: { speed: windSpeed },
    clouds: { all: cloudiness },
    visibility,
    sys: { country }
  } = weatherData

  return (
    <div className="flex justify-center items-center px-4 py-8">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 w-full max-w-md lg:max-w-lg shadow-2xl">
        {/* Location */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-medium text-gray-200 mb-2">
            {location}, {country}
          </h2>
          <div className="flex items-center justify-center gap-2">
            <span className="text-5xl font-bold text-white">
              {Math.round(temp)}°C
            </span>
            <div className="flex flex-col items-start">
              <span className="text-sm text-gray-300">{description}</span>
              <img 
                src={`https://openweathermap.org/img/wn/${icon}@2x.png`} 
                alt={description}
                className="w-12 h-12"
              />
            </div>
          </div>
          <p className="text-gray-300 text-sm mt-2">
            High: {Math.round(temp_max)}° / Low: {Math.round(temp_min)}°
          </p>
        </div>

        {/* Summary Section */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-200 text-center mb-4">Summary</h3>
          
          {/* Weather Details Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Humidity */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
              <div className="text-xs text-gray-400 mb-1">Humidity</div>
              <div className="text-sm font-medium text-white">{humidity}%</div>
            </div>

            {/* Cloudiness */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
              <div className="text-xs text-gray-400 mb-1">Cloudiness</div>
              <div className="text-sm font-medium text-white">{cloudiness}%</div>
            </div>

            {/* Wind Speed */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
              <div className="text-xs text-gray-400 mb-1">Wind Speed</div>
              <div className="text-sm font-medium text-white">{windSpeed} m/s</div>
            </div>

            {/* Visibility */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
              <div className="text-xs text-gray-400 mb-1">Visibility</div>
              <div className="text-sm font-medium text-white">{(visibility / 1000).toFixed(1)} km</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard