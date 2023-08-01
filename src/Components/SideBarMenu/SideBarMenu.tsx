import { useSelector } from "react-redux";

import Allerts from "../../assets/Allerts.svg";
import Dashboard from "../../assets/Dashboard.svg";
import Sequence from "../../assets/Sequence.svg";
import SignOut from "../../assets/SignOut.svg";
import Stuff from "../../assets/Stuff.svg";
import { MenuItem } from "../MenuElement/MenuElement";
import styles from "./styles.module.scss";

const SideBarMenu = () => {
  const tab = useSelector((state: SmartTrackState) => state.tab);

  const menuList = [
    { title: "Dashboard", img: Dashboard },
    { title: "Stuff", img: Stuff },
    { title: "Allerts", img: Allerts },
    { title: "Sequence", img: Sequence },
  ];

  console.log(tab);

  return (
    <div className={styles.left_side_menu}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.menu}>
        {menuList.map((item) => {
          return <MenuItem {...item} />;
        })}
      </div>
      <div className={styles.sign_out}>
        <img alt="SignOut" src={SignOut} />
        <div className={styles.sign_out_title}>Sign Out</div>
      </div>
    </div>
  );
};

export { SideBarMenu };
