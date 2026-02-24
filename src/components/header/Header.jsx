"use client";

import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Optional: close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
   
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        {/* LEFT: LOGO */}
        <a href="/" className={styles.logoWrap} aria-label="Home">
          {/* Replace with your <Image /> logo */}
          <div className={styles.logoMark}>
            <span className={styles.leaf} />
          </div>
          <div className={styles.logoText}>
            <div className={styles.logoTitle}>Garden</div>
            <div className={styles.logoSub}>RESIDENCY</div>
          </div>
        </a>

        {/* CENTER: NAV */}
        <nav className={styles.nav} aria-label="Primary">
          <a className={styles.navLink} href="#home">Home</a>
          <a className={styles.navLink} href="#overview">Projects</a>
          <a className={styles.navLink} href="#amenities">About</a>
          <a className={styles.navLink} href="#highlights">Blog</a>
          <a className={styles.navLink} href="#contact">Contact Us</a>
        </nav>

        {/* RIGHT: PHONE + MOBILE TOGGLE */}
        <div className={styles.right}>
          <a className={styles.phoneBtn} href="tel:+919090939600">
            <FaPhoneAlt className={styles.phoneIcon} />
            +91-9090939600
          </a>

          <button
            className={styles.burger}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`${styles.mobileMenu} ${open ? styles.show : ""}`}>
        <a onClick={() => setOpen(false)} href="#home">Home</a>
        <a onClick={() => setOpen(false)} href="#overview">Overview</a>
        <a onClick={() => setOpen(false)} href="#amenities">Amenities</a>
        <a onClick={() => setOpen(false)} href="#highlights">Highlights</a>
        <a onClick={() => setOpen(false)} href="#pricing">Pricing</a>
        <a onClick={() => setOpen(false)} href="#location">Location</a>
        <a onClick={() => setOpen(false)} href="#gallery">Gallery</a>
        <a onClick={() => setOpen(false)} href="#contact">Contact Us</a>

        <a className={styles.mobilePhone} href="tel:+919090939600">
          <FaPhoneAlt /> +91-9090939600
        </a>
      </div>
    </header>
     <div className="headerSpacer" /></>
  );
}