class State {
  #view = "view";

  constructor() {
    this.toggleState = this.toggleState.bind(this);
    this.setAddView = this.setAddView.bind(this);
    this.setReviewView = this.setReviewView.bind(this);
  }

  toggleState() {
    this.#view = this.#view === "add" ? "review" : "add";
  }

  setAddView() {
    this.#view = "add";
  }

  setReviewView() {
    this.#view = "review";
  }

  get view() {
    return this.#view;
  }
}
