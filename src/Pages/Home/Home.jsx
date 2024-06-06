import "../Home/Home.css"
import Banner from "../Banner/Banner"
import Estates from "../Estates/Estates"

const Home = () => {
  return (
    <div>
      <header></header>
      <div id="header-hero-container">
        <section id="hero">
          <div className="fade"></div>
          <div className="hero-text">
            <h1>Buy and sell real estate properties</h1>
            <p>Whether you're looking to buy or rent, our team is here to help. Contact us with any questions, feedback, or to schedule a consultation.</p>
          </div>
        </section>
      </div>

      <section id="how-it-works">
        <div className="container">
          <h2>
            About <span className="text-success">Property</span>
          </h2>
          <p className="w-1/2 mx-auto">
            Real Estate agents are Property consisting of land and the buildings
            on it, along with its seds naturals resources such seds as crops,
            minerals, or water; immovable property of this nature.Since this was a
            limited seds unit auction, we had approached by Developers to release
            incremental units to fulfill the demands at a stepped up cut-off
            price.
          </p>
        </div>
      </section>

      <section id="how-it-works">
        <div className="container">
          <h2>Properties</h2>
          <Banner></Banner>
        </div>
      </section>

      <section id="properties">
        <div className="container">

          <Estates></Estates>
          <button className="rounded">View All Property Listings</button>
        </div>
      </section>
    
    </div>
  );
};

export default Home;