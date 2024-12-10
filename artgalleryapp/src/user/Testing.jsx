import React from "react";
import "./HomePage.css";

const HomePage = () => {
  const categories = [
    {
      id: "1",
      url: "https://res.cloudinary.com/dufxfclza/image/upload/v1731505976/pr0vdhmp4h0m0qbmbmdq.jpg",
      category: "Acrylic Painting",
    },
    {
      id: "2",
      url: "https://res.cloudinary.com/dufxfclza/image/upload/v1727868852/images/d2u4ycn7wl3diegqhjbh.jpg",
      category: "Oil Painting",
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1 className="hero-title">Experience the Artistry</h1>
          <p className="hero-subtitle">
            Discover breathtaking artworks and inspiring creativity.
          </p>
          <button className="hero-button">Explore Now</button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <h2 className="section-title">Explore by Categories</h2>
        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <img
                src={category.url}
                alt={category.category}
                className="category-image"
              />
              <p className="category-name">{category.category}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <h2 className="section-title">About Our Gallery</h2>
          <p className="about-text">
            Welcome to a world of creativity and inspiration. Our gallery is a
            sanctuary for art lovers, showcasing a wide array of styles and
            mediums. From traditional to contemporary art, we bring you closer
            to the masterpieces that define our times.
          </p>
        </div>
        <div className="about-image">
          <img
            src="https://res.cloudinary.com/dufxfclza/image/upload/v1727868852/images/d2u4ycn7wl3diegqhjbh.jpg"
            alt="Gallery"
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
