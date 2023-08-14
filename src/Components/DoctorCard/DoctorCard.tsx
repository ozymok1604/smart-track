import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Button } from "../Button";
import { changeCount } from "../../store";
import styles from "./styles.module.scss";

const DoctorCard = ({ doctor }: { doctor?: Doctor }) => {
  const count = useSelector((state: SmartTrackState) => state.count);
  const dispatch = useDispatch();
  const [countNumber, changeCountNumber] = useState(count);
  const handleAddCountNumber = () => {
    changeCountNumber(countNumber + 1);
    dispatch(changeCount(countNumber));
  };
  const handleMinuscountNumber = () => {
    changeCountNumber(countNumber - 1);
    dispatch(changeCount(countNumber));
  };

  const doctorName = doctor?.name?.split(" ");

  return (
    <div className={styles.flex_container}>
      <div className={styles.right_container}>
        <Button type="reset" title="Reset" />
      </div>
      <div className={styles.left_container}>
        <div className={styles.doctor_name}>{doctorName?.[0]}</div>
      </div>
      <div className={styles.left_container}>
        <div className={styles.doctor_name}>{doctorName?.[1]}</div>
      </div>
      <div className={styles.left_container}>
        <div className={styles.doctor_profession}>Therapist</div>
      </div>

      <div className={styles.line_options}>
        <div className={styles.change_count} onClick={handleMinuscountNumber}>
          -
        </div>
        <div className={styles.count}>{countNumber}</div>
        <div onClick={handleAddCountNumber} className={styles.change_count}>
          +
        </div>
        <div>in line</div>
        <Button title="stop the line" type="stop" />
      </div>
    </div>
  );
};

export { DoctorCard };
