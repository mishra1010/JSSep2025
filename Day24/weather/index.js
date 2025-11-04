const queryWeather = async (city) => {
    try {
        showLoading();
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`);
    
    if (!res.ok) throw new Error('City not found');

    const data = await res.json();
    displayWeather(data);
    } catch (error) {
        showError(error.message);
    } finally {
        hideLoading();
    }
};

function displayWeather(data) {
    const html =`
    <h2>${data.name}, ${data.sys.country}</h2>
    <p>Temperature: ${data.main.temp} °C</p>
    <p>Condition: ${data.weather[0].description}</p>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather icon">`;
    document.querySelector('#result').innerHTML = html;
}

function showError(message) {   
    document.querySelector('#result').innerHTML = `<p style="color: red;">❌${message}</p>`;
}

document.querySelector('#searchBtn').addEventListener('click', async () => {
    const city = document.querySelector('#cityInput').value;
    if (city) {
        queryWeather(city);     
    }
});

function showLoading() {
    document.querySelector('#loading').innerHTML = '⌛Loading...';
}

function hideLoading() {
    document.querySelector('#loading').innerHTML = '';
}