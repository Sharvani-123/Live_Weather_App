import React,{useState} from 'react'
import SearchCity from './components/searchCity'
import Header from './components/Header'
import WeatherCard from './components/WeatherCard'

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading]= useState(null);
  const [error, setError]= useState(null);

  const fetchWeatherData= async(city)=>{
      setLoading(true);
      setError(null)

      try{
        const API_KEY=import.meta.env.VITE_WEATHER_API_KEY ;
        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        if(!response.ok){
          throw new Error('City not found')
        }

        const data = await response.json()
        setWeatherData(data);
      } catch(err){
        setError(err.message)
        setWeatherData(null)
      }
      finally {
      setLoading(false)
    }
  }
  return (
    <div className='min-h-screen  text-white bg-gradient-to-tl from-bg-gray-900 via-gray-800 to-gray-700'>
      <Header/>
    <SearchCity onSearch={fetchWeatherData} loading={loading} />
      {error && (
        <div className="flex justify-center items-center px-4">
          <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 text-red-200 text-center">
            {error}!
          </div>
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div className="flex justify-center items-center px-4 py-8">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 w-full max-w-md lg:max-w-lg shadow-2xl">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
              <p className="text-gray-200">Loading weather data...</p>
            </div>
          </div>
        </div>
      )}

      {/* Weather Card - Only show when we have data and not loading */}
    {weatherData && <WeatherCard weatherData={weatherData}/>}

    {/* Default State - Show when no data, no error, and not loading */}
      {!weatherData && !loading && !error && (
        <div className="flex justify-center items-center px-4 py-8">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 w-full max-w-md lg:max-w-lg shadow-2xl">
            <div className="text-center">
              <div className="mb-4">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-200 mb-2">
                Welcome to Live Weather App
                 </h3>
              <p className="text-gray-300 text-sm">
                Search for a city to know the weather
              </p>
              <div className="mt-4 text-xs text-gray-400">
                Enter any city name above to get started
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
