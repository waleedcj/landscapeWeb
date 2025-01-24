import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./Header.module.css";
import MishMishImage from "@/assets/svg/mishmishlight.svg?url";
import MishMishRmBg from "@/assets/svg/rmBg.png?url"

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });

  const [isShrunk, setShrunk] = useState(false);
  // const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShrunk(true);
      } else {
        setShrunk(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // useEffect(() => {
  //   setCurrentPath(window.location.pathname);
  // }, []);

  const menuToggleHandler = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className={isShrunk ? styles.shrunk : styles.header}>
      <div className={styles.header__content}>
        <a href="/" className={styles.header__content__logo}>
          <img src={isShrunk ? MishMishRmBg : MishMishImage} alt="MishMish Logo" />
        </a>
        <nav
          className={`${styles.header__content__nav} ${
            menuOpen && size.width && size.width < 768 ? styles.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <a href="/about" onClick={menuToggleHandler}>
                ABOUT
              </a>
            </li>
            <li>
              <a href="/services" onClick={menuToggleHandler}>
                SERVICES
              </a>
            </li>
            <li>
              <a href="/blog" onClick={menuToggleHandler}>
                BLOG
              </a>
            </li>
            <li>
              <a href="/contact" onClick={menuToggleHandler}>
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles.header__content__toggle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
    </>
  
  );
};

export default Header;
