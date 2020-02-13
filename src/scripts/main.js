import apiManager from './apiManager.js';
import renderComponents from './renderComponents.js';
import events from './events.js';

apiManager.getAllInterests();

apiManager.getCountries().then(renderComponents.renderCountries)

renderComponents.renderInterests();

events.addSaveButtonEventListener();