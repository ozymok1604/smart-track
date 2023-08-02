import { Button } from "../../Components/Button";
import { Field } from "../../Components/Field";

import { SideBarMenu } from "../../layouts/SideBarMenu";

import styles from "./styles.module.scss";

const Dashboard = () => {
  return (
    <div className={styles.page}>
      <SideBarMenu />
      <div className={styles.page_content}>
        <Field placeholder="Name" title="Name" />
        <Field placeholder="Name" title="Name" />
      </div>
    </div>
  );
};

export { Dashboard };
