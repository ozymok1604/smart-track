import { MenuItem } from "../../Components/MenuItem";
import Allerts from "../../assets/Allerts.svg";
import Dashboard from "../../assets/Dashboard.svg";
import Sequence from "../../assets/Sequence.svg";
import Stuff from "../../assets/Stuff.svg";
import Menu from "../../assets/Menu.svg";
import { Button } from "../../Components/Button";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { setOpenMenu } from "../../store";
import { useDispatch } from "react-redux";

const SideBarMenu = () => {
  const menuList = [
    { title: "Dashboard", img: Dashboard, link: "/smart/" },
    { title: "Stuff", img: Stuff, link: "/smart/stuff" },
    { title: "Allerts", img: Allerts, link: "/smart/allerts" },
    { title: "Sequence", img: Sequence, link: "/smart/sequence" },
  ];

  const dispatch = useDispatch();

  const handleCloseMenu = () => {
    dispatch(setOpenMenu(false));
  };

  return (
    <div className={styles.left_side_menu}>
      <div className={styles.menu_icon_container}>
        <img
          onClick={handleCloseMenu}
          className={styles.menu_icon}
          alt="Menu"
          src={Menu}
        />
      </div>

      <div className={styles.logo}>Logo</div>

      <div className={styles.menu}>
        {menuList.map((item) => {
          return <MenuItem key={item.title} menuItem={item} />;
        })}
      </div>
      <Button title="Sign Out" type="signOut" />
    </div>
  );
};

export { SideBarMenu };
