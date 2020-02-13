const createHtml = {
    interestsFactory(interest) {
        return `
        <div class="interest_output">
        <h3>${interest.name}</h3>
        <h4>${interest.place.name}</h4>
        <p>Description: ${interest.description}</p>
        <p>Cost: $${interest.cost}</p>
        <p>Review: ${interest.review}</p>
        </div>
        `;
    },
    countryDropdown(country) {
        return `
        <option value=${country.id}>${country.name}</option>
        `;
    }
}

export default createHtml;