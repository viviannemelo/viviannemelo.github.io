import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
      <section id="contact">
    <form>
      <h2>Contact</h2>
    <label for="name">Name</label>
    <input id="name" name="name" type="text" required />

    <label for="email">Email</label>
    <input id="email" name="email" type="email" required />

    <label for="phone">Phone Number</label>
    <input id="phone" name="phone" type="tel" />

    <label for="message">Message</label>
    <textarea id="message" name="message" rows="5" required></textarea>

    <button type="submit">Send</button>
  </form>
</section>



  <footer>
    <p>© 2025 Vivianne Melo | QA Engineer</p>
  </footer>
  </div>
    );
  }
}

export default Footer;
