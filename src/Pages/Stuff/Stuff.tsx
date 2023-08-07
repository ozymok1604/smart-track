import { useDispatch } from "react-redux";
import { SideBarMenu } from "../../layouts/SideBarMenu";

import { changeTab, openAddStuffModal } from "../../store";
import { useSelector } from "react-redux";
import { Table } from "../../Components/Table";

import styles from "./styles.module.scss";
import { Button } from "../../Components/Button";
import { AddStuffModal } from "../../layouts/AddStuffModal";

const Stuff = () => {
  const tabs = ["Doctors", "Assistants", "Receptionists"];
  const activeTab = useSelector((state: SmartTrackState) => state.tab);
  const newWorker = useSelector((state: SmartTrackState) => state.worker);

  const dispatch = useDispatch();
  const handleTabChange = (tab: string) => {
    dispatch(changeTab(tab));
  };

  const isOpenAddStuffModal = useSelector(
    (state: SmartTrackState) => state.isOpenAddStuffModal
  );

  const workers = JSON.parse(localStorage.getItem("workers") || "[]");

  const doctors = workers.filter((worker: Doctor) => worker.type == "Doctors");

  const assistants = workers.filter(
    (worker: Doctor) => worker.type == "Assistants"
  );

  const receptionists = workers.filter(
    (worker: Doctor) => worker.type == "Receptionists"
  );

  // const doctorRows = [
  //   {
  //     name: "Alex Sample",
  //     email: "frontdesk@gmail.com",
  //     phone: "0967970902",
  //     allerts: [
  //       "assistant",
  //       "doctor",
  //       "finances",
  //       "patient",
  //       "emergency",
  //       "empty",
  //     ],
  //     rooms: ["1a", "1b", "3f"],
  //   },
  //   {
  //     name: "Alex Sample",
  //     email: "frontdesk@gmail.com",
  //     phone: "0967970902",
  //     allerts: [
  //       "assistant",
  //       "doctor",
  //       "finances",
  //       "patient",
  //       "emergency",
  //       "empty",
  //     ],
  //     rooms: ["1a", "1b", "3f"],
  //   },
  //   {
  //     name: "Alex Sample",
  //     email: "frontdesk@gmail.com",
  //     phone: "0967970902",
  //     allerts: [
  //       "assistant",
  //       "doctor",
  //       "finances",
  //       "patient",
  //       "emergency",
  //       "empty",
  //     ],
  //     rooms: ["1a", "1b", "3f"],
  //   },
  //   {
  //     name: "Alex Sample",
  //     email: "frontdesk@gmail.com",
  //     phone: "0967970902",
  //     allerts: [
  //       "assistant",
  //       "doctor",
  //       "finances",
  //       "patient",
  //       "emergency",
  //       "empty",
  //     ],
  //     rooms: ["1a", "1b", "3f"],
  //   },
  //   {
  //     name: "Alex Sample",
  //     email: "frontdesk@gmail.com",
  //     phone: "0967970902",
  //     allerts: [
  //       "assistant",
  //       "doctor",
  //       "finances",
  //       "patient",
  //       "emergency",
  //       "empty",
  //     ],
  //     rooms: ["1a", "1b", "3f"],
  //   },
  //   {
  //     name: "Alex Sample",
  //     email: "frontdesk@gmail.com",
  //     phone: "0967970902",
  //     allerts: [
  //       "assistant",
  //       "doctor",
  //       "finances",
  //       "patient",
  //       "emergency",
  //       "empty",
  //     ],
  //     rooms: ["1a", "1b", "3f"],
  //   },
  //   {
  //     name: "Alex Sample",
  //     email: "frontdesk@gmail.com",
  //     phone: "0967970902",
  //     allerts: [
  //       "assistant",
  //       "doctor",
  //       "finances",
  //       "patient",
  //       "emergency",
  //       "empty",
  //     ],
  //     rooms: ["1a", "1b", "3f"],
  //   },
  //   {
  //     name: "Alex Sample",
  //     email: "frontdesk@gmail.com",
  //     phone: "0967970902",
  //     allerts: [
  //       "assistant",
  //       "doctor",
  //       "finances",
  //       "patient",
  //       "emergency",
  //       "empty",
  //     ],
  //     rooms: ["1a", "1b", "3f"],
  //   },
  //   {
  //     name: "Alex Sample",
  //     email: "frontdesk@gmail.com",
  //     phone: "0967970902",
  //     allerts: [
  //       "assistant",
  //       "doctor",
  //       "finances",
  //       "patient",
  //       "emergency",
  //       "empty",
  //     ],
  //     rooms: ["1a", "1b", "3f"],
  //   },
  //   {
  //     name: "Alex Sample",
  //     email: "frontdesk@gmail.com",
  //     phone: "0967970902",
  //     allerts: [
  //       "assistant",
  //       "doctor",
  //       "finances",
  //       "patient",
  //       "emergency",
  //       "empty",
  //     ],
  //     rooms: ["1a", "1b", "3f"],
  //   },
  // ];

  const receptionistRows = [
    {
      name: "Alex Sample",
      email: "frontdesk@gmail.com",
      phone: "0967970902",
    },
    {
      name: "Alex Sample",
      email: "frontdesk@gmail.com",
      phone: "0967970902",
    },
    {
      name: "Alex Sample",
      email: "frontdesk@gmail.com",
      phone: "0967970902",
    },
    {
      name: "Alex Sample",
      email: "frontdesk@gmail.com",
      phone: "0967970902",
    },
    {
      name: "Alex Sample",
      email: "frontdesk@gmail.com",
      phone: "0967970902",
    },
    {
      name: "Alex Sample",
      email: "frontdesk@gmail.com",
      phone: "0967970902",
    },
  ];

  const assistantRows = [
    {
      name: "Alex Sample",
      email: "frontdesk@gmail.com",
      phone: "0967970902",
    },
    {
      name: "Alex Sample",
      email: "frontdesk@gmail.com",
      phone: "0967970902",
    },
    {
      name: "Alex Sample",
      email: "frontdesk@gmail.com",
      phone: "0967970902",
    },
    {
      name: "Alex Sample",
      email: "frontdesk@gmail.com",
      phone: "0967970902",
    },
    {
      name: "Alex Sample",
      email: "frontdesk@gmail.com",
      phone: "0967970902",
    },
  ];
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
                  style={
                    activeTab == tab
                      ? { borderBottom: "1px solid #6ac7be", color: "#6ac7be" }
                      : {}
                  }
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
