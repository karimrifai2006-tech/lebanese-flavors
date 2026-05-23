import './App.css';
function App() {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <h1>Lebanese Flavors</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Home Section */}
      <section id="home" className="hero">
        <h2>Welcome to Lebanese Flavors</h2>
        <p>
          Experience the taste of authentic Lebanese cuisine
        </p>
        <img
          src="https://images.unsplash.com/photo-1552566626-52f8b828add9"
          alt="Restaurant"
        />
        <a href="#menu">
  <button>Order Now</button>
</a>
      </section>

      {/* Menu Section */}
      <section id="menu" className="section">
        <h2>Our Menu</h2>
        <div className="menu-grid">
          <div className="menu-item">
            <img
              src="/Hummus.jpg"
              alt="Hummus"
            />
            <h3>Hummus</h3>
            <p>$5</p>
          </div>
          <div className="menu-item">
            <img
              src="/tabbouleh.jpg"
              alt="Tabbouleh"
            />
            <h3>Tabbouleh</h3>
            <p>$6</p>
          </div>
          <div className="menu-item">
            <img
              src="/pexels-omar-b-shokerat-3263898-18177324.jpg"
              alt="Shawarma"
            />
            <h3>Shawarma</h3>
            <p>$8</p>
          </div>
          <div className="menu-item">
            <img
              src="/falafel.jpg"
              alt="Falafel"
            />
            <h3>Falafel</h3>
            <p>$5</p>
          </div>
          <div className="menu-item">
            <img
              src="/Fried-Lebanese-Kibbeh-Recipe-500x500.jpeg"
              alt="Kibbeh"
            />
            <h3>Kibbeh</h3>
            <p>$4.5</p>
          </div>
           <div className="menu-item">
            <img
              src="/ff8ceadc2b4cc153f6db5e9b464c4b26.jpg"
              alt="Sawda Nayyeh"
            />
            <h3>Sawda Nayyeh</h3>
            <p>$7.5</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2>About Us</h2>
        <p>
          Lebanese Flavors is a restaurant that offers traditional
          Lebanese food prepared with authentic recipes and fresh ingredients.
        </p>
        <p>
          Our mission is to share the rich culture and taste of Lebanon
          with everyone.
        </p>
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
          alt="Restaurant Interior"
          className="about-image"
        />
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact Us</h2>

        <p>Email: info@lebaneseflavors.com</p>
        <p>Phone: +961 81 329 597</p>
        <p>Address: Baalbeck, Lebanon</p>

        <form className="contact-form">
          <input
            type="text"
            placeholder="Enter your name"
            required
          />
          <input
            type="email"
            placeholder="Enter your email"
            required
          />
          <textarea
            placeholder="Write your message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Lebanese Flavors | All Rights Reserved</p>
      </footer>
    </div>
  );
}
export default App;