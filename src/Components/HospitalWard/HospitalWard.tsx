import ArrowDown from "../../assets/ArrowDown.svg";
import styles from "./styles.module.scss";

const HospitalWard = ({
  room,
  onClick,
}: {
  onClick?: () => void;
  room: Room;
}) => {
  return (
    <div onClick={onClick} className={styles.ward}>
      <div className={styles.header}>
        <div className={styles.ward_number}>
          <div className={styles.text}>{room.name}</div>
        </div>
        <div className={styles.time}>10:25</div>
      </div>
      <div className={styles.user_option}>
        <div className={styles.option_text}>6</div>
      </div>
      <div className={styles.option_container}>
        <div className={styles.last_option}>Assistant Required</div>

        <img className={styles.arrow} alt="arrow" src={ArrowDown} />
      </div>
    </div>
  );
};

export { HospitalWard };
