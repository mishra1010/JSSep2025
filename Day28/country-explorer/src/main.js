console.log("Country Explorer");

const error = document.getElementById("error");
const loader = document.getElementById("loader");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const countryDetails = document.getElementById("countryDetails");
let map;

searchBtn.addEventListener("click", async ()=>{
    const country = searchInput.value.trim();
    if(!country) return;

    await fetchCountry(country);
})

async function fetchCountry(name){
    loader.classList.remove("hidden");
    error.classList.add("hidden");
    countryDetails.innerHTML = "";
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
        const data = await response.json();
        const country = data[0];
        if(!country) {
            throw new Error("Country not found");
        }
        console.log(country);

        const languages = country.languages? Object.values(country.languages).join(", ") : "N/A";
        countryDetails.innerHTML = `
        <div class="p-4 border rounded shadow">
            <img src="${country.flags.svg}" alt="Flag of ${country.name.common}" class="w-32 mb-4 rounded-md"/>
            <h2 class="text-xl font-bold"> ${country.name.common}</h2>
            <p><strong>Capital:</strong> ${country.capital}</p>
            <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
            <p><strong>Region:</strong> ${country.region}</p>
            <p><strong>Languages:</strong> ${languages}</p>
            <div class="mb-4">
                <h2 class="text-lg font-semibold mb-2">Local Times</h2>
                <ul id="timezoneList" class="list-disc ml-6"></ul>
            </div>
        </div>`;

        updateTimezones(country.timezones);
        drawMap(country.latlng,country.name.common);

    } catch (err){
        error.classList.remove("hidden");
        error.textContent = err.message || "An error occurred while fetching country data.";
    } finally {
        loader.classList.add("hidden");
    }
}

function updateTimezones(timezones){
    const timezoneList = document.getElementById("timezoneList");
    timezoneList.innerHTML = "";
    timezones.forEach((tz) => {
        const listItem = document.createElement("li");
        const localTime = getTimeUsingIntl(tz);
        listItem.textContent = `${tz}: ${localTime}`;
        timezoneList.appendChild(listItem);
    });
}

function getTimeUsingIntl(tz){
    try {
        const options = {
            timeZone: convertToIANA(tz),
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        }
        return Intl.DateTimeFormat("en-US", options).format(new Date());
    } catch (err){
        console.warn(`Timezone ${tz} not supported, falling back.`);
        return "Unsupported Timezone";
    }
}

function convertToIANA(tz){
    // Simple conversion for common timezones
    if(tz === "UTC") return "Etc/UTC";

    const match = tz.match(/^UTC([+-]\d{2}):(\d{2})/);
    if(match){
        const [, hours, minutes] = match;

        // Ignore minutes for simplicity and focus on hour offset
        const offset = parseInt(hours, 10);
        const sign = offset >= 0 ? "-" : "+";
        return `Etc/GMT${sign}${Math.abs(offset)}`; // Note the inverted sign for Etc/GMT
    }
    return "Etc/UTC"; // Return as is if no conversion found - fallback
}

function drawMap(latlang, name){
    const [lat, lang] = latlang;

    if(!map){
        map = L.map('map').setView([lat, lang], 5);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    } else {
        map.setView([lat, lang], 5);
    }
    L.marker([lat, lang]).addTo(map).bindPopup(name).openPopup();
}

