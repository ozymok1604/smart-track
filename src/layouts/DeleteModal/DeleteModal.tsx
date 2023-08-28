import { useDispatch, useSelector } from "react-redux";
import {
  deleteEmployee,
  deleteRoom,
  getEmployeeData,
  openDeleteModal,
} from "../../store";
import { Button } from "../../Components/Button";
import Close from "../../assets/Close.svg";
import styles from "./styles.module.scss";

const DeleteModal = ({ type }: { type?: string }) => {
  const dispatch = useDispatch();
  const tab = useSelector((state: SmartTrackState) => state.tab);
  const employeeData = useSelector(
    (state: SmartTrackState) => state.employeeData
  );
  const roomId = useSelector(
    (state: SmartTrackState) => state.deleteModalParameters.roomId
  );

  const handleCloseModal = () => {
    dispatch(openDeleteModal({ isOpenDeleteModal: false }));
  };

  const handleDeleteEmployee = () => {
    type === "stuff"
      ? dispatch(deleteEmployee(employeeData?.id))
      : dispatch(deleteRoom(roomId));

    dispatch(openDeleteModal({ isOpenDeleteModal: false }));
    dispatch(getEmployeeData({}));
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
            alt="Close"
            src={Close}
          />
        </div>
        <div className={styles.header}>
          <div title="header" className={styles.header_title}>
            Delete {type === "stuff" ? tab?.slice(0, -1) : "room"}
          </div>
        </div>

        <div title="text" className={styles.title}>
          Are you sure you want to delete this
          {type === "stuff" ? tab?.slice(0, -1) : " room"}?
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

export { DeleteModal };
