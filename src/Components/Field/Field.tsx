import { useState } from "react";
import styles from "./styles.module.scss";

const Field = ({
  title,
  placeholder,
}: {
  title: string;
  placeholder: string;
}) => {
  const [value, changeValue] = useState("");
  const onValueChange = (e: any) => {
    changeValue(e.target.value);
  };
  return (
    <div className={styles.field_container}>
      <div className={styles.title}>{title}</div>
      <input
        value={value}
        onChange={onValueChange}
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  );
};

export { Field };
