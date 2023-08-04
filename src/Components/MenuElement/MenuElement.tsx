import { useDispatch } from "react-redux";
import { changeTab } from "../../store";
import styles from "./styles.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const MenuItem = (menuItem: menuItem) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onTabChange = () => {
    navigate(menuItem.link);
  };
  const hrefArray = window.location.href.split("/");

  const activeTab = "/" + hrefArray[hrefArray.length - 1];

  const isActive = activeTab == menuItem.link;

  return (
    <div
      style={isActive ? { backgroundColor: "#6AC7BE" } : {}}
      className={styles.container}
    >
      <div onClick={onTabChange} className={styles.menu_element}>
        <img
          className={isActive ? styles.filtered_svg : styles.svg}
          alt={menuItem.title}
          src={menuItem.img}
        />
        <div className={styles.title}>{menuItem.title}</div>
      </div>
    </div>
  );
};

export { MenuItem };
