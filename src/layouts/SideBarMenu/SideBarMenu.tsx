import { MenuItem } from "../../Components/MenuItem";
import Allerts from "../../assets/Allerts.svg";
import Dashboard from "../../assets/Dashboard.svg";
import Sequence from "../../assets/Sequence.svg";
import Stuff from "../../assets/Stuff.svg";
import { Button } from "../../Components/Button";
import styles from "./styles.module.scss";

const SideBarMenu = () => {
  const menuList = [
    { title: "Dashboard", img: Dashboard, link: "/smart/" },
    { title: "Stuff", img: Stuff, link: "/smart/stuff" },
    { title: "Allerts", img: Allerts, link: "/smart/allerts" },
    { title: "Sequence", img: Sequence, link: "/smart/sequence" },
  ];

  return (
    <div className={styles.left_side_menu}>
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
