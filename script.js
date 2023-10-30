const appBox = document.querySelector("#app");

const state = new State();
const addReview = new AddReview(appBox);
const viewReviews = new ViewReviews(appBox);

const setView = () => {
  switch (state.view) {
    case "add":
      addReview.init();
      return;
    case "review":
      addReview.destroy();
      viewReviews.init();
      return;
    default:
      addReview.destroy();
      viewReviews.init();
      return;
  }
};

const setAddViewState = () => {
  state.setAddView();
  setView();
};

const setReviewViewState = () => {
  state.setReviewView();
  setView();
};

const addReviewBtn = document.querySelector("#addReviewBtn");
addReviewBtn.addEventListener("click", setAddViewState);

const viewReviewBtn = document.querySelector("#viewReviewBtn");
viewReviewBtn.addEventListener("click", setReviewViewState);

setView();
