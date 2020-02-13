import apiManager from './apiManager.js';
import createHtml from './createHtml.js';

const renderComponents = {
    renderInterests() {
        const interestsLog = document.querySelector("#interests_log");

        apiManager.getAllInterests()
            .then(interests => {
                interestsLog.innerHTML = "";

                interests.forEach(interest => {
                    interestsLog.innerHTML += createHtml.interestsFactory(interest)
                });
            })
    },
    renderCountries() {
        const countryDropdown = document.querySelector("#place_input");

        apiManager.getCountries()
            .then(countries => {
                countries.forEach(country => {
                    countryDropdown.innerHTML += createHtml.countryDropdown(country)
                })
            })
    }
}

export default renderComponents;