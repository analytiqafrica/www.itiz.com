import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="header home-page-one">
      <div className="container">
        <div className="appilo-menu clearfix">
          <nav className="navbar navbar-expand-lg navbar-custom navbar-light">
            <Link className="navbar-brand mr-auto" href="/">
              <img
                src="/img/logo.png"
                alt="Awesome Image"
                className="default-logo"
              />
              <img
                src="/img/logo-2.png"
                alt="Awesome Image"
                className="stick-logo"
              />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarToggler"
              aria-controls="navbarToggler"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars" />
            </button>

            <div
              className="collapse navbar-collapse navbar-nav"
              id="navbarToggler"
            >
              <ul className="ml-auto">
                <li>
                  <Link className="nav-link active" href="#banner">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" href="#features">
                    Features
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" href="#how-it-works">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" href="#pricing">
                    Pricing
                  </Link>
                </li>
                <li className="dropdown">
                  <Link className="nav-link" href="#blog">
                    Blog
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link href="/blog.html" target="_blank">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-details.html" target="_blank">
                        Blog single
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="sign-up-btn">
              <Link href="#" className="sign-btn">
                sign in
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
