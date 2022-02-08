import "./navbar.css";

function Head() {
  return (
    <div className="navbar">
      <div className="logo">
        <h1 className="logo-name">hive</h1>
        <p className="logo-con">Social media, simplified</p>
      </div>
      <a href="./content">Content</a>
      <a href="./analytics">Analytics</a>
      <a href="./promotions">Promotions</a>
      <a href="./profile">Profile</a>
    </div>
  );
}

export default Head;
