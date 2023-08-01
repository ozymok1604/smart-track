import { useDispatch } from "react-redux";
import { changeTab } from "../../store";
import styles from "./styles.module.scss";

const MenuItem = (menuItem: menuItem) => {
  const dispatch = useDispatch();
  const onTabChange = () => {
    dispatch(changeTab(menuItem.title));
  };
  return (
    <div onClick={onTabChange} className={styles.menu_element}>
      <img alt={menuItem.title} src={menuItem.img} />
      <div className={styles.title}>{menuItem.title}</div>
    </div>
  );
};

export { MenuItem };
