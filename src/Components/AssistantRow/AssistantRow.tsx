import { useDispatch } from "react-redux";
import Edit from "../../assets/Edit.svg";
import Delete from "../../assets/Delete.svg";
import Assistant from "../../assets/Assistant.svg";
import {
  getEmployeeData,
  openAddStuffModal,
  openDeleteModal,
} from "../../store";
import styles from "./styles.module.scss";

const AssistantRow = ({
  row,
  index,
  receptionistRow,
}: {
  row: AssistantRow;
  index: number;
  receptionistRow?: boolean;
}) => {
  const dispatch = useDispatch();

  const handleStartEditing = () => {
    dispatch(getEmployeeData(row));
    dispatch(openAddStuffModal({ type: "edit", isOpen: true }));
  };
  const handleStartDeleting = () => {
    dispatch(openDeleteModal({ isOpenDeleteModal: true }));
    dispatch(getEmployeeData(row));
  };
  return (
    <div className={styles.row}>
      <div className={styles.index}>
        <div className={styles.text}>{index + 1}</div>
      </div>
      <div className={styles.name}>{row?.name}</div>
      <div className={styles.email}>{row?.email}</div>
      <div className={styles.phone}>{row?.phone}</div>

      <div className={styles.actions}>
        {!receptionistRow && (
          <img className={styles.action} alt="Assistant" src={Assistant} />
        )}
        <img
          onClick={handleStartEditing}
          className={styles.action}
          alt="Edit"
          src={Edit}
        />
        <img
          onClick={handleStartDeleting}
          className={styles.action}
          alt="Delete"
          src={Delete}
        />
      </div>
    </div>
  );
};

export { AssistantRow };
