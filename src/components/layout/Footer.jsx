function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <div className="footer__brand">EduQuery</div>
          <p className="footer__copy">
            © 2024 University Help Desk. Providing calm clarity for every student journey.
          </p>
        </div>
        <nav className="footer__links" aria-label="Footer">
          <a href="#privacy">Privacy Policy</a>
          <a href="#admissions">Admissions Support</a>
          <a href="#security">Campus Security</a>
          <a href="#contact">Contact Faculty</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
