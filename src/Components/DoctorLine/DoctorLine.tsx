import { useDispatch } from "react-redux";
import { DoctorCard } from "../DoctorCard";
import { HospitalWard } from "../HospitalWard";
import { openWardOptionsModal } from "../../store";
import styles from "./styles.module.scss";

const DoctorLine = ({ doctor }: { doctor?: Doctor }) => {
  const dispatch = useDispatch();

  const handleOpenWardModal = () => {
    dispatch(openWardOptionsModal(true));
  };
  return (
    <div className={styles.doctor_line}>
      <DoctorCard doctor={doctor} />
      {doctor?.rooms?.map((room: any) => (
        <HospitalWard room={room} onClick={handleOpenWardModal} />
      ))}
    </div>
  );
};

export { DoctorLine };
