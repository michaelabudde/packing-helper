const latitude = 51.5073;
const longitude = -0.1277;
const APIkey = `e1cb1a1fd77b289b626add522ceaec94`;
export const getForecast = async (latitude, longitude) => {
  try {
    const weatherApi = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${APIkey}`,
    );
    // add units=imperial
    console.log('data fetched');
    const result = await weatherApi.json();
    return result;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error; // Propagate the error
  }
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main && main.temp;
  const weather = {
    temperature: {
      F: Math.round(temperature),
    },
  };
  return weather;
};
export const parseLocationData = (data) => {
  const weatherLocation = data.name;
  return weatherLocation;
};
