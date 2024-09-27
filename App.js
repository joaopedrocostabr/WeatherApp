import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = 'SUA_CHAVE_DE_API'; // Substitua pela sua chave da WeatherAPI

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Sao Paulo`);
        setWeatherData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <View style={styles.container}>
      {weatherData ? (
        <>
          <Text style={styles.title}>Clima em {weatherData.location.name}</Text>
          <Text>Temperatura: {weatherData.current.temp_c}°C</Text>
          <Text>Condição: {weatherData.current.condition.text}</Text>
          <Text>Umidade: {weatherData.current.humidity}%</Text>
        </>
      ) : (
        <Text>Carregando...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
