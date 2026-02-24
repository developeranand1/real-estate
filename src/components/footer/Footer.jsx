// import styles from "./Footer.module.css"
// import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa"

// export default function Footer() {
//   return (
//     <footer className={styles.footer}>
//       <div className="container">
//         <div className="row">

//           {/* Column 1 */}
//           <div className="col-lg-3 col-md-6 mb-4">
//             <h5>Explore</h5>
//             <ul>
//               <li>Luxury Apartments</li>
//               <li>New Launch Projects</li>
//               <li>Ready to Move Homes</li>
//               <li>Commercial Spaces</li>
//               <li>Investment Opportunities</li>
//               <li>Property Guides</li>
//             </ul>
//           </div>

//           {/* Column 2 */}
//           <div className="col-lg-3 col-md-6 mb-4">
//             <h5>Company</h5>
//             <ul>
//               <li>About Developer</li>
//               <li>Our Projects</li>
//               <li>Why Choose Us</li>
//               <li>Customer Stories</li>
//               <li>Privacy Policy</li>
//               <li>Terms of Service</li>
//             </ul>
//           </div>

//           {/* Column 3 */}
//           <div className="col-lg-3 col-md-6 mb-4">
//             <h5>Resources</h5>
//             <ul>
//               <li>Home Buying Guide</li>
//               <li>EMI Calculator</li>
//               <li>Area Converter</li>
//               <li>Latest Market News</li>
//               <li>Download Brochure</li>
//               <li>FAQs</li>
//             </ul>
//           </div>

//           {/* Column 4 */}
//           <div className="col-lg-3 col-md-6">
//             <h5>Contact Us</h5>
//             <p>
//               Toll Free: <strong>1800-120-4545</strong><br/>
//               Mon - Sat (10:00 AM - 7:00 PM)
//             </p>

//             <p>Email: support@m3mhomes.com</p>

//             <div className={styles.social}>
//               <FaFacebookF />
//               <FaYoutube />
//               <FaTwitter />
//               <FaInstagram />
//             </div>
//           </div>

//         </div>

//         <div className={styles.bottom}>
//           © {new Date().getFullYear()} M3M Homes. All Rights Reserved.
//         </div>

//       </div>
//     </footer>
//   )
// }


import Link from "next/link";
import styles from "./Footer.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">

        <div className="row gy-4">

          {/* About Company */}
          <div className="col-lg-4 col-md-6">
            <h5 className={styles.logo}>M3M Homes</h5>
            <p className={styles.aboutText}>
              We offer premium luxury residential and commercial
              properties in Gurgaon. Discover modern living with
              world-class amenities and prime locations.
            </p>

            <div className={styles.social}>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaYoutube /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h6>Quick Links</h6>
            <ul className={styles.links}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Projects */}
          <div className="col-lg-3 col-md-6">
            <h6>Featured Projects</h6>
            <ul className={styles.links}>
              <li>M3M Sky Heights</li>
              <li>M3M Golf Estate</li>
              <li>Luxury Residences Gurgaon</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6">
            <h6>Contact Info</h6>

            <div className={styles.contactItem}>
              <FaMapMarkerAlt />
              <span>
                12th Floor, M3M Tower,<br />
                Golf Course Extension Road,<br />
                Gurgaon, Haryana - 122002
              </span>
            </div>

            <div className={styles.contactItem}>
              <FaPhoneAlt />
              <span>+91 98765 43210</span>
            </div>

            <div className={styles.contactItem}>
              <FaEnvelope />
              <span>support@m3mhomes.com</span>
            </div>
          </div>

        </div>

        <div className={styles.bottom}>
          © {new Date().getFullYear()} M3M Homes. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}