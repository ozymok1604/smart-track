import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../Button";
import { editEmployee } from "../../store";
import styles from "./styles.module.scss";

const DoctorCard = ({ doctor }: { doctor?: Doctor }) => {
  const dispatch = useDispatch();
  const [countNumber, changeCountNumber] = useState<number>(
    doctor?.countInLine || 0
  );

  const handleAddCountNumber = () => {
    changeCountNumber(countNumber + 1);
    dispatch(editEmployee({ ...doctor, countInLine: countNumber + 1 }));
  };
  const handleMinusCountNumber = () => {
    changeCountNumber(countNumber - 1 >= 0 ? countNumber - 1 : 0);
    dispatch(
      editEmployee({
        ...doctor,
        countInLine: countNumber - 1 >= 0 ? countNumber - 1 : 0,
      })
    );
  };

  const handleStopTheLine = () => {
    dispatch(editEmployee({ ...doctor, stopped: !doctor?.stopped }));
  };

  const handleResetRooms = () => {
    dispatch(editEmployee({ ...doctor, rooms: [] }));
  };

  const doctorName = doctor?.name?.split(" ");

  return (
    <div className={styles.flex_container}>
      <div className={styles.right_container}>
        <Button onClick={handleResetRooms} type="reset" title="Reset" />
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
        <div className={styles.change_count} onClick={handleMinusCountNumber}>
          -
        </div>
        <div className={styles.count}>{countNumber}</div>
        <div onClick={handleAddCountNumber} className={styles.change_count}>
          +
        </div>
        <div>in line</div>
        <Button
          onClick={handleStopTheLine}
          title={doctor?.stopped ? "start the line" : "stop the line"}
          type="stop"
        />
      </div>
    </div>
  );
};

export { DoctorCard };
