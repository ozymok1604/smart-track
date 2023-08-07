import { useSelector } from "react-redux";
import { Button } from "../Button";
import styles from "./styles.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeCount } from "../../store";

const DoctorCard = () => {
  const count = useSelector((state: SmartTrackState) => state.count);
  const dispatch = useDispatch();
  const [countNumber, changeCountNumber] = useState(count);
  const handleAddcountNumber = () => {
    changeCountNumber(countNumber + 1);
    dispatch(changeCount(countNumber));
  };
  const handleMinuscountNumber = () => {
    changeCountNumber(countNumber - 1);
    dispatch(changeCount(countNumber));
  };
  return (
    <div className={styles.flex_container}>
      <div className={styles.right_container}>
        <Button type="reset" title="Reset" />
      </div>
      <div className={styles.left_container}>
        <div className={styles.doctor_name}>Benedict</div>
      </div>
      <div className={styles.left_container}>
        <div className={styles.doctor_name}>Cumberbatch</div>
      </div>
      <div className={styles.left_container}>
        <div className={styles.doctor_profession}>Therapist</div>
      </div>

      <div className={styles.line_options}>
        <div className={styles.change_count} onClick={handleMinuscountNumber}>
          -
        </div>
        <div className={styles.count}>{countNumber}</div>
        <div onClick={handleAddcountNumber} className={styles.change_count}>
          +
        </div>
        <div>in line</div>
        <Button title="stop the line" type="stop" />
      </div>
    </div>
  );
};

export { DoctorCard };
