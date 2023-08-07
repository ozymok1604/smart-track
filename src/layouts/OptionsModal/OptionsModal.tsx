import { useDispatch } from "react-redux";
import { openWardOptionsModal } from "../../store";
import Close from "../../assets/Close.svg";
import styles from "./styles.module.scss";

const OptionsModal = () => {
  const dispatch = useDispatch();

  const leftColumn = [
    { title: "Assistant In", value: "assistantIn" },
    { title: "Assistant Required", value: "assistantRequired" },
    { title: "Doctor Required", value: "doctorRequired" },
    { title: "Doctor In", value: "doctorIn" },
    { title: "Patient In", value: "patientIn" },
  ];
  const rightColumn = [
    { title: "Financial In", value: "financialIn" },
    { title: "Financial Required", value: "financialRequired" },
    { title: "Emergency", value: "emergency" },
    { title: "Empty", value: "empty" },
  ];
  const handleCloseModal = () => {
    dispatch(openWardOptionsModal(false));
  };
  return (
    <div onClick={handleCloseModal} className={styles.modal}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={styles.modal_content}
      >
        <div className={styles.left_column}>
          {leftColumn?.map((item: Option) => {
            return (
              <div className={styles.option_container}>
                <div className={styles[item.value]}>{item.title[0]}</div>
                <div className={styles.title}>{item.title}</div>
              </div>
            );
          })}
        </div>
        <div className={styles.right_column}>
          {rightColumn?.map((item: Option) => {
            return (
              <div className={styles.option_container}>
                <div className={styles[item.value]}>{item.title[0]}</div>
                <div className={styles.title}>{item.title}</div>
              </div>
            );
          })}
        </div>
        <img
          onClick={handleCloseModal}
          className={styles.close}
          alt="close"
          src={Close}
        />
      </div>
    </div>
  );
};

export { OptionsModal };
