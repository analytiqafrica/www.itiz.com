import Link from "next/link";

const quickLinks = [
  "What is ICO",
  "ICO Apps",
  "Join Us",
  "Tokens",
  "Clients",
  "Whitepaper",
  "Contact",
  "Roadmap",
  "Teams",
  "FAQ",
];

const tweets = Array.from({ length: 4 }, () => ({
  text: "Lorem ipsum dolor sit amet, con sectetur adipiscing elit, sed do eius mod tempor incididunt.",
  handle: "@JohnDoe",
}));

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="subscribe-section">
        <div className="container">
          <div className="sec-title text-center">
            <h2>Subscribe to Our Newsletter</h2>
            <p>
              A Private Limited is the most popular type of partnership Malta. The limited liability <br /> is, in
              fact, the only type of company allowed by Companies.
            </p>
          </div>
          <form action="#" className="subscribe-form clearfix">
            <div className="left-content float-left clearfix">
              <i className="far fa-envelope" />
              <input type="text" placeholder="example@mail.com" />
            </div>
            <div className="right-content float-right">
              <button className="thm-btn" type="submit">
                <span>Subscribe Now</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="footer-widget-wrapper">
        <div className="container">
          <div className="row masonary-layout">
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="footer-widget about-widget">
                <Link href="/">
                  <img src="/img/logo.png" alt="Awesome Image" />
                </Link>
                <p>
                  Be the first to find out about exclusive deals, the latest Lookbooks trends. We&apos;re on a mission
                  to build a better future where technology.
                </p>
                <div className="social">
                  <Link href="#" className="fab fa-facebook-f" aria-label="Facebook">
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link href="#" className="fab fa-twitter" aria-label="Twitter">
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link href="#" className="fab fa-google-plus-g" aria-label="Google Plus">
                    <span className="sr-only">Google Plus</span>
                  </Link>
                  <Link href="#" className="fab fa-instagram" aria-label="Instagram">
                    <span className="sr-only">Instagram</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="footer-widget contact-widget">
                <div className="title">
                  <h3>Address</h3>
                </div>
                <p>
                  <span>Phone:</span> +1 605 722 2032
                </p>
                <p>
                  <span>Email:</span> example@mail.com
                </p>
                <p>
                  <span>Address:</span> Charlotte, North Carolina, <br /> United States
                </p>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="footer-widget links-widget">
                <div className="title">
                  <h3>Quick Links</h3>
                </div>
                <ul className="list-inline link-list">
                  {quickLinks.map((label) => (
                    <li key={label}>
                      <Link href="#">{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="footer-widget tweets-widget">
                <div className="title">
                  <h3>Tweets</h3>
                </div>
                <div className="tweets-carousel owl-theme owl-carousel">
                  {tweets.map((tweet, index) => (
                    <div className="item" key={`${tweet.handle}-${index}`}>
                      <div className="single-tweet">
                        <p>
                          <i className="fab fa-twitter" />
                          {tweet.text}
                        </p>
                        <Link href="#">{tweet.handle}</Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom" id="footer-id">
        <div className="container">
          <div className="footer-copyright">
            <div className="float-left left-content">
              <p>
                Copyright &copy; {currentYear} !TiZ. <Link href="#">Terms of use</Link> <span className="sep">|</span>{" "}
                <Link href="#">Privacy Policy</Link> <span className="sep">|</span> <Link href="#">Sitemap</Link>
              </p>
            </div>
            <div className="float-right right-content">
              <p>All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
