import { Application, Controller } from 'stimulus';
window.Stimulus = Application.start()

import grossListController from "./controllers/gross_list_controller.js"
Stimulus.register("gross-list", grossListController)

// Pseudo Code
// TODO Create & Connect GrossList Controller ✅
// TODO Targets (which elements do we need from the HTML) 🎯 ✅
// TODO Actions (what actions are we listening to & what are we doing because of that?) 🏋️
// TODO - Action I. Collect user input
// TODO - Action II. Injecting the HTML with whatever that is ("eggs")
