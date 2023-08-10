import { useState } from "react";
import ArrowDown from "../../assets/ArrowDown.svg";
import ArrowUp from "../../assets/ArrowUp.svg";
import styles from "./styles.module.scss";

const Select = ({ options }: { options: SelectOption[] }) => {
  const [value, setValue] = useState<string>(options[1].value);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenOptions = () => {
    setIsOpen(!isOpen);
  };

  const handleChangeValue = (value: string) => {
    setValue(value);
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.select}>
      <div onClick={handleOpenOptions} className={styles.value_container}>
        <div className={styles.value}>{value}</div>
        <img
          className={styles.arrow}
          src={isOpen ? ArrowUp : ArrowDown}
          alt="arrow"
        />
      </div>
      {isOpen && (
        <div className={styles.options_box}>
          {options.map((option) => (
            <div
              onClick={() => handleChangeValue(option.value)}
              className={styles.option}
            >
              {option.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { Select };
