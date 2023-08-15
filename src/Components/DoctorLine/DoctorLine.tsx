import { DoctorCard } from "../DoctorCard";
import { HospitalWard } from "../HospitalWard";
import styles from "./styles.module.scss";

import { useSelector } from "react-redux";

const DoctorLine = ({ doctor }: { doctor?: Doctor }) => {
  return (
    <div className={styles.doctor_line}>
      <DoctorCard doctor={doctor} />
      {doctor?.rooms?.map((room: any) => (
        <HospitalWard doctor={doctor} room={room} />
      ))}
    </div>
  );
};

export { DoctorLine };
