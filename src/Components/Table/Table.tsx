import { AssistantRow } from "../AssistantRow";
import { DoctorRow } from "../DoctorRow";
import styles from "./styles.module.scss";

const Table = ({ rows, rowType }: { rows: DoctorRow[]; rowType: RowType }) => {
  return (
    <div className={styles.table}>
      {rows?.map((row: any, index: number) => {
        return rowType == "doctor" ? (
          <DoctorRow key={row.id} row={row} index={index} />
        ) : rowType == "assistant" ? (
          <AssistantRow key={row.id} row={row} index={index} />
        ) : (
          <AssistantRow key={row.id} receptionistRow row={row} index={index} />
        );
      })}
    </div>
  );
};

export { Table };
