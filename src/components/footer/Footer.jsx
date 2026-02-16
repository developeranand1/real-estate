import styles from "./Footer.module.css"
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">

          {/* Column 1 */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5>Explore</h5>
            <ul>
              <li>Luxury Apartments</li>
              <li>New Launch Projects</li>
              <li>Ready to Move Homes</li>
              <li>Commercial Spaces</li>
              <li>Investment Opportunities</li>
              <li>Property Guides</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5>Company</h5>
            <ul>
              <li>About Developer</li>
              <li>Our Projects</li>
              <li>Why Choose Us</li>
              <li>Customer Stories</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5>Resources</h5>
            <ul>
              <li>Home Buying Guide</li>
              <li>EMI Calculator</li>
              <li>Area Converter</li>
              <li>Latest Market News</li>
              <li>Download Brochure</li>
              <li>FAQs</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-lg-3 col-md-6">
            <h5>Contact Us</h5>
            <p>
              Toll Free: <strong>1800-120-4545</strong><br/>
              Mon - Sat (10:00 AM - 7:00 PM)
            </p>

            <p>Email: support@m3mhomes.com</p>

            <div className={styles.social}>
              <FaFacebookF />
              <FaYoutube />
              <FaTwitter />
              <FaInstagram />
            </div>
          </div>

        </div>

        <div className={styles.bottom}>
          © {new Date().getFullYear()} M3M Homes. All Rights Reserved.
        </div>

      </div>
    </footer>
  )
}
