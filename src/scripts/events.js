import apiManager from './apiManager.js';
import renderComponenets from './renderComponents.js';

const saveButton = document.querySelector("#save_button");
const nameInput = document.querySelector("#name_input");
const descriptionInput = document.querySelector("#description_input");
const costInput = document.querySelector("#cost_input");
const reviewInput = document.querySelector("#review_input");

const events = {
    addSaveButtonEventListenter() {
        saveButton.addEventListener("click", () => {
            const newInterestObject = {
                "name": nameInput.value,
                "description": descriptionInput.value,
                "cost": costInput.value,
                "review": reviewInput.value
            }

            apiManager.addNewInterest(newInterestObject)
                .then(renderComponenets.renderInterests)
        })
    }
}

export default events;