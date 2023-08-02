import { Button } from "../../Components/Button";

import { SideBarMenu } from "../../layouts/SideBarMenu";

import styles from "./styles.module.scss";

const Dashboard = () => {
  return (
    <div className={styles.page}>
      <SideBarMenu />
      <div className={styles.page_content}>
        <Button title="Add" type="primary" />
        <Button title="Add an Allert" type="add" />
        <Button title="Delete" type="secondary" />
        <Button title="Reset" type="reset" />
        <Button title="Stop" type="stop" />
        <Button title="R" type="small" />
        <Button title="Sign Out" type="signOut" />
        <Button title="Connect" type="connect" />
      </div>
    </div>
  );
};

export { Dashboard };
