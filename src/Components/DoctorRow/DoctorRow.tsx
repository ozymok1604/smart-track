import Edit from "../../assets/Edit.svg";

import Delete from "../../assets/Delete.svg";

import styles from "./styles.module.scss";

const DoctorRow = ({ row, index }: { row: any; index: number }) => {
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
        <img className={styles.action} alt="Edit" src={Edit} />
        <img className={styles.action} alt="Delete" src={Delete} />
      </div>
    </div>
  );
};

export { DoctorRow };
