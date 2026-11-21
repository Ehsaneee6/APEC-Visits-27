import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__row">
        <div>
          <p className="footer__label">Main partner · Main sponsor</p>
          <div className="footer__logos">
            {/* TODO(Member 1): replace with the real logo images in /public */}
            <span className="footer__slot mono">[PARTNER LOGO]</span>
            <span className="footer__slot mono">[SPONSOR LOGO]</span>
          </div>
        </div>
        <div className="footer__contact">
          <p className="footer__label">Contact us</p>
          <p className="mono">@apeceg &nbsp; @apecans &nbsp; apeceg.com</p>
        </div>
      </div>
    </footer>
  );
}
