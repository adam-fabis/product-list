
export const ratingHandler = (rating) => {
    const stars = [];
    const maxStars = 5;
    for (let i = 0; i < maxStars; i++) {
        if (i < rating) {
            stars.push(true);
        } else {
            stars.push(false);
        }
    }
    return stars;
};
