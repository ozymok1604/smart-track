import { useDispatch } from "react-redux";
import { stopShowingAllert } from "../../store";
import Close from "../../assets/Close.svg";
import styles from "./styles.module.scss";

const Message = () => {
  const dispatch = useDispatch();
  const handleCloseAllert = () => {
    dispatch(stopShowingAllert(false));
  };
  return (
    <div onClick={handleCloseAllert} className={styles.modal}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={styles.modal_content}
      >
        <div className={styles.close_container}>
          <img
            onClick={handleCloseAllert}
            className={styles.close}
            alt="Close"
            src={Close}
          />
        </div>
        <div className={styles.content_wrapper}>
          <div className={styles.message}>Sequence is created.</div>
        </div>
      </div>
    </div>
  );
};

export { Message };
