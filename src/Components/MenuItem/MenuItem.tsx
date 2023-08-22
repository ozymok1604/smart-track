import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

const MenuItem = ({ menuItem }: { menuItem: MenuItem }) => {
  const navigate = useNavigate();
  const onTabChange = () => {
    navigate(menuItem?.link);
  };
  const hrefArray = window.location.href.split("/");
  const activeTab = "/smart/" + hrefArray[hrefArray.length - 1];
  console.log(activeTab);
  const isActive = activeTab == menuItem.link;

  return (
    <div
      style={{ backgroundColor: isActive ? "#6AC7BE" : "" }}
      className={styles.container}
    >
      <div
        onClick={onTabChange}
        title="menuElement"
        className={styles.menu_element}
      >
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
