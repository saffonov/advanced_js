class AddReview {
  /**
   * @type {null | HTMLDivElement}
   */
  #app = null;

  /**
   * @type {null | HTMLFormElement}
   */
  #form = null;

  /**
   * @param {HTMLDivElement} app
   */
  constructor(app) {
    this.#app = app;
    this.renderContent = this.renderContent.bind(this);
    this.formSubmitListener = this.formSubmitListener.bind(this);
    this.init = this.init.bind(this);
  }

  init() {
    this.renderContent();
  }

  destroy() {
    if (!this.#form) return;

    this.#form.removeEventListener("submit", this.formSubmitListener);
    this.#form = null;
  }

  formSubmitListener(e) {
    e.preventDefault();
    const productName = this.#form.reviewProduct.value;
    const review = this.#form.reviewText.value;

    console.log(productName, review);
    setReview(productName, review);
    this.#form.reviewProduct.value = "";
    this.#form.reviewText.value = "";
  }

  renderContent() {
    if (!this.#app) return;
    this.#app.innerHTML = `<div class="container">
        <h1 class="title">Add your review</h1>
        <form class="add"
              id="reviewForm">
          <label for="reviewProduct"
                 class="add__label">
            Name of product:
          </label>
          <input type="text"
                 name="reviewProduct"
                 id="reviewProduct"
                 class="add__input"
                 placeholder="Name...">
          <label for="reviewText"
                 class="add__label">
            Review text:
          </label>
          <textarea name="reviewText"
                    id="reviewText"
                    cols="30"
                    rows="10"
                    class="add__textarea"
                    placeholder="I Like it..."></textarea>
          <button type="submit"
                  class="add__btn">Add Review</button>
        </form>
      </div>
    `;
    this.#form = this.#app.querySelector("#reviewForm");
    this.#form.addEventListener("submit", this.formSubmitListener);
  }
}
