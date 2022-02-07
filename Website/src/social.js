import "./social.css";

function Social() {
  return (
    <div className="social">
      <label for="media"></label>
      <select name="media">
        <option value="instagram">Instagram</option>
        <option value="youtube">Youtube</option>
      </select>
    </div>
  );
}

export default Social;
