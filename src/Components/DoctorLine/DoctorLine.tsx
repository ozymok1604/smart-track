import { useDispatch } from "react-redux";
import { DoctorCard } from "../DoctorCard";
import { HospitalWard } from "../HospitalWard";
import { openWardOptionsModal } from "../../store";
import styles from "./styles.module.scss";

const DoctorLine = () => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(openWardOptionsModal(true));
  };
  return (
    <div className={styles.doctor_line}>
      <DoctorCard />

      <HospitalWard handleCloseModal={handleCloseModal} />

      <HospitalWard />
      <HospitalWard />
      <HospitalWard />
      <HospitalWard />
    </div>
  );
};

export { DoctorLine };
