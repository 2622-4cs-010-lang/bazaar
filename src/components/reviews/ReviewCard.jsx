
function ReviewCard({ name, comment, rating }) {
  return (
    <div className="review-card">
      <h3>{name}</h3>

      <p>{comment}</p>

      <p>Rating: {"★".repeat(rating)}</p>
    </div>
  );
}

export default ReviewCard;
