export const mergeReviewsWithUsers = (reviews, users) => {
    return reviews.map(review => {
        const user = users.find(u => u.username === review.username);

        return {
            user,
            rating: review.rating,
            comment: review.comment,
            datePosted: review.datePosted
        };
    });
};