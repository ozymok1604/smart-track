import Edit from "../../assets/Edit.svg";
import Delete from "../../assets/Delete.svg";
import Assistant from "../../assets/Assistant.svg";
import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";
import {
  getEmployeeData,
  openAddStuffModal,
  openDeleteModal,
} from "../../store";

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
      <div>{row.name}</div>
      <div>{row.email}</div>
      <div>{row.phone}</div>

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
