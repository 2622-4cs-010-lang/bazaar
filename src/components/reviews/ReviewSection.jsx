import ReviewSara from "./ReviewSara";
import ReviewHira from "./ReviewHira";

function ReviewSection() {
  return (
    <section className="review-section">
      <h1>Customer Reviews</h1>

      <div className="review-row">
        <ReviewSara />
        <ReviewHira />
      </div>
    </section>
  );
}

export default ReviewSection;