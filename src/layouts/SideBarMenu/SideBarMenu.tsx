import { MenuItem } from "../../Components/MenuElement/MenuElement";
import Allerts from "../../assets/Allerts.svg";
import Dashboard from "../../assets/Dashboard.svg";
import Sequence from "../../assets/Sequence.svg";
import Stuff from "../../assets/Stuff.svg";
import { Button } from "../../Components/Button";
import styles from "./styles.module.scss";

const SideBarMenu = () => {
  const menuList = [
    { title: "Dashboard", img: Dashboard, link: "/" },
    { title: "Stuff", img: Stuff, link: "/stuff" },
    { title: "Allerts", img: Allerts, link: "/allerts" },
    { title: "Sequence", img: Sequence, link: "/sequence" },
  ];

  return (
    <div className={styles.left_side_menu}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.menu}>
        {menuList.map((item) => {
          return <MenuItem {...item} />;
        })}
      </div>
      <Button title="Sign Out" type="signOut" />
    </div>
  );
};

export { SideBarMenu };
