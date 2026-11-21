import Avatar from "./Avatar";
import Rating from "./Rating";

function ReviewHira() {
  return (
    <div className="review-card">
      <Avatar />

      <h3>Hira</h3>

      <Rating />

      <p>
        The cinnamon rolls were amazing.
        I will definitely order again!
      </p>
    </div>
  );
}

export default ReviewHira;