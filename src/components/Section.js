export class Section {
  constructor({ items, renderer}, templateSelector) {
    this._items = items
    this._renderer = renderer
    this._templateSelector = document.querySelector(templateSelector)
  }
  renderItems() {
    this._items.forEach(this._renderer)
  }
  addItem(cardElement) {
    this._templateSelector.prepend(cardElement)
  }
}