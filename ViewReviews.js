class ViewReviews {
  /**
   *
   * @type {null | HTMLDivElement}
   */
  #app = null;

  /**
   * @type {null | Object}
   */
  #allReviews = null;

  /**
   * @param {HTMLDivElement} app
   */
  constructor(app) {
    this.#app = app;
    this.init = this.init.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }

  init() {
    this.#allReviews = getReviews();
    this.renderContent();
  }

  renderContent() {
    if (!this.#app) return;
    if (!this.#allReviews) {
      this.#app.innerHTML = `<div class="container">
        <h1 class="title">No Reviews Added</h1>
      </div>
      `;
      return;
    }

    const inner = Object.entries(this.#allReviews).map(([itemName, itemReviews]) => {
      const innerTitle = `<dt class="reviews__name"><strong>${itemName}</strong></dt>`;
      const innerReviews = `<dd class="reviews__list details">
              <ul class="details__list">
                ${itemReviews.map(itemReview => `<li class="details__item">${itemReview}</li>`).join("")}
              </ul>
            </dd>`;
      return innerTitle + innerReviews;
    });

    this.#app.innerHTML = `<div class="container">
        <h1 class="title">Reviews</h1>
        <div class="reviews">
          <dl class="reviews__list">
            ${inner}
          </dl>
        </div>
      </div>`;
  }
}
