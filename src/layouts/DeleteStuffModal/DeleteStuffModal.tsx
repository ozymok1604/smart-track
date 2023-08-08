import { useDispatch, useSelector } from "react-redux";
import { deleteEmployee, openDeleteModal } from "../../store";
import { Button } from "../../Components/Button";
import Close from "../../assets/Close.svg";
import styles from "./styles.module.scss";

const DeleteStuffModal = () => {
  const dispatch = useDispatch();
  const tab = useSelector((state: SmartTrackState) => state.tab);
  const employeeData = useSelector(
    (state: SmartTrackState) => state.employeeData
  );

  const handleCloseModal = () => {
    dispatch(openDeleteModal(false));
  };

  const handleDeleteEmployee = () => {
    dispatch(deleteEmployee(employeeData?.id));
    dispatch(openDeleteModal(false));
  };
  return (
    <div onClick={handleCloseModal} className={styles.modal}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={styles.modal_content}
      >
        <div className={styles.close_container}>
          <img
            onClick={handleCloseModal}
            className={styles.close}
            alt="close"
            src={Close}
          />
        </div>
        <div className={styles.header}>
          <div className={styles.header_title}>Delete {tab?.slice(0, -1)}</div>
        </div>

        <div className={styles.title}>
          Are you sure you want to delete this {tab?.slice(0, -1)}?
        </div>

        <div className={styles.footer}>
          <Button onClick={handleCloseModal} type="primary" title="Cancel" />
          <Button
            onClick={handleDeleteEmployee}
            type="secondary"
            title="Delete"
          />
        </div>
      </div>
    </div>
  );
};

export { DeleteStuffModal };
