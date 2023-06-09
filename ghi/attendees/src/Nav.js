function Nav() {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Conference GO!</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
              <a className="nav-link d-none" aria-current="page" href="new-location.html">New Location</a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link d-none"
                  aria-current="page"
                  href="new-presentation.html"
                  >New Presentation</a
                >
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Conferences"
                aria-label="Search"
              />
              <button className="btn btn-outline-success me-2" type="submit">
                Search
              </button>
               <a className="btn btn-primary" href="attend-conference.html"
                >Attend!</a>
            </form>
          </div>
        </div>
      </nav>
  );
}

export default Nav;