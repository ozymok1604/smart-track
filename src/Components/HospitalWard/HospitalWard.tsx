import { useDispatch } from "react-redux";
import ArrowDown from "../../assets/ArrowDown.svg";
import {
  getEmployeeData,
  getRoomData,
  openWardOptionsModal,
} from "../../store";
import styles from "./styles.module.scss";

const HospitalWard = ({ doctor, room }: { doctor?: Doctor; room: Room }) => {
  const dispatch = useDispatch();
  const handleOpenWardModal = () => {
    dispatch(openWardOptionsModal(true));
    dispatch(getRoomData(room));
    dispatch(getEmployeeData(doctor as Doctor));
  };
  const moreOneOption = (room?.options?.length as any) > 1 ? true : false;
  const style = room?.options?.[room?.options?.length - 1]?.style || "empty";
  return (
    <div onClick={handleOpenWardModal} className={styles.ward}>
      <div className={styles.header}>
        <div className={styles.ward_number}>
          <div className={styles.text}>{room.name}</div>
        </div>
        <div className={styles.time}>10:25</div>
      </div>
      <div className={moreOneOption ? styles.user_option : styles[style]}>
        <div className={styles.option_text}>
          {moreOneOption
            ? room?.options?.length
            : room?.options?.[0]?.title?.charAt(0) || "E"}
        </div>
      </div>
      <div className={styles.option_container}>
        <div className={styles.last_option}>
          {room?.options?.[room?.options.length - 1]?.title || "Empty"}
        </div>
        <img className={styles.arrow} alt="arrow" src={ArrowDown} />
      </div>
    </div>
  );
};

export { HospitalWard };
