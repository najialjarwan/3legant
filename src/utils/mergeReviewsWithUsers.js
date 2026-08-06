export const mergeReviewsWithUsers = (reviews, users) => {
    return reviews.map(review => {
        const user = users.find(u => u.userName === review.userName);

        return {
            user,
            rating: review.rating,
            comment: review.comment,
        };
    });
};