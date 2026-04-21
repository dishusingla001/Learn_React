import { CgProfile } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

  const cartItems = useSelector((store)=>store.bag);

  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <img
            className="myntra_home"
            src="../images/myntra_logo.webp"
            alt="Myntra Home"
          />
        </Link>
      </div>

      <nav className="nav_bar">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">
          Studio <sup>New</sup>
        </a>
      </nav>

      <div className={styles.searchBar}>
        <span className={`material-symbols-outlined ${styles.searchIcon}`}>
          <IoSearchOutline />
        </span>
        <input
          className={styles.searchInput}
          placeholder="Search for products, brands and more"
        />
      </div>

      <div className={styles.actionBar}>
        <div className={styles.actionContainer}>
          <CgProfile />
          <span className="action_name">Profile</span>
        </div>

        <div className={styles.actionContainer}>
          <FaHeart />
          <span className="action_name">Wishlist</span>
        </div>

        <Link to="/Bag" className={styles.actionContainer}>
          <HiOutlineShoppingBag />
          <span className="action_name">Bag</span>
          <span className="bag-item-count">{cartItems.length}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
