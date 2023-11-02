import React from 'react';
import './Cookie.css'; // Import your CSS file

const Cookie = () => {
  return (
    <div className="App">
      <header>
        <h1>Welcome to The Startups Kitchen</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section>
          <h1>Cookie Policy</h1>
          <p>Last updated: 10/10/2023</p>
          <p>This Cookie Policy explains how The Startups Kitchen ("we," "us," or "our") uses cookies and similar technologies when you visit our website or use our services ("Services"). By using our Services, you consent to the use of cookies as described in this policy.</p>

          <h2>What are Cookies?</h2>
          <p>Cookies are small text files that are stored on your computer or device when you visit a website. They are widely used to make websites work or improve their efficiency, as well as to provide information to website owners.</p>

          <h2>How We Use Cookies</h2>
          <p>We use cookies for various purposes, including to:</p>
          <ul>
            <li>Enable certain functions of our Services</li>
            <li>Provide analytics and gather information about your usage patterns</li>
            <li>Remember your preferences and settings</li>
            <li>Improve our Services and user experience</li>
          </ul>

          <h2>Types of Cookies We Use</h2>
          <ol>
            <li>
              <strong>Essential Cookies:</strong>
              <p>These cookies are necessary for the website to function properly. They enable you to navigate our website and use its features.</p>
            </li>
            <li>
              <strong>Performance Cookies:</strong>
              <p>These cookies collect information about how you use our website, such as which pages you visit most often. These cookies do not collect personally identifiable information.</p>
            </li>
            <li>
              <strong>Functionality Cookies:</strong>
              <p>These cookies allow us to remember your preferences and choices, such as your username or language, to enhance your user experience.</p>
            </li>
            <li>
              <strong>Analytics Cookies:</strong>
              <p>We use analytics tools, such as Google Analytics, which use cookies to collect data about website traffic and user behavior. This information helps us improve our Services.</p>
            </li>
            <li>
              <strong>Advertising Cookies:</strong>
              <p>We may use advertising cookies to display personalized ads on our website or other websites you visit. These cookies are usually placed by third-party advertising networks.</p>
            </li>
          </ol>

          <h2>Managing Cookies</h2>
          <p>You can control and manage cookies in your browser settings. Most browsers allow you to block or delete cookies, and you can choose to accept or reject cookies on a site-by-site basis.</p>
          <p>Please note that if you disable or delete cookies, some parts of our website may not function properly, and your user experience may be impacted.</p>

          <h2>Changes to this Policy</h2>
          <p>We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any changes will be posted on this page, and the revised policy will be effective when posted.</p>

          <h2>Contact Us</h2>
          <p>If you have any questions or concerns about our Cookie Policy, please contact us at <a href="mailto:thestartups.kitchen@gmail.com">thestartups.kitchen@gmail.com</a>.</p>
        </section>
      </main>

      <footer>
        <p>Contact us: <a href="mailto:thestartups.kitchen@gmail.com">thestartups.kitchen@gmail.com</a></p>
      </footer>
    </div>
  );
}

export default Cookie;
