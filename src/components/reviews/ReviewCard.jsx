function ReviewCard({ name, review, rating }) {
  return (
    <div className="review-card">
      <h3>{name}</h3>

      <p>{review}</p>

      <p>Rating: {rating}/5</p>
    </div>
  );
}

export default ReviewCard;