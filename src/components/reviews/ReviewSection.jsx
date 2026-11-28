
import { reviews } from "../../data/reviews.js";
import ReviewCard from "./ReviewCard";

function ReviewSection() {
  let totalRating = 0;

  for (let i = 0; i < reviews.length; i++) {
    totalRating += reviews[i].rating;
  }

  const average =
    reviews.length > 0 ? totalRating / reviews.length : 0;

  return (
    <section className="review-section">
      <h2>Customer Reviews</h2>

      {reviews.length === 0 ? (
        <p>No reviews yet. Be the first!</p>
      ) : (
        <>
          <p>Average rating: {average.toFixed(1)}</p>

          <div className="review-list">
            {reviews.map((review) => (
              <ReviewCard
                key={review.id}
                name={review.name}
                rating={review.rating}
                comment={review.comment}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default ReviewSection;
