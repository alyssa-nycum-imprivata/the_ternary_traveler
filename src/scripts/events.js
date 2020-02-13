import apiManager from './apiManager.js';
import renderComponents from './renderComponents.js';
import clearInterestForm from './clearInterestForm.js';

const nameInput = document.querySelector("#name_input");
const descriptionInput = document.querySelector("#description_input");
const costInput = document.querySelector("#cost_input");
const reviewInput = document.querySelector("#review_input");
const placeInput = document.querySelector("#place_input");
const interestId = document.querySelector("#interest_id");

const events = {
    addSaveButtonEventListener() {
        const saveButton = document.querySelector("#save_button");
    
        saveButton.addEventListener("click", () => {
            const newInterestObject = {
                "placeId": placeInput.value,
                "name": nameInput.value,
                "description": descriptionInput.value,
                "cost": costInput.value,
                "review": reviewInput.value
            }
    
            if (interestId.value !== "") {
                newInterestObject.id = parseInt(interestId.value);
    
                apiManager.editInterest(newInterestObject)
                    .then(renderComponents.renderInterests)
                    .then(clearInterestForm)
            } else {
                apiManager.addNewInterest(newInterestObject)
                    .then(renderComponents.renderInterests)
                    .then(clearInterestForm)
            }
        })
    },
    addDeleteButtonsEventListener() {
        const deleteButtons = document.getElementsByClassName("delete_buttons");
    
        const deleteButtonsArray = Array.from(deleteButtons)
    
        deleteButtonsArray.forEach(button => {
            button.addEventListener("click", () => {
                const interestIdToDelete = event.target.id.split("--")[1]
    
                apiManager.deleteInterest(interestIdToDelete)
                    .then(renderComponents.renderInterests)
            })
        })
    },
    addEditButtonsEventListeners() {
        const editButtons = document.getElementsByClassName("edit_buttons");
    
        const editButtonsArray = Array.from(editButtons)
    
        editButtonsArray.forEach(button => {
            button.addEventListener("click", () => {
                const interestIdToEdit = event.target.id.split("--")[1]
    
                apiManager.updateInterestFields(interestIdToEdit)
                    .then(interest => {
                        interestId.value = interest.id,
                            placeInput.value = interest.place.id,
                            nameInput.value = interest.name,
                            descriptionInput.value = interest.description,
                            costInput.value = interest.cost,
                            reviewInput.value = interest.review
                    })
                })
            })
        }
}

export default events;
