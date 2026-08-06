export const calculateAverageRating = (reviews) => {
  if (!reviews || reviews.length === 0) return 0;

  const totalRatings = reviews.reduce((sum, review) => sum + review.rating, 0);
  return Math.round(totalRatings / reviews.length);
};
