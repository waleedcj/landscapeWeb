import React, { useEffect, useState } from "react";
import { Image } from "astro:assets";
import MishMishImage from "@/assets/svg/mishmishlight.svg?url";
import { SITE_TITLE } from "../../consts";
import styles from "./header.module.css";

const Header = () => {
  const [isShrunk, setShrunk] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    const handler = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20)
        ) {
          return true;
        }

        if (
          isShrunk &&
          document.body.scrollTop < 4 &&
          document.documentElement.scrollTop < 4
        ) {
          return false;
        }

        return isShrunk;
      });
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const isActive = (href: string) =>
    href === currentPath || href === currentPath.replace(/\/$/, "");

  return (
    <header className={isShrunk ? styles.shrunk : ""}>
      <img src={MishMishImage} alt="mishmishLogo" />
      <div className={styles?.wrapper}>

      
      <ul className={styles?.menu}>
        <li className={styles.menuItemOne}> 
          <a className={styles.itemText} href="/">HOME</a>
        </li>
        <li  className={styles.menuItemTwo}>
          <a className={styles.itemText} href="/about">ABOUT</a>
        </li>
        <li className={styles.menuItemThree}>
          <a className={styles.itemText} href="/services">SERVICES</a>
        </li>
        <li className={styles.menuItemFour}>
          <a className={styles.itemText} href="/blog">BLOG</a>
        </li>
        <li className={styles.menuItemFive}>
          <a className={styles.itemText} href="/contact">CONTACT</a>
        </li>
      </ul>
      </div>
    </header>
  );
};

export default Header;
