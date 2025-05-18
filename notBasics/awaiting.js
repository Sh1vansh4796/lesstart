const button = document.getElementById('searching');
const input = document.getElementById('city');

async function getData(city) {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=bf00b54718b041c4b5d222802251505&q=${city}&aqi=yes`);
    return await response.json();
}

button.addEventListener('click', async () => {
    const value = input.value;
    const result = await getData(value);
    console.log(result); // this will print the weather info in the browser console
});
// this type