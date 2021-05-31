import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import CountryDetails from './CountryDetails';
import WeatherDetails from './WeatherDetails';


const APP_KEY = 'Your API KEY'
function Home() {
    
    const [countries, setCountries] = useState({})
    const [inputText, setInputText] = useState('')
    const [searchText, setSearchText] = useState('')
    const [capital, setCapital] = useState('')
    const [weather, setWeather] = useState({})

    useEffect( () =>{
        getCountries()
    }, [searchText])

    const getCountries = async () => {
        const response = await fetch(`https://restcountries.eu/rest/v2/name/${searchText}`)
        const data = await response.json()
        setCountries(data[0])
    }

    const setSearchInState = e => {
        e.preventDefault()
        setSearchText(inputText)
        setInputText('')
    }

    useEffect(() => {
        getWeatherInfo()
    }, [capital])

    useEffect(() => {
        console.log(weather)
    },[weather])
    const setCapitalFunc = val => {
        setCapital(val)
    }

    const getWeatherInfo = async () => {
        const response1 = await fetch(`http://api.weatherstack.com/current?access_key=${APP_KEY}&query=${capital}`)
        const data1 = await response1.json()
        setWeather(data1)
    }

    return (
        <div>
            <form className='country-form' onSubmit={setSearchInState}>
                <input 
                    type='text' 
                    placeholder='Enter a country..' 
                    className="search-bar" 
                    value={inputText} 
                    onChange={e => setInputText(e.target.value)}
                    />
                <span className='home-btn'><Button type='submit' variant="contained" color="primary" className="search-button">
                    Submit
                </Button></span>
            </form>
            
            <CountryDetails 
                capital = {countries.capital}
                population = {countries.population}
                latlng = {countries.latlng}
                flag = {countries.flag}
                get_weather = {setCapitalFunc} 
            />
            
            <WeatherDetails 
                temperature = {weather.current?.temperature }
                weather_icons = {weather.current?.weather_icons}
                wind_speed = {weather.current?.wind_speed}
                precip = {weather.current?.precip}
            />
        </div>
    )
}

export default Home