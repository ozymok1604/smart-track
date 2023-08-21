import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DoctorLine } from "../../Components/DoctorLine";
import { OptionsModal } from "../../layouts/OptionsModal";
import { SideBarMenu } from "../../layouts/SideBarMenu";
import styles from "./styles.module.scss";

const Dashboard = () => {
  const isOpen = useSelector(
    (state: SmartTrackState) => state.isOpenWardOptions
  );
  const editedDoctor = useSelector(
    (state: SmartTrackState) => state.editedEmployee
  );
  const getFilteredDoctors = (employees: Employee[]) => {
    return employees.filter((employee: Employee) => employee.type == "Doctors");
  };

  const employees = JSON.parse(localStorage.getItem("employees") || "[]");

  const [doctors, setDoctors] = useState<any[]>(getFilteredDoctors(employees));

  useEffect(() => {
    setDoctors(getFilteredDoctors(employees));
  }, [editedDoctor]);

  return (
    <div className={styles.page}>
      <SideBarMenu />
      {isOpen && <OptionsModal />}

      <div className={styles.page_content}>
        {doctors?.map((doctor: Doctor) => (
          <DoctorLine doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export { Dashboard };
