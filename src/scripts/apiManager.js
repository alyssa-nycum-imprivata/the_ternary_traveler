const baseUrl = "http://localhost:8088/";

const placesExtension = "/places";

const interestsExtension = "/interests";

const apiManager = {
    getAllInterests() {
        return fetch(baseUrl + interestsExtension)
            .then(resp => resp.json())
    }
}