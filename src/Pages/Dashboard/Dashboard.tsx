import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setOpenMenu } from "../../store";
import { DoctorLine } from "../../Components/DoctorLine";
import { OptionsModal } from "../../layouts/OptionsModal";
import { SideBarMenu } from "../../layouts/SideBarMenu";
import Menu from "../../assets/Menu.svg";
import styles from "./styles.module.scss";

const Dashboard = () => {
  const isOpen = useSelector(
    (state: SmartTrackState) => state.isOpenWardOptions
  );
  const editedDoctor = useSelector(
    (state: SmartTrackState) => state.editedEmployee
  );
  const employees = JSON.parse(localStorage.getItem("employees") || "[]");
  const getFilteredDoctors = (employees: Employee[]) => {
    return employees.filter(
      (employee: Employee) => employee.type === "Doctors"
    );
  };
  const isOpenMenu = useSelector((state: SmartTrackState) => state.isOpenMenu);

  const [doctors, setDoctors] = useState<any[]>(getFilteredDoctors(employees));
  const dispatch = useDispatch();
  const handleOpenMenu = () => {
    dispatch(setOpenMenu(true));
  };
  const handleCloseMenu = () => {
    dispatch(setOpenMenu(false));
  };

  useEffect(() => {
    setDoctors(getFilteredDoctors(employees));
  }, [editedDoctor]);

  return (
    <div className={styles.page}>
      {isOpenMenu || window.screen.width >= 420 ? (
        <SideBarMenu />
      ) : (
        <img
          onClick={handleOpenMenu}
          className={styles.menu_icon}
          alt="Menu"
          src={Menu}
        />
      )}
      {isOpen && <OptionsModal />}

      <div onClick={handleCloseMenu} className={styles.page_content}>
        {doctors?.map((doctor: Doctor) => (
          <DoctorLine doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export { Dashboard };
