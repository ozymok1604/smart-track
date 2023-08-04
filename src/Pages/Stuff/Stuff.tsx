import { useDispatch } from "react-redux";
import { SideBarMenu } from "../../layouts/SideBarMenu";

import { changeTab } from "../../store";
import { useSelector } from "react-redux";
import { Table } from "../../Components/Table";

import styles from "./styles.module.scss";
import { Button } from "../../Components/Button";

const Stuff = () => {
  const tabs = ["Doctors", "Assistants", "Receptionists"];
  const activeTab = useSelector((state: SmartTrackState) => state.tab);
  const dispatch = useDispatch();
  const handleTabChange = (tab: string) => {
    dispatch(changeTab(tab));
  };

  const doctorRows = [
    {
      name: "Alex Sample",
      email: "frontdesk@gmail.com",
      phone: "0967970902",
      allerts: [
        "assistant",
        "doctor",
        "finances",
        "patient",
        "emergency",
        "empty",
      ],
      rooms: ["1a", "1b", "3f"],
    },
    {
      name: "Alex Sample",
      email: "frontdesk@gmail.com",
      phone: "0967970902",
      allerts: [
        "assistant",
        "doctor",
        "finances",
        "patient",
        "emergency",
        "empty",
      ],
      rooms: ["1a", "1b", "3f"],
    },
    {
      name: "Alex Sample",
      email: "frontdesk@gmail.com",
      phone: "0967970902",
      allerts: [
        "assistant",
        "doctor",
        "finances",
        "patient",
        "emergency",
        "empty",
      ],
      rooms: ["1a", "1b", "3f"],
    },
    {
      name: "Alex Sample",
      email: "frontdesk@gmail.com",
      phone: "0967970902",
      allerts: [
        "assistant",
        "doctor",
        "finances",
        "patient",
        "emergency",
        "empty",
      ],
      rooms: ["1a", "1b", "3f"],
    },
    {
      name: "Alex Sample",
      email: "frontdesk@gmail.com",
      phone: "0967970902",
      allerts: [
        "assistant",
        "doctor",
        "finances",
        "patient",
        "emergency",
        "empty",
      ],
      rooms: ["1a", "1b", "3f"],
    },
    {
      name: "Alex Sample",
      email: "frontdesk@gmail.com",
      phone: "0967970902",
      allerts: [
        "assistant",
        "doctor",
        "finances",
        "patient",
        "emergency",
        "empty",
      ],
      rooms: ["1a", "1b", "3f"],
    },
    {
      name: "Alex Sample",
      email: "frontdesk@gmail.com",
      phone: "0967970902",
      allerts: [
        "assistant",
        "doctor",
        "finances",
        "patient",
        "emergency",
        "empty",
      ],
      rooms: ["1a", "1b", "3f"],
    },
    {
      name: "Alex Sample",
      email: "frontdesk@gmail.com",
      phone: "0967970902",
      allerts: [
        "assistant",
        "doctor",
        "finances",
        "patient",
        "emergency",
        "empty",
      ],
      rooms: ["1a", "1b", "3f"],
    },
    {
      name: "Alex Sample",
      email: "frontdesk@gmail.com",
      phone: "0967970902",
      allerts: [
        "assistant",
        "doctor",
        "finances",
        "patient",
        "emergency",
        "empty",
      ],
      rooms: ["1a", "1b", "3f"],
    },
    {
      name: "Alex Sample",
      email: "frontdesk@gmail.com",
      phone: "0967970902",
      allerts: [
        "assistant",
        "doctor",
        "finances",
        "patient",
        "emergency",
        "empty",
      ],
      rooms: ["1a", "1b", "3f"],
    },
  ];

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
  return (
    <div className={styles.page}>
      <SideBarMenu />

      <div className={styles.page_content}>
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
            <Button title="Add new" type="primary" />
          </div>
        </div>
        {activeTab == "Doctors" ? (
          <Table rowType="doctor" rows={doctorRows} />
        ) : activeTab == "Assistants" ? (
          <Table rowType="assistant" rows={assistantRows} />
        ) : (
          <Table rowType="receptionist" rows={receptionistRows} />
        )}
      </div>
    </div>
  );
};

export { Stuff };
