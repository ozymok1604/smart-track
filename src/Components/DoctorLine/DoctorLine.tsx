import { useDispatch } from "react-redux";
import { DoctorCard } from "../DoctorCard";
import { HospitalWard } from "../HospitalWard";
import styles from "./styles.module.scss";
import { openWardOptionsModal } from "../../store";

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
