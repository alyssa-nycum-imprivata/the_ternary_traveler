const baseUrl = "http://localhost:8088";

const placesExtension = "/places";
const interestsExtension = "/interests";
const expandPlace = "?_expand=place"

const apiManager = {
    getAllInterests() {
        return fetch(baseUrl + interestsExtension + expandPlace)
            .then(resp => resp.json())
    },
    addNewInterest(newInterest) {
        return fetch(baseUrl + interestsExtension + expandPlace, {
           method: "POST",
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify(newInterest) 
        })
            .then(resp => resp.json())
    }
}

export default apiManager;