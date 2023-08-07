import { useDispatch, useSelector } from "react-redux";
import { SideBarMenu } from "../../layouts/SideBarMenu";
import { changeTab, openAddStuffModal } from "../../store";
import { Table } from "../../Components/Table";
import { Button } from "../../Components/Button";
import { AddStuffModal } from "../../layouts/AddStuffModal";
import styles from "./styles.module.scss";

const Stuff = () => {
  const tabs = ["Doctors", "Assistants", "Receptionists"];
  const activeTab = useSelector((state: SmartTrackState) => state.tab);

  const dispatch = useDispatch();
  const handleTabChange = (tab: string) => {
    dispatch(changeTab(tab));
  };

  const isOpenAddStuffModal = useSelector(
    (state: SmartTrackState) => state.isOpenAddStuffModal
  );

  const employees = JSON.parse(localStorage.getItem("employees") || "[]");

  const doctors = employees.filter(
    (employee: Doctor) => employee.type == "Doctors"
  );

  const assistants = employees.filter(
    (employee: Assistant) => employee.type == "Assistants"
  );

  const receptionists = employees.filter(
    (employee: Receptionist) => employee.type == "Receptionists"
  );
  const handleOpenAddStuffModal = () => {
    dispatch(openAddStuffModal(true));
  };
  return (
    <div className={styles.page}>
      <SideBarMenu />

      <div className={styles.page_content}>
        {isOpenAddStuffModal && <AddStuffModal type={activeTab} />}
        <div className={styles.header}>
          <div className={styles.navigation}>
            {tabs.map((tab) => {
              return (
                <div
                  style={{
                    borderBottom:
                      activeTab == tab ? "1px solid #6ac7be color:#6ac7be" : "",
                  }}
                  onClick={() => handleTabChange(tab)}
                  className={styles.navigationItem}
                >
                  {tab}
                </div>
              );
            })}
          </div>
          <div className={styles.button_container}>
            <Button
              onClick={handleOpenAddStuffModal}
              title="Add new"
              type="primary"
            />
          </div>
        </div>
        {activeTab == "Doctors" ? (
          <Table rowType="doctor" rows={doctors} />
        ) : activeTab == "Assistants" ? (
          <Table rowType="assistant" rows={assistants} />
        ) : (
          <Table rowType="receptionist" rows={receptionists} />
        )}
      </div>
    </div>
  );
};

export { Stuff };
