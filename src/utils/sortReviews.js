import { REVIEWS_FILTER } from '@constants';

export const sortReviews = (reviews, filter) => {
    return [...reviews].sort((a, b) => {
        const dateA = new Date(a.datePosted || 0); // fallback for missing
        const dateB = new Date(b.datePosted || 0);
        console.log(dateA)

        if (filter === REVIEWS_FILTER.NEWEST) {
            return dateB - dateA; // newest first
        }
        if (filter === REVIEWS_FILTER.OLDEST) {
            return dateA - dateB; // oldest first
        }
        return 0;
    });
}