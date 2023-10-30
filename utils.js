const ACCESS_KEY = "reviews";

const getReviews = () => {
  try {
    return JSON.parse(localStorage.getItem(ACCESS_KEY));
  } catch (e) {
    return false;
  }
};

const setReviews = (data) => {
  try {
    localStorage.setItem(ACCESS_KEY, JSON.stringify(data));
    return true;
  } catch (e) {
    return false;
  }
};

const setReview = (productName, review) => {
  let allReviews = getReviews();
  if (!allReviews) {
    allReviews = {
      [productName]: [review],
    };
  } else {
    if ((allReviews[productName])) {
      allReviews[productName].push(review);
    } else {
      allReviews = {
        ...allReviews,
        [productName]: [review],
      };
    }
  }
  setReviews(allReviews);
};
