import { useSelector } from "react-redux";
import { Button } from "../../Components/Button";
import { DoctorCard } from "../../Components/DoctorCard";
import { DoctorLine } from "../../Components/DoctorLine";
import { Field } from "../../Components/Field";
import { OptionsModal } from "../../layouts/OptionsModal";

import { SideBarMenu } from "../../layouts/SideBarMenu";

import styles from "./styles.module.scss";

const Dashboard = () => {
  const isOpen = useSelector((state: SmartTrackState) => state.isOpen);
  return (
    <div className={styles.page}>
      <SideBarMenu />
      {isOpen && <OptionsModal />}
      <div className={styles.page_content}>
        <DoctorLine />
        <DoctorLine />
        <DoctorLine />
        <DoctorLine />
      </div>
    </div>
  );
};

export { Dashboard };
