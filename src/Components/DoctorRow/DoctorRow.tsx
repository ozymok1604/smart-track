import { useDispatch } from "react-redux";
import Edit from "../../assets/Edit.svg";
import Delete from "../../assets/Delete.svg";
import {
  getEmployeeData,
  openAddStuffModal,
  openDeleteModal,
} from "../../store";
import styles from "./styles.module.scss";

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
      <div className={styles.name}>{row?.name}</div>
      <div className={styles.email}>{row?.email}</div>
      <div className={styles.phone}>{row?.phone}</div>

      <div className={styles.allerts_container}>
        {row?.allerts?.map((allert: string) => {
          return (
            <div title={allert} key={allert} className={styles[allert]}></div>
          );
        })}
      </div>
      <div>
        <span>Rooms </span>
        {row?.rooms?.map((room: Room) => (
          <span key={room.id} className={styles.room}>
            {room?.name}
          </span>
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
