import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ["input", "list"]

  connect() {
    // console.log(this.inputTarget);
    // console.log(this.listTarget);
    // console.log(this.targets);
  }
  addItem(event) {
    // preventDefault
    event.preventDefault();
    // we want to collect the user INPUT
    const userInput = this.inputTarget.value
    // take the user input and create a list item from it
    // and add each item to out LIST unless its empty
    if (userInput !== "") {
      this.listTarget.insertAdjacentHTML("beforeend",
        `<li class="list-group-item">${userInput}</li>`
    )}
    this.inputTarget.value = ""
  }
}
