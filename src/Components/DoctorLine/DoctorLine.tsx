import { useDispatch } from "react-redux";
import { DoctorCard } from "../DoctorCard";
import { HospitalWard } from "../HospitalWard";
import styles from "./styles.module.scss";
import { openModal } from "../../store";

const DoctorLine = () => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(openModal(true));
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
