import apiManager from './apiManager.js';
import renderComponenets from './renderComponents.js';
import clearInterestForm from './clearInterestForm.js';
import renderComponents from './renderComponents.js';

const saveButton = document.querySelector("#save_button");
const nameInput = document.querySelector("#name_input");
const descriptionInput = document.querySelector("#description_input");
const costInput = document.querySelector("#cost_input");
const reviewInput = document.querySelector("#review_input");
const placeInput = document.querySelector("#place_input");

const events = {
    addSaveButtonEventListener() {
        saveButton.addEventListener("click", () => {
            const newInterestObject = {
                "placeId": placeInput.value,
                "name": nameInput.value,
                "description": descriptionInput.value,
                "cost": costInput.value,
                "review": reviewInput.value
            }

            apiManager.addNewInterest(newInterestObject)
                .then(renderComponenets.renderInterests)
                .then(clearInterestForm)
        })
    },
    addDeleteButtonsEventListener() {
        const deleteButtons = document.getElementsByClassName("delete_buttons");

        const deleteButtonsArray = Array.from(deleteButtons)

        deleteButtonsArray.forEach(button => {
            button.addEventListener("click", () => {
                const interestId = event.target.id.split("--")[1]

                apiManager.deleteInterest(interestId)
                    .then(renderComponents.renderInterests)
            })
        })
    }
}

export default events;