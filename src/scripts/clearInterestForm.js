const clearInterestForm = () => {
    const nameInput = document.querySelector("#name_input");
    const descriptionInput = document.querySelector("#description_input");
    const costInput = document.querySelector("#cost_input");
    const reviewInput = document.querySelector("#review_input");
    const placeInput = document.querySelector("#place_input");

    nameInput.value = "";
    descriptionInput.value = "";
    costInput.value = "";
    reviewInput.value = "";
    placeInput.value = "";
}

export default clearInterestForm;