export default function Footer() {
  return (
    <div className="container footer">
      <div className="row">
        <div className="col-md-6 col-lg-8 col-sm-12">
          <ul
            className={
              "justify-content-sm-evenly align-content-sm-between d-flex"
            }
          >
            <li className="mx-2">
              <a href="#">Home</a>
            </li>
            <li className="mx-2">
              <a href="#">Projects</a>
            </li>
            <li className="mx-2">
              <a href="#">Reviews</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Contact Us</h3>

          <div className="d-flex justify-content-between">
            <div className="col-sm-3">
              <a
                href="https://www.linkedin.com/in/yaseen-ali-a26032240/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                  alt="linkedin"
                  className="social-icon"
                />
              </a>
            </div>

            <div className="col-sm-3">
              <a href="https://www.facebook.com/samjhon2917/" target="_blank">
                <img
                  src="https://img.icons8.com/fluent/48/000000/facebook.png"
                  target="_blank"
                />
              </a>
            </div>

            <div className="col-sm-3">
              <a href="https://www.instagram.com/yasin_0kz/" target="_blank">
                <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
