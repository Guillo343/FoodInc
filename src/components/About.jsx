import React from 'react'
import '../style/about.css'

export const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <h1>About FoodInc</h1>
        <p>
          Welcome to FoodInc, your ultimate destination for discovering and sharing delicious recipes from around the world. We are dedicated to bringing you a diverse collection of recipes that cater to all tastes and dietary preferences.
        </p>

        <h2>Our Story</h2>
        <p>
          FoodInc was founded in 2023 by Guillermo Muñoz. With a passion for cooking and sharing culinary experiences, Guillermo envisioned a platform where food lovers could come together to explore and share recipes. What started as a small project has grown into a global community of food enthusiasts.
        </p>

        <h2>Our Mission</h2>
        <p>
          At FoodInc, our mission is to make cooking accessible and enjoyable for everyone. We strive to provide high-quality, easy-to-follow recipes that inspire home cooks of all levels. Our goal is to make your cooking experience fun and rewarding, no matter your skill level.
        </p>

        <h2>Meet Our Team</h2>
        <div className="team">
          <div className="team-member">
            <img src="/path/to/photo1.jpg" alt="Team Member Name" />
            <h3>[Team Member Name]</h3>
            <p>[Role/Title]</p>
            <p>[Short bio about the team member]</p>
          </div>
          <div className="team-member">
            <img src="/path/to/photo2.jpg" alt="Team Member Name" />
            <h3>[Team Member Name]</h3>
            <p>[Role/Title]</p>
            <p>[Short bio about the team member]</p>
          </div>
          {/* Add more team members as needed */}
        </div>

        <h2>Community and Collaboration</h2>
        <p>
          We are passionate about building a vibrant cooking community. We collaborate with chefs, nutritionists, and food bloggers to bring you the best recipes and cooking tips. If you’re interested in partnering with us or have a recipe to share, please reach out!
        </p>

        <h2>Contact Us</h2>
        <p>
          Have questions or feedback? We’d love to hear from you! You can contact us via email at <a href="mailto:info@foodinc.com">info@foodinc.com</a> or follow us on social media:
        </p>
        <div className="social-links">
          <a href="https://facebook.com/foodinc" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com/foodinc" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com/foodinc" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </section>
  )
}
