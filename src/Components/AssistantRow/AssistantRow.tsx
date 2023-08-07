import Edit from "../../assets/Edit.svg";

import Delete from "../../assets/Delete.svg";

import Assistant from "../../assets/Assistant.svg";

import styles from "./styles.module.scss";
const AssistantRow = ({
  row,
  index,
  receptionistRow,
}: {
  row: any;
  index: number;
  receptionistRow?: boolean;
}) => {
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
        <img className={styles.action} alt="Edit" src={Edit} />
        <img className={styles.action} alt="Delete" src={Delete} />
      </div>
    </div>
  );
};

export { AssistantRow };
