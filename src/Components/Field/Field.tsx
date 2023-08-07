import styles from "./styles.module.scss";

const Field = ({
  title,
  name,
  value,
  onChange,
  placeholder,
}: {
  title: string;
  name?: string;
  value?: string;
  onChange?: (event: any) => void;
  placeholder: string;
}) => {
  return (
    <div className={styles.field_container}>
      <div className={styles.title}>{title}</div>
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  );
};

export { Field };
