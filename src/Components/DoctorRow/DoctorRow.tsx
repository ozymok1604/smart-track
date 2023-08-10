import Edit from "../../assets/Edit.svg";
import Delete from "../../assets/Delete.svg";
import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";
import {
  deleteEmployee,
  getEmployeeData,
  openAddStuffModal,
  openDeleteModal,
} from "../../store";

const DoctorRow = ({ row, index }: { row: DoctorRow; index: number }) => {
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
      <div>{row?.name}</div>
      <div>{row?.email}</div>
      <div>{row?.phone}</div>

      <div className={styles.allerts_container}>
        {row?.allerts?.map((allert: string) => {
          return <div className={styles[allert]}></div>;
        })}
      </div>
      <div>
        <span>Rooms </span>
        {row?.rooms?.map((room: string) => (
          <span className={styles.room}>{room}</span>
        ))}
      </div>
      <div className={styles.actions}>
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

export { DoctorRow };
