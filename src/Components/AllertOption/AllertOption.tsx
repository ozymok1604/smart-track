import { useDispatch } from "react-redux";
import Edit from "../../assets/Edit.svg";
import { getAllertData, openAllertModal } from "../../store";
import styles from "./styles.module.scss";

const AllertOption = ({ index, allert }: { index: number; allert: any }) => {
  const dispatch = useDispatch();
  const startAllertEditing = () => {
    dispatch(openAllertModal({ type: "edit", isOpen: true }));
    dispatch(getAllertData(allert));
  };
  return (
    <div className={styles.allert_option}>
      <div className={styles.left_container}>
        <div className={styles.index}>{index + 1}</div>
        <div className={styles.name}>{allert.title}</div>
      </div>
      <div className={styles.right_container}>
        <div className={styles[allert.style]}></div>
        <img
          onClick={startAllertEditing}
          className={styles.edit}
          alt="Edit"
          src={Edit}
        />
      </div>
    </div>
  );
};

export { AllertOption };
