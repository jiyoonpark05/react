import React from 'react';
import Loading from "./Loading";
import * as Location from "expo-location";
import { Alert } from "react-native";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "66f338f28a22d4a4ca769dd4d47162fe";

export default class extends React.Component {

  state = {
    isLoading : true,
  };

  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: {temp},
        weather,
        name
      }
    } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`);

    this.setState({
      isLoading : false,
      condition : weather[0].main,
      city : name,
      temp
    });
  };


  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords :{latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      console.log(location);
      this.getWeather(latitude, longitude);
    } catch(error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };

  componentDidMount() {
   this.getLocation();
  }

  render() {
    const {isLoading, temp, condition, city} = this.state;
    return isLoading ? (
        <Loading />
        ) : (
        <Weather temp={Math.floor(temp)} condition={condition} city={city}/>
    );
  }
}

