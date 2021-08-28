const countriesLoad = () =>{
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data => displyaCountries(data));
}
countriesLoad();

const displyaCountries = (countries) => {
    const countriesContainer = document.getElementById('countries');
    countries.forEach(country=> {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
            <h3>Country Name: 
            ${country.name} 
            </h3>
            <h5>Capital Name: 
            ${country.capital}</h5> 
            <button onclick="loadCountryByName('${country.name}')"> Details </button> 
        `;
        countriesContainer.appendChild(div);
    })
    };

const loadCountryByName = name =>{
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displyaCountriesDetials(data[0]));
}

const displyaCountriesDetials = (country) => {
    console.log(country);
    const countryDetails = document.getElementById('country-details');
    countryDetails.innerHTML = `
        <h3>Country Name: 
        ${country.name} 
        </h3>
        <h4>Population: 
        ${country.population} 
        </h3>
        <img width="200px" src="${country.flag}">
    `
}