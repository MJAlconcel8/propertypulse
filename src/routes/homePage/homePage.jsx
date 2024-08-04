import "./homePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
          Discover your perfect home with our comprehensive real estate services. Whether you're buying, selling, or renting, we provide expert guidance and personalized support every step of the way. Explore a vast selection of properties to find a place that matches your lifestyle and budget. Let us help you turn your dream into reality.
          </p>
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
