
function Footer() {
  return (
    <footer>
      <div className="footer-grid">

        <div>
          <img src="Assets/logo .svg" alt="Little Lemon Logo" className="footer-logo" />
        </div>

        <div>
          <h4>Doormat Navigation</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <p>Address</p>
          <p>Phone Number</p>
          <p>Email</p>
        </div>

        <div>
          <h4>Social Media Links</h4>
          <div class="social-icons">
  <a href="https://facebook.com" target="_blank"><i class="fa-brands fa-facebook"></i></a>
  <a href="https://twitter.com" target="_blank"><i class="fa-brands fa-twitter"></i></a>
  <a href="https://instagram.com" target="_blank"><i class="fa-brands fa-instagram"></i></a>
  <a href="https://linkedin.com" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
  <a href="https://youtube.com" target="_blank"><i class="fa-brands fa-youtube"></i></a>
</div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
