import apiManager from './apiManager.js';
import renderComponents from './renderComponents.js';
import events from './events.js';

apiManager.getAllInterests();

renderComponents.renderInterests();

events.addSaveButtonEventListenter();