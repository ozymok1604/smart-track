import { Button } from "../Button";
import styles from "./styles.module.scss";

const DoctorCard = () => {
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
        <div>-</div>
        <div className={styles.count}>5</div>
        <div>+</div>
        <div>in line</div>
        <Button title="stop the line" type="stop" />
      </div>
    </div>
  );
};

export { DoctorCard };
