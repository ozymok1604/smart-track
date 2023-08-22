import { useDispatch, useSelector } from "react-redux";
import { SideBarMenu } from "../../layouts/SideBarMenu";
import { changeTab, openAddStuffModal } from "../../store";
import { Table } from "../../Components/Table";
import { Button } from "../../Components/Button";
import { AddStuffModal } from "../../layouts/AddStuffModal";
import { DeleteModal } from "../../layouts/DeleteModal";
import styles from "./styles.module.scss";

const Stuff = ({ testData }: { testData?: any[] }) => {
  const tabs = ["Doctors", "Assistants", "Receptionists"];

  const activeTab = useSelector((state: SmartTrackState) => state.tab);

  const dispatch = useDispatch();
  const handleTabChange = (tab: string) => {
    dispatch(changeTab(tab));
  };

  const stuffModalParameters = useSelector(
    (state: SmartTrackState) => state.stuffModalParameters
  );

  const isOpenDeleteModal = useSelector(
    (state: SmartTrackState) => state.deleteModalParameters.isOpenDeleteModal
  );

  const employees = JSON.parse(
    localStorage.getItem("employees") || JSON.stringify(testData)
  );

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
    dispatch(openAddStuffModal({ type: "add", isOpen: true }));
  };
  return (
    <div className={styles.page}>
      <SideBarMenu />
      {isOpenDeleteModal && <DeleteModal type="stuff" />}
      <div className={styles.page_content}>
        {stuffModalParameters.isOpen && (
          <AddStuffModal employeeType={activeTab} />
        )}

        <div className={styles.header}>
          <div className={styles.navigation}>
            {tabs.map((tab) => {
              return (
                <div
                  onClick={() => handleTabChange(tab)}
                  className={`${styles.navigationItem} ${
                    activeTab === tab ? styles.selected : ""
                  }`}
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
